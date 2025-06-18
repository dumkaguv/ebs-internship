import { FC } from "react";
import { Container, Section, CourseCard } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { List } from "antd";
import { Link } from "react-router-dom";
import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import { Api } from "@/services/apiClient";

interface Props {
  title?: string;
  category?: string;
  showSeeAllButton?: boolean;
}

const CourseList: FC<Props> = ({
  title = "Top Courses",
  showSeeAllButton = false,
  category,
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: () => Api.courses.fetchCourses(),
  });

  const courses = data?.data;

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
                <CourseCard
                  course={course}
                  imageHeight={200}
                />
              </Link>
            </List.Item>
          )}
        />
      </Section>
    </Container>
  );
};

export default CourseList;
