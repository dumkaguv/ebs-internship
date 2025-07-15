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
  const [selectedCoupon, setSelectedCoupon] = useState<number | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const { styles } = useCoursePromotionStyles();
  const [filterFields, setFilterFields] = useState<string[]>(["name", "code"]);
  const perPage = 8;

  const { data, isLoading } = useQuery({
    queryKey: ["coupons", currentPage],
    queryFn: () => fetchCourseCoupons(currentPage, perPage),
  });

  const handleCheckboxChange = (key: string) => {
    setFilterFields((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const dropdownItems: MenuProps["items"] = allColumns.map((col) => ({
    key: col.key as string,
    label: (
      <div onClick={(e) => e.stopPropagation()}>
        <Checkbox
          checked={filterFields.includes(col.key as string)}
          onChange={() => handleCheckboxChange(col.key as string)}
        >
          {col.title}
        </Checkbox>
      </div>
    ),
  }));

  const filteredData = (data?.data ?? []).filter((row) =>
    filterFields.some((field) => {
      const value = row[field as keyof Coupon];
      return value !== null && value !== undefined && value !== "";
    })
  );

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
          />
          <PromotionBanner
            stats="551"
            title="Total Coupons"
            percent={8}
          />
          <PromotionBanner
            stats="$8,723"
            title="Redeemed Amount"
            percent={8}
          />
        </Flex>

        <Flex className={styles.filter}>
          <Button type="text">Hide Stats</Button>
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

        <Table
          loading={isLoading}
          className={styles.table}
          dataSource={filteredData}
          columns={allColumns}
          rowKey="id"
          onRow={(record: Coupon) => ({
            onClick: () => {
              setSelectedCoupon(record.id);
            },
            style: { cursor: "pointer" },
          })}
          pagination={false}
        />
        {data?.meta?.total && data.meta.total && (
          <Flex justify="center">
            <PaginationComponent
              current={currentPage}
              pageSize={data?.meta?.per_page}
              total={data.meta.total}
              onChange={setCurrentPage}
            />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
