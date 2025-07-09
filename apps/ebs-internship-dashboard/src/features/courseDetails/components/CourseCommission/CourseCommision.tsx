import { DashboardBanner } from "@/components/DashboardBanner";
import { Flex, Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { useCourseCommissionStyles } from "./CourseCommissionStyles";

interface OrderData {
  key: string;
  orderId: string;
  customer: string;
  type: "Student" | "Teacher";
  date: string;
  status: "Received" | "Pending";
  commission: number;
}

const dataSource: OrderData[] = [
  {
    key: "1",
    orderId: "#254841",
    customer: "Dianne Russell",
    type: "Student",
    date: "25 Jan 2022",
    status: "Received",
    commission: 95.0,
  },
  {
    key: "2",
    orderId: "#254841",
    customer: "Bessie Cooper",
    type: "Teacher",
    date: "25 Jan 2022",
    status: "Pending",
    commission: 95.0,
  },
  {
    key: "3",
    orderId: "#254841",
    customer: "Cameron Williamson",
    type: "Student",
    date: "25 Jan 2022",
    status: "Received",
    commission: 95.0,
  },
  {
    key: "4",
    orderId: "#254841",
    customer: "Kathryn Murphy",
    type: "Teacher",
    date: "25 Jan 2022",
    status: "Received",
    commission: 95.0,
  },
  {
    key: "5",
    orderId: "#254841",
    customer: "Theresa Webb",
    type: "Teacher",
    date: "25 Jan 2022",
    status: "Received",
    commission: 95.0,
  },
  {
    key: "6",
    orderId: "#254841",
    customer: "Guy Hawkins",
    type: "Student",
    date: "25 Jan 2022",
    status: "Received",
    commission: 95.0,
  },
  {
    key: "7",
    orderId: "#254841",
    customer: "Cody Fisher",
    type: "Student",
    date: "25 Jan 2022",
    status: "Received",
    commission: 95.0,
  },
  {
    key: "8",
    orderId: "#254841",
    customer: "Savannah Nguyen",
    type: "Student",
    date: "25 Jan 2022",
    status: "Pending",
    commission: 95.0,
  },
  {
    key: "9",
    orderId: "#254841",
    customer: "Leslie Alexander",
    type: "Student",
    date: "25 Jan 2022",
    status: "Received",
    commission: 95.0,
  },
  {
    key: "10",
    orderId: "#254841",
    customer: "Floyd Miles",
    type: "Teacher",
    date: "25 Jan 2022",
    status: "Received",
    commission: 95.0,
  },
  {
    key: "11",
    orderId: "#254841",
    customer: "Courtney Henry",
    type: "Student",
    date: "25 Jan 2022",
    status: "Received",
    commission: 95.0,
  },
];

const columns: ColumnsType<OrderData> = [
  {
    title: "Order ID",
    dataIndex: "orderId",
    key: "orderId",
    sorter: (a, b) => a.orderId.localeCompare(b.orderId),
  },
  {
    title: "Customer",
    dataIndex: "customer",
    key: "customer",
    sorter: (a, b) => a.customer.localeCompare(b.customer),
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    filters: [
      { text: "Student", value: "Student" },
      { text: "Teacher", value: "Teacher" },
    ],
    onFilter: (value, record) => record.type === value,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <Tag color={status === "Received" ? "green" : "orange"}>{status}</Tag>
    ),
    filters: [
      { text: "Received", value: "Received" },
      { text: "Pending", value: "Pending" },
    ],
    onFilter: (value, record) => record.status === value,
  },
  {
    title: "Commission",
    dataIndex: "commission",
    key: "commission",
    render: (value) => `$${value.toFixed(2)}`,
    sorter: (a, b) => a.commission - b.commission,
  },
];

export const CourseCommission = () => {
  const { styles } = useCourseCommissionStyles();
  return (
    <Flex
      vertical
      gap={16}
    >
      <DashboardBanner direction="horizontal" />
      <Table<OrderData>
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 8 }}
        className={styles.table}
      />
    </Flex>
  );
};
