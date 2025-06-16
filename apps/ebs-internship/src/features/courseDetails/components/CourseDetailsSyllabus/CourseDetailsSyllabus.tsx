import { Container } from "@/components";
import { Lesson } from "@/types";
import { Collapse, Typography, Space, Flex } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  lessons?: Lesson[];
}

const CourseDetailsSyllabus: FC<Props> = ({ lessons }) => {
  const items = lessons?.map((lesson) => ({
    key: lesson.id.toString(),
    label: (
      <Flex
        justify="space-between"
        align="center"
      >
        <Typography.Title style={{ fontSize: 18 }}>
          {lesson.title}
        </Typography.Title>
        <Space size="small">
          <Typography.Text>{lesson.topics?.length} Topics</Typography.Text>
          <Typography.Text>{lesson.duration ?? "0 hours"}</Typography.Text>
        </Space>
      </Flex>
    ),
    children: lesson.topics?.length ? (
      <>
        {lesson.topics.map((topic) => (
          <Link
            key={topic.id}
            to=""
          >
            <Flex justify="space-between">
              <p>{topic.title}</p>
              <p>{topic.duration ?? "0 hours"}</p>
            </Flex>
          </Link>
        ))}
      </>
    ) : (
      <Typography.Text type="secondary">No topics available</Typography.Text>
    ),
  }));

  return (
    <Container>
      <div style={{ maxWidth: 840 }}>
        <Typography.Title level={4}>Syllabus</Typography.Title>
        <Collapse
          accordion
          bordered
          items={items}
        />
      </div>
    </Container>
  );
};

export default CourseDetailsSyllabus;
