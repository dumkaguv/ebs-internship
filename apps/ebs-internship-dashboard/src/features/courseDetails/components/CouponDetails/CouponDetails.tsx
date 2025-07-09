import { PromotionBanner } from "@/components";
import { LeftOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Dropdown,
  Flex,
  Input,
  MenuProps,
  Modal,
  Table,
  Typography,
} from "antd";
import { useCouponDetailsStyles } from "./CouponDetailsStyles";
import filterIcon from "@/assets/filter.svg";
import { useQuery } from "@tanstack/react-query";
import { fetchCouponById } from "@/features/courseDetails/api/fetchCouponById";
import { CreateOrEditCoupon } from "@/features/courseDetails/components/CreateOrEditCoupon";
import { useState } from "react";
import { useDeleteCoupon } from "../../hooks/useDeleteCoupon";
import { PromotionChart } from "../PromotionChart/PromotionChart";

interface Props {
  couponId: number;
  onBack: () => void;
}

const items: MenuProps["items"] = [
  {
    label: (
      <div onClick={(e) => e.stopPropagation()}>
        <Checkbox>Name</Checkbox>
      </div>
    ),
    key: 1,
  },
  {
    label: (
      <div onClick={(e) => e.stopPropagation()}>
        <Checkbox>Code</Checkbox>
      </div>
    ),
    key: 2,
  },
  {
    label: (
      <div onClick={(e) => e.stopPropagation()}>
        <Checkbox>Amount</Checkbox>
      </div>
    ),
    key: 3,
  },
];

const columns = [
  {
    title: "User Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Total Amount",
    dataIndex: "amount",
    key: "amount",
    render: (value: number) => `$${value}`,
  },
  {
    title: "Discount Amount",
    dataIndex: "amount",
    key: "amount",
    render: (value: number) => `$${value}`,
  },
];

export const CouponDetails = ({ couponId, onBack }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const { styles } = useCouponDetailsStyles();
  const { data } = useQuery({
    queryKey: ["coupons", couponId],
    queryFn: () => fetchCouponById(couponId),
  });

  const { mutate: deleteCoupon, isPending } = useDeleteCoupon({
    onSuccess: () => onBack(),
  });

  const handleDelete = () => {
    Modal.confirm({
      title: "Delete Coupon",
      content: "Are you sure you want to delete this coupon?",
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: () => deleteCoupon(couponId),
    });
  };

  if (isEditing) {
    return (
      <CreateOrEditCoupon
        couponId={couponId}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <Flex
      vertical
      gap={24}
      className={styles.couponContainer}
    >
      <Flex justify="space-between">
        <Button
          className={styles.backButton}
          type="text"
          onClick={onBack}
        >
          <LeftOutlined />
          <Typography.Title level={4}>Coupons / {data?.name}</Typography.Title>
        </Button>

        <Flex gap={20}>
          <Button
            type="primary"
            danger
            onClick={handleDelete}
            loading={isPending}
            disabled={isPending}
          >
            Delete
          </Button>
          <Button
            type="primary"
            onClick={() => setIsEditing(true)}
          >
            Edit Coupon
          </Button>
        </Flex>
      </Flex>

      <PromotionChart />

      <Flex justify="space-between">
        <PromotionBanner
          stats="2,213"
          title="Total Coupons"
          percent={18}
        />
        <PromotionBanner
          stats="1,213"
          title="Redeemed Coupons"
          percent={9}
        />
        <PromotionBanner
          stats="1000"
          title="Remaining Coupons"
          percent={9}
        />
      </Flex>

      <Flex justify="space-between">
        <Input.Search
          placeholder="Search User"
          className={styles.inputSearch}
        />
        <Flex className={styles.filter}>
          <Button type="text">Hide Stats</Button>
          <Dropdown
            menu={{ items }}
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
      </Flex>

      <Table
        className={styles.table}
        dataSource={data?.users}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 8 }}
      />
    </Flex>
  );
};
