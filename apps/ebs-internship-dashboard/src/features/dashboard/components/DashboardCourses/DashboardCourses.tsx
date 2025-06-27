import { Flex, Typography } from "antd";
import { useDashboardCoursesStyles } from "./DashboardCoursesStyles";
import { Course } from "@libs";
import { Link } from "react-router-dom";
import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";

interface Props {
  data: Course[];
}
export const DashboardCourses = ({ data }: Props) => {
  const { styles } = useDashboardCoursesStyles();
  const mainCourses = data.slice(0, 3);

  return (
    <Flex
      justify="space-between"
      align="space-between"
      wrap
      gap={10}
    >
      {mainCourses?.map((course) => {
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
            to={getRouteUrlById(RoutesEnum.COURSES, course.id)}
            className={styles.courseLink}
            key={course.id}
          >
            <Flex
              vertical
              align="flex-start"
              gap={8}
              className={styles.courseContainer}
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
                      <Typography.Paragraph>{stat.label}</Typography.Paragraph>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </Link>
        );
      })}
    </Flex>
  );
};
