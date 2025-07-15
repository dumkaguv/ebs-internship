import { Container } from "@/components";
import { Lesson } from "@libs";
import { Collapse, Typography, Space, Flex } from "antd";
import { Link } from "react-router-dom";
import { useCourseDetailsSyllabusStyles } from "./CourseDetailsSyllabusStyles";

interface Props {
  lessons?: Lesson[];
  id: string;
}

export const CourseDetailsSyllabus = ({ lessons, id }: Props) => {
  const { styles } = useCourseDetailsSyllabusStyles();

  const items = lessons?.map((lesson) => ({
    key: lesson.id.toString(),
    label: (
      <Flex
        justify="space-between"
        align="center"
        id={id}
      >
        <Typography.Title level={5}>{lesson.title}</Typography.Title>
        <Space size="small">
          <Typography.Text>{lesson.topics?.length ?? 0} Topics</Typography.Text>
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

      {lessons?.length !== 0 ? (
        <Collapse
          className={styles.collapseItems}
          accordion
          bordered
          items={items}
        />
      ) : (
        <Typography.Text type="secondary">No lessons available</Typography.Text>
      )}
    </Container>
  );
};
