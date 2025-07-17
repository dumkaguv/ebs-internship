import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import { Course, Lesson, PaginationComponent } from "@libs";
import { Flex, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { useCourseChaptersStyles } from "./CourseChaptersStyles";
import { useState } from "react";
interface Props {
  data: Course;
}

export const CourseChapters = ({ data }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { styles } = useCourseChaptersStyles();
  const navigate = useNavigate();

  return (
    <Flex
      gap={16}
      vertical
      justify="center"
    >
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
        pagination={false}
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
      <Flex justify="center">
        {data.lessons && data.lessons.length > 8 && (
          <PaginationComponent
            pageSize={8}
            current={currentPage}
            total={data.lessons.length}
            onChange={setCurrentPage}
          />
        )}
      </Flex>
    </Flex>
  );
};
