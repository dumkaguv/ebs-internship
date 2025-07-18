import { PromotionBanner } from "@/components";
import { PromotionChart } from "@/features/courseDetails/components";
import { UpOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Dropdown,
  Flex,
  Input,
  MenuProps,
  Table,
  Tag,
  Typography,
} from "antd";
import filterIcon from "@/assets/filter.svg";
import { PaginationComponent, useDebouncedValue } from "@libs";
import { useQuery } from "@tanstack/react-query";
import { fetchAdminOrders } from "../api/fetchAdminOrders";
// import { useRevenuePageStyles } from "./RevenuePageStyles";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const formatDate = (isoDate: string) => {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const allColumns = [
  {
    title: "Customer",
    dataIndex: "client_name",
    key: "client_name",
    render: (value: string) => value ?? "John Jones",
  },
  {
    title: "Date",
    dataIndex: "created_at",
    key: "created_at",
    render: (value: string) => formatDate(value),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => {
      let color: string;

      switch (status) {
        case "PAID":
          color = "green";
          break;
        case "CANCELLED":
          color = "red";
          break;
        case "PROCESSING":
          color = "blue";
          break;
        default:
          color = "default";
      }

      return <Tag color={color}>{status}</Tag>;
    },
  },
  {
    title: "Subtotal",
    dataIndex: "subtotal",
    key: "subtotal",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
];

export const RevenuePage = () => {
  // const { styles } = useRevenuePageStyles();
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState(
    searchParams.get("client_name")
  );
  const debouncedSearch = useDebouncedValue(searchValue, 500);
  const [visibleKeys, setVisibleKeys] = useState<string[]>(
    allColumns.map((col) => col.key as string)
  );
  const perPage = 8;
  const { data, isLoading } = useQuery({
    queryKey: ["orders", currentPage, debouncedSearch],
    queryFn: () =>
      fetchAdminOrders({
        per_page: perPage,
        page: currentPage,
        search: debouncedSearch ?? "",
      }),
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

  return (
    <Flex
      vertical
      gap={24}
    >
      <Flex vertical>
        <Typography.Title level={4}>Revenue</Typography.Title>
        <Typography.Paragraph type="secondary">
          Get top insights about your performance
        </Typography.Paragraph>
      </Flex>

      <Flex justify="space-between">
        <PromotionBanner
          stats="+ $24,340"
          title="Total Profits"
          percent={8}
          icon={<UpOutlined size={24} />}
        />
        <PromotionBanner
          stats="+ $98.76"
          title="Last Transaction"
          percent={8}
          icon={<UpOutlined size={24} />}
        />
        <PromotionBanner
          stats="- $103.52"
          title="Debit"
          percent={8}
          icon={<UpOutlined size={24} />}
        />
      </Flex>

      <PromotionChart />

      <Flex
        vertical
        gap={24}
      >
        <Typography.Title level={4}>Transactions</Typography.Title>
        <Flex justify="space-between">
          <Input.Search
            placeholder="Search User"
            allowClear
            style={{ width: 400 }}
            value={searchValue ?? ""}
            onChange={(e) => setSearchValue(e.target.value)}
          />
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
        {filteredColumns.length > 0 ? (
          <>
            <Table
              loading={isLoading}
              dataSource={data?.data ?? []}
              columns={filteredColumns}
              rowKey="id"
              pagination={false}
            />
            {data?.meta?.total && (
              <Flex justify="center">
                <PaginationComponent
                  current={currentPage}
                  pageSize={data.meta.per_page}
                  total={data.meta.total}
                  onChange={setCurrentPage}
                  showSizeChanger={false}
                />
              </Flex>
            )}
          </>
        ) : (
          <Typography.Text type="secondary">
            No columns selected. Please use the filter to choose at least one
            column.
          </Typography.Text>
        )}
      </Flex>
    </Flex>
  );
};
