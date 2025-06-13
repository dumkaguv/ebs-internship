import { FC } from "react";
import { Container, Section } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { fetchCourses } from "@/lib";
import { Card, Flex, List, Typography } from "antd";
import { Link } from "react-router-dom";
import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import styles from "./coursesList.module.scss";

interface Props {
  title: string;
  category?: string;
  showSeeAllButton?: boolean;
}

const CoursesList: FC<Props> = ({
  title = "Top Courses",
  showSeeAllButton = false,
  category,
}) => {
  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  const filteredCourses = category
    ? courses?.filter((course) =>
        course.categories.some((cat) => cat.name === category)
      )
    : courses;

  return (
    <Container>
      <Section
        title={title}
        endAdornment={
          showSeeAllButton && <Link to={RoutesEnum.COURSES}>See All</Link>
        }
      >
        <List
          loading={isLoading}
          dataSource={filteredCourses?.slice(0, 4)}
          grid={{ gutter: 16, column: 4 }}
          renderItem={(course) => (
            <List.Item>
              <Link to={getRouteUrlById(RoutesEnum.COURSES, course.id)}>
                <Card
                  hoverable
                  cover={
                    <img
                      src={
                        course.image_url ??
                        "https://foundr.com/wp-content/uploads/2021/09/Best-online-course-platforms.png"
                      }
                      alt=""
                      width={266}
                      height={200}
                    />
                  }
                >
                  <Flex vertical>
                    <Typography.Title level={5}>
                      {course.title}
                    </Typography.Title>

                    <Typography.Paragraph className={styles.author}>
                      By {course.author?.first_name ?? "Unknown"}{" "}
                      {course.author?.last_name}
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
                        <Typography.Paragraph>
                          {course.level} Level
                        </Typography.Paragraph>
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
              </Link>
            </List.Item>
          )}
        />
      </Section>
    </Container>
  );
};

export default CoursesList;
