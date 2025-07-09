import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import { Course, Lesson } from "@libs";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { useCourseChaptersStyles } from "./CourseChaptersStyles";
interface Props {
  data: Course;
}

export const CourseChapters = ({ data }: Props) => {
  const { styles } = useCourseChaptersStyles();
  const navigate = useNavigate();
  return (
    <Table
      rowKey={"id"}
      columns={[
        {
          title: "ID",
          dataIndex: "id",
          key: "id",
          sorter: (a, b) => a.id - b.id,
        },
        {
          title: "Chapter",
          dataIndex: "order",
          key: "order",
          sorter: (a, b) => a.id - b.id,
        },
        {
          title: "Title",
          dataIndex: "title",
          key: "title",
          sorter: (a, b) => a.id - b.id,
        },
        {
          title: "Topics",
          key: "topics",
          sorter: (a, b) => a.topics.length - b.topics.length,
          render: (_, record) => record.topics.length,
        },
        {
          title: "Duration",
          dataIndex: "duration",
          key: "duration",
          sorter: (a, b) => Number(a.duration) - Number(b.duration),
          render: (duration: number | null) =>
            duration === null ? "0" : duration,
        },
        {
          title: "Status",
          dataIndex: "active",
          key: "active",
          sorter: (a, b) => Number(a.active) - Number(b.active),
          render: (active: boolean) => (active ? "Active" : "Inactive"),
        },
        {
          title: "Price",
          dataIndex: "price",
          key: "price",
          sorter: (a, b) => a.id - b.id,
        },
      ]}
      dataSource={data.lessons}
      pagination={{ pageSize: 8 }}
      className={styles.table}
      onRow={(record: Lesson) => {
        return {
          onClick: () => {
            navigate(getRouteUrlById(RoutesEnum.CHAPTER, record.id));
          },
          style: { cursor: "pointer" },
        };
      }}
    />
  );
};
