import { Container } from "@/components";
import { Lesson } from "@/types";
import { Collapse, Typography, Space, Flex } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useCourseDetailsSyllabusStyles } from "./CourseDetailsSyllabusStyles";

interface Props {
  lessons?: Lesson[];
}

const CourseDetailsSyllabus: FC<Props> = ({ lessons }) => {
  const { styles } = useCourseDetailsSyllabusStyles();

  const items = lessons?.map((lesson) => ({
    key: lesson.id.toString(),
    label: (
      <Flex
        justify="space-between"
        align="center"
      >
        <Typography.Title level={5}>{lesson.title}</Typography.Title>
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
            <Flex
              justify="space-between"
              align="center"
              className={styles.contentContainer}
            >
              <Typography.Paragraph>{topic.title}</Typography.Paragraph>
              <Typography.Paragraph className={styles.itemDuration}>
                <img
                  src="/icons/video-recorder.svg"
                  alt="iconvideo"
                />
                {topic.duration ?? "0 min"}
              </Typography.Paragraph>
            </Flex>
          </Link>
        ))}
      </>
    ) : (
      <Typography.Text type="secondary">No topics available</Typography.Text>
    ),
  }));

  return (
    <Container className={styles.syllabusContainer}>
      <Typography.Title level={4}>Syllabus</Typography.Title>

      <Collapse
        className={styles.collapseItems}
        accordion
        bordered
        items={items}
      />
    </Container>
  );
};

export default CourseDetailsSyllabus;
