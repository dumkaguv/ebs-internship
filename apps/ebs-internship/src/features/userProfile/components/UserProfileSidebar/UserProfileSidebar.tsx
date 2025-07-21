import { Avatar, Button, Drawer, Flex, List, Typography } from "antd";
import { useUserProfileSidebarStyles } from "./UserProfileSidebarStyles";
import { Link, useLocation } from "react-router-dom";
import { RoutesEnum } from "@/config/routesEnum";
import { User } from "@libs/types/user";
import { useEffect, useState } from "react";
import { LeftOutlined } from "@ant-design/icons";

interface Props {
  data?: User;
}

export const UserProfileSidebar = ({ data }: Props) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { styles } = useUserProfileSidebarStyles();
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const isMobile = width < 768;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const profileLinks = [
    { key: "profile", label: "Profile", path: RoutesEnum.PROFILE.BASE },
    { key: "courses", label: "My Courses", path: RoutesEnum.PROFILE.COURSES },
    { key: "teachers", label: "Teachers", path: RoutesEnum.PROFILE.TEACHERS },
    { key: "reviews", label: "My Reviews", path: RoutesEnum.PROFILE.REVIEWS },
    { key: "settings", label: "Settings", path: RoutesEnum.PROFILE.SETTINGS },
  ];

  const sidebarContent = (
    <Flex
      vertical
      gap={24}
      className={styles.profileContainer}
    >
      <Flex
        vertical
        align="center"
        justify="center"
        gap={16}
        className={styles.avatarContainer}
      >
        <Avatar
          size={120}
          src={
            data?.avatar ??
            "https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg"
          }
        />
        <Typography.Title level={5}>
          {data?.first_name} {data?.last_name}
        </Typography.Title>
        <Button
          block
          className={styles.shareButton}
        >
          Share Profile
          <img
            src="/icons/share.svg"
            alt="shareIcon"
          />
        </Button>
      </Flex>

      <List
        itemLayout="horizontal"
        dataSource={profileLinks}
        renderItem={(item) => (
          <List.Item>
            <Link
              to={item.path}
              onClick={() => setOpen(false)}
              className={
                currentPath === item.path
                  ? styles.activeLink
                  : styles.defaultLink
              }
            >
              {item.label}
            </Link>
          </List.Item>
        )}
      />
    </Flex>
  );

  return (
    <Flex className={styles.container}>
      {isMobile ? (
        <>
          <Button
            icon={<LeftOutlined />}
            type="default"
            className={styles.menuButton}
            onClick={() => setOpen(true)}
          >
            Open Profile
          </Button>

          <Drawer
            placement="left"
            closable
            onClose={() => setOpen(false)}
            open={open}
            width={"100%"}
          >
            {sidebarContent}
          </Drawer>
        </>
      ) : (
        sidebarContent
      )}
    </Flex>
  );
};
