import { ApiClient } from "@/services/apiClient";
import { useInfiniteQuery } from "@tanstack/react-query";
import {
  Button,
  Card,
  Divider,
  Drawer,
  Flex,
  List,
  Skeleton,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import {
  formatDate,
  getNotificationMessage,
} from "@/features/notifications/utils";
import { CloseOutlined, NotificationOutlined } from "@ant-design/icons";
import { useNotificationDrawerStyles } from "./NotificationDrawerStyles";
import InfiniteScroll from "react-infinite-scroll-component";
import { Notification } from "@/types";

export const NotificationDrawer = () => {
  const [visibleNotifications, setVisibleNotifications] = useState<
    Notification[]
  >([]);
  const [open, setOpen] = useState(false);

  const { styles } = useNotificationDrawerStyles();

  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["notifications"],
    queryFn: ({ pageParam = 1 }) =>
      ApiClient.notifications.fetchNotifications({
        page: pageParam,
        per_page: 15,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage?.meta?.current_page ?? 1;
      const totalPages = lastPage?.meta?.last_page ?? 1;

      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data?.pages) {
      const allNotifications = data.pages
        .flatMap((page) => page?.data)
        .filter((n) => !!n);
      setVisibleNotifications(allNotifications);
    }
  }, [data]);

  const filterNotifications = (id: string) => {
    setVisibleNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showDrawer}
        className={styles.buttonOpen}
        data-count-notification={data?.pages[0]?.meta?.total ?? 0}
      >
        <NotificationOutlined style={{ fontSize: 16 }} />
      </Button>
      <Drawer
        title="Notifications"
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        loading={isLoading}
        open={open}
      >
        <div
          id="scrollableNotifications"
          className={styles.scrollable}
        >
          <InfiniteScroll
            dataLength={visibleNotifications.length}
            next={fetchNextPage}
            hasMore={!!hasNextPage}
            loader={
              <Skeleton
                active
                style={{ marginTop: 12 }}
                paragraph={{ rows: 4 }}
              />
            }
            // eslint-disable-next-line jsx-a11y/accessible-emoji
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            scrollableTarget="scrollableNotifications"
          >
            <List
              dataSource={visibleNotifications}
              grid={{ gutter: [0, 8], column: 1 }}
              itemLayout="vertical"
              renderItem={(notification) => (
                <List.Item className={styles.listItem}>
                  <Card>
                    <Flex vertical>
                      <Flex
                        justify="space-between"
                        align="center"
                      >
                        <Typography.Text>
                          {formatDate(notification?.created_at)}
                        </Typography.Text>
                        <Button
                          type="text"
                          size="small"
                          onClick={() => filterNotifications(notification.id)}
                        >
                          <CloseOutlined />
                        </Button>
                      </Flex>
                      <Typography.Paragraph>
                        {getNotificationMessage({
                          event: notification?.event ?? "unknown_event",
                          data: notification?.data ?? {},
                        })}
                      </Typography.Paragraph>
                    </Flex>
                  </Card>
                </List.Item>
              )}
              bordered={false}
            />
          </InfiniteScroll>
        </div>
      </Drawer>
    </>
  );
};
