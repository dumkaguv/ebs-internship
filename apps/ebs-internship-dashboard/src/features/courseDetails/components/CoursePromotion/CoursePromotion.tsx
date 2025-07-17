import { PromotionBanner } from "@/components";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Dropdown,
  Flex,
  MenuProps,
  Table,
  Typography,
} from "antd";
import filterIcon from "@/assets/filter.svg";
import { useCoursePromotionStyles } from "./CoursePromotionStyles";
import { useQuery } from "@tanstack/react-query";
import { fetchCourseCoupons } from "@/features/courseDetails/api/fetchCourseCoupons";
import { Coupon } from "@libs/types/coupon";
import { useState } from "react";
import {
  CouponDetails,
  CreateOrEditCoupon,
  PromotionChart,
} from "@/features/courseDetails/components";
import { PaginationComponent } from "@libs";
import arrowIcon from "@/assets/arrow.svg";

const formatDate = (isoDate: string) => {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const allColumns = [
  {
    title: "Offer Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (value: number) => `$${value}`,
  },
  {
    title: "Active From",
    dataIndex: "active_from",
    key: "active_from",
    render: (value: string) => formatDate(value),
  },
  {
    title: "Active To",
    dataIndex: "active_to",
    key: "active_to",
    render: (value: string) => formatDate(value),
  },
  {
    title: "Usages",
    dataIndex: "usages",
    key: "usages",
  },
  {
    title: "Limit Per User",
    dataIndex: "limit_per_user",
    key: "limit_per_user",
    render: (value: number) => value ?? 0,
  },
];

export const CoursePromotion = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState<number | null>(null);
  const [visibleKeys, setVisibleKeys] = useState<string[]>(
    allColumns.map((col) => col.key as string)
  );
  const { styles } = useCoursePromotionStyles();

  const [hideStats, setHideStats] = useState(true);
  const perPage = 8;

  const { data, isLoading } = useQuery({
    queryKey: ["coupons", currentPage],
    queryFn: () => fetchCourseCoupons({ per_page: perPage, page: currentPage }),
  });

  const toggleColumn = (key: string) => {
    setVisibleKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const filteredColumns = allColumns.filter((col) =>
    visibleKeys.includes(col.key as string)
  );

  const dropdownItems: MenuProps["items"] = allColumns.map((col) => ({
    label: (
      <div onClick={(e) => e.stopPropagation()}>
        <Checkbox
          checked={visibleKeys.includes(col.key as string)}
          onChange={() => toggleColumn(col.key as string)}
        >
          {col.title}
        </Checkbox>
      </div>
    ),
    key: col.key as string,
  }));

  if (isCreating) {
    return (
      <CreateOrEditCoupon
        couponId={null}
        onCancel={() => setIsCreating(false)}
      />
    );
  }

  if (selectedCoupon) {
    return (
      <CouponDetails
        couponId={selectedCoupon}
        onBack={() => setSelectedCoupon(null)}
      />
    );
  }

  return (
    <Flex>
      <Flex
        vertical
        gap={24}
        className={styles.couponContainer}
      >
        <Flex justify="space-between">
          <Typography.Title level={4}>Coupons</Typography.Title>
          <Button
            type="primary"
            onClick={() => setIsCreating(true)}
          >
            <PlusOutlined color="white" />
            Create New Coupon
          </Button>
        </Flex>

        <PromotionChart />

        <Flex justify="space-between">
          <PromotionBanner
            stats="$200.00"
            title="Total Redeemed"
            percent={8}
            icon={
              <img
                src={arrowIcon}
                alt="icon"
              />
            }
          />
          <PromotionBanner
            stats="551"
            title="Total Coupons"
            percent={8}
            icon={
              <img
                src={arrowIcon}
                alt="icon"
              />
            }
          />
          <PromotionBanner
            stats="$8,723"
            title="Redeemed Amount"
            percent={8}
            icon={
              <img
                src={arrowIcon}
                alt="icon"
              />
            }
          />
        </Flex>

        <Flex className={styles.filter}>
          <Button
            type="text"
            onClick={() => setHideStats(!hideStats)}
          >
            Hide Stats
          </Button>
          <Dropdown
            menu={{ items: dropdownItems }}
            trigger={["click"]}
          >
            <Button type="text">
              Filter
              <img
                src={filterIcon}
                alt="filterIcon"
              />
            </Button>
          </Dropdown>
        </Flex>
        {hideStats &&
          (filteredColumns.length > 0 ? (
            <>
              <Table
                loading={isLoading}
                className={styles.table}
                dataSource={data?.data ?? []}
                columns={filteredColumns}
                rowKey="id"
                onRow={(record: Coupon) => ({
                  onClick: () => {
                    setSelectedCoupon(record.id);
                  },
                  style: { cursor: "pointer" },
                })}
                pagination={false}
              />
              {data?.meta?.total && (
                <Flex justify="center">
                  <PaginationComponent
                    current={currentPage}
                    pageSize={data.meta.per_page}
                    total={data.meta.total}
                    onChange={setCurrentPage}
                  />
                </Flex>
              )}
            </>
          ) : (
            <Typography.Text type="secondary">
              No columns selected. Please use the filter to choose at least one
              column.
            </Typography.Text>
          ))}
      </Flex>
    </Flex>
  );
};
