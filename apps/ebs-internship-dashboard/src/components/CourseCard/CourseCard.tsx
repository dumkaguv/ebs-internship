import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import { Course } from "@libs";
import { Card, Flex, Typography } from "antd";
import { useCourseCardStyles } from "./CourseCardStyles";
import { Link } from "react-router-dom";

interface Props {
  data?: Course[];
}

export const CourseCard = ({ data }: Props) => {
  const { styles } = useCourseCardStyles();

  return (
    <Flex
      justify="flex-start"
      wrap
      gap={12}
      className={styles.coursesContainer}
    >
      {data?.map((course) => {
        const stats = [
          { value: `$${course.product?.price || 0}`, label: "Price" },
          { value: `${course.lessons?.length || 0}`, label: "Chapters" },
          { value: `${course.product?.sold_quantity || 0}`, label: "Orders" },
          {
            value: `${course.product?.available_quantity || 0}`,
            label: "Quantity",
          },
          {
            value: `${course.product?.limit_total || 0}`,
            label: "Total Limit",
          },
          { value: `${course?.users_count || 0}`, label: "Added to Shelf" },
        ];
        return (
          <Link
            key={course.id}
            to={getRouteUrlById(RoutesEnum.COURSES.BASE, course.id)}
          >
            <Card
              className={styles.courseCard}
              hoverable
            >
              <Flex
                vertical
                align="flex-start"
                gap={8}
              >
                <Typography.Paragraph className={styles.customParagraph}>
                  {course.product?.price === 0 ? "Free" : "Discount"}
                </Typography.Paragraph>
                <Flex vertical>
                  <Typography.Title
                    className={styles.courseTitle}
                    level={4}
                  >
                    {course.title}
                  </Typography.Title>

                  <div className={styles.line}></div>

                  <Flex
                    wrap="wrap"
                    gap={16}
                  >
                    {stats.map((stat, index) => (
                      <Flex
                        key={index}
                        vertical
                        className={styles.statsContainer}
                      >
                        <Typography.Title level={5}>
                          {stat.value}
                        </Typography.Title>
                        <Typography.Paragraph>
                          {stat.label}
                        </Typography.Paragraph>
                      </Flex>
                    ))}
                  </Flex>
                </Flex>
              </Flex>
            </Card>
          </Link>
        );
      })}
    </Flex>
  );
};
