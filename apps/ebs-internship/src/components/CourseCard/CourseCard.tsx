import { Course } from "@/types/course";
import { Card, Flex, Image, Space, Typography } from "antd";
import { FC } from "react";
import { useCourseCardStyles } from "./CourseCardStyles";

interface Props {
  course: Course;
}

const CourseCard: FC<Props> = ({ course }) => {
  const { styles } = useCourseCardStyles();

  return (
    <Card
      hoverable
      cover={
        <Image
          src={course.image_url}
          fallback={
            "https://foundr.com/wp-content/uploads/2021/09/Best-online-course-platforms.png"
          }
          alt=""
          preview={false}
          height={200}
        />
      }
    >
      <Space
        size={8}
        direction="vertical"
      >
        <Flex
          vertical
          gap={6}
        >
          <Typography.Title level={5}>{course.title}</Typography.Title>

          <Typography.Paragraph className={styles.courseCardAuthor}>
            By {course.author?.first_name ?? "Unknown"}{" "}
            {course.author?.last_name}
          </Typography.Paragraph>

          <Flex gap={4}>
            {course.hours_to_complete && (
              <Typography.Paragraph className={styles.courseCardDetails}>
                {course.hours_to_complete} Total Hours
              </Typography.Paragraph>
            )}

            {course.lessons && course.lessons.length > 0 && (
              <Typography.Paragraph className={styles.courseCardDetails}>
                {course.lessons?.length} Lessons
              </Typography.Paragraph>
            )}

            {course.level && (
              <Typography.Paragraph className={styles.courseCardDetails}>
                {course.level} Level
              </Typography.Paragraph>
            )}
          </Flex>
        </Flex>
        <Typography.Title level={4}>
          ${course.product?.price ? course.product.price : 0}
        </Typography.Title>
      </Space>
    </Card>
  );
};

export default CourseCard;
