import { Course, IMAGE_FALLBACKS } from "@libs";
import { Card, Flex, Image, Typography } from "antd";
import { useCourseCardStyles } from "./CourseCardStyles";
import { formatPrice } from "@/utils";
import { CourseStatistics } from "../CourseStatistics";

interface Props {
  course: Course;
  imageHeight?: number | string;
}

export const CourseCard = ({ course, imageHeight = 240 }: Props) => {
  const { styles } = useCourseCardStyles();

  return (
    <Card
      hoverable
      cover={
        <Image
          src={course.image_url}
          fallback={IMAGE_FALLBACKS.COURSE}
          height={imageHeight}
          alt=""
          preview={false}
          className={styles.image}
        />
      }
      className={styles.card}
    >
      <Flex
        gap={8}
        vertical
        className="h-full"
      >
        <Flex
          vertical
          gap={6}
        >
          <Typography.Title
            ellipsis={{ rows: 2 }}
            level={5}
          >
            {course.title}
          </Typography.Title>

          <Typography.Paragraph className={styles.courseCardAuthor}>
            By {course.author?.first_name ?? "Unknown"}{" "}
            {course.author?.last_name}
          </Typography.Paragraph>

          <Flex gap={4}>
            <CourseStatistics
              course={course}
              orientation="vertical"
            />
          </Flex>
        </Flex>
        <Flex
          flex={1}
          align="end"
        >
          <Typography.Title level={4}>
            ${course.product?.price ? formatPrice(course.product.price) : 0}
          </Typography.Title>
        </Flex>
      </Flex>
    </Card>
  );
};
