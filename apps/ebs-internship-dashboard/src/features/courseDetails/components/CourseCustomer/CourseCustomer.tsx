import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useCourseCustomerStyles } from "./CourseCustomerStyles";

interface CustomerData {
  key: number;
  customer: string;
  type: "Student" | "Teacher";
  country: string;
  date: string;
  total: number;
  lastOrder: number;
}

const dataSource: CustomerData[] = [
  {
    key: 1,
    customer: "Ronald Richards",
    type: "Student",
    country: "India",
    date: "15 May 2020 8:00 am",
    total: 500,
    lastOrder: 12542,
  },
  {
    key: 2,
    customer: "Darlene Robertson",
    type: "Student",
    country: "India",
    date: "15 May 2020 8:30 am",
    total: 500,
    lastOrder: 46540,
  },
  {
    key: 3,
    customer: "Jerome Bell",
    type: "Teacher",
    country: "Sri Lanka",
    date: "15 May 2020 9:30 am",
    total: 500,
    lastOrder: 68745,
  },
  {
    key: 4,
    customer: "Kristin Watson",
    type: "Student",
    country: "India",
    date: "15 May 2020 8:00 am",
    total: 500,
    lastOrder: 34475,
  },
  {
    key: 5,
    customer: "Bessie Cooper",
    type: "Teacher",
    country: "Sri Lanka",
    date: "15 May 2020 9:00 am",
    total: 500,
    lastOrder: 72145,
  },
  {
    key: 6,
    customer: "Cameron Williamson",
    type: "Student",
    country: "India",
    date: "15 May 2020 8:30 am",
    total: 500,
    lastOrder: 97451,
  },
  {
    key: 7,
    customer: "Ronald Richards",
    type: "Student",
    country: "Sri Lanka",
    date: "15 May 2020 10:00 am",
    total: 500,
    lastOrder: 33542,
  },
  {
    key: 8,
    customer: "Jerome Bell",
    type: "Teacher",
    country: "Sri Lanka",
    date: "15 May 2020 9:30 am",
    total: 500,
    lastOrder: 68745,
  },
  {
    key: 9,
    customer: "Kristin Watson",
    type: "Student",
    country: "India",
    date: "15 May 2020 8:00 am",
    total: 500,
    lastOrder: 34475,
  },
  {
    key: 10,
    customer: "Bessie Cooper",
    type: "Teacher",
    country: "Sri Lanka",
    date: "15 May 2020 9:00 am",
    total: 500,
    lastOrder: 72145,
  },
];

const columns: ColumnsType<CustomerData> = [
  {
    title: "ID",
    dataIndex: "key",
    key: "key",
    sorter: (a, b) => a.key - b.key,
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
    title: "Country",
    dataIndex: "country",
    key: "country",
    filters: [
      { text: "India", value: "India" },
      { text: "Sri Lanka", value: "Sri Lanka" },
    ],
    onFilter: (value, record) => record.country === value,
  },
  {
    title: "Joined",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Total Amount",
    dataIndex: "total",
    key: "total",
    render: (value) => `$${value.toFixed(2)}`,
    sorter: (a, b) => a.total - b.total,
  },
  {
    title: "Last Order",
    dataIndex: "lastOrder",
    key: "lasOrder",
    sorter: (a, b) => a.total - b.total,
  },
];

export const CourseCustomer = () => {
  const { styles } = useCourseCustomerStyles();
  return (
    <Table<CustomerData>
      columns={columns}
      dataSource={dataSource}
      pagination={{ pageSize: 8 }}
      className={styles.table}
    />
  );
};
