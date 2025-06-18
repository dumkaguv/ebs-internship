import { Course } from "@/types/course";
import { Card, Flex, Image, Space, Typography } from "antd";
import { FC } from "react";
import { useCourseCardStyles } from "./CourseCardStyles";
import { formatPrice } from "@/utils";

interface Props {
  course: Course;
  imageHeight?: number | string;
}

const CourseCard: FC<Props> = ({ course, imageHeight }) => {
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
          height={imageHeight}
          alt=""
          preview={false}
        />
      }
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      <Flex
        gap={8}
        style={{ height: "100%" }}
        vertical
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

          <Flex
            gap={4}
            flex={1}
          >
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
        <Typography.Title
          level={4}
          className={styles.price}
        >
          ${course.product?.price ? formatPrice(course.product.price) : 0}
        </Typography.Title>
      </Flex>
    </Card>
  );
};

export default CourseCard;
