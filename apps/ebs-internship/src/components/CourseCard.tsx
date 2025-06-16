import { Course } from "@/types/course";
import { Card, Flex, Image, Typography } from "antd";
import { FC } from "react";

interface Props {
  course: Course;
}

const CourseCard: FC<Props> = ({ course }) => {
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
      <Flex vertical>
        <Typography.Title level={5}>{course.title}</Typography.Title>

        <Typography.Paragraph style={{ fontSize: 14, color: "#334155" }}>
          By {course.author?.first_name ?? "Unknown"} {course.author?.last_name}
        </Typography.Paragraph>

        <Flex gap={4}>
          {course.hours_to_complete && (
            <Typography.Paragraph>
              {course.hours_to_complete} Total Hours
            </Typography.Paragraph>
          )}

          {course.lessons && course.lessons.length > 0 && (
            <Typography.Paragraph>
              {course.lessons?.length} Lessons
            </Typography.Paragraph>
          )}

          {course.level && (
            <Typography.Paragraph>{course.level} Level</Typography.Paragraph>
          )}
        </Flex>
      </Flex>
      <Typography.Title
        level={4}
        style={{ marginBottom: 0 }}
      >
        ${course.product?.price ? course.product.price : 0}
      </Typography.Title>
    </Card>
  );
};

export default CourseCard;
