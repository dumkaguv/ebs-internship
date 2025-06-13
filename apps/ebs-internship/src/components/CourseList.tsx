import { FC } from "react";
import { Container, Section } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { fetchCourses } from "@/lib";
import { List } from "antd";
import { Link } from "react-router-dom";
import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import CourseCard from "./CourseCard";

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
                <CourseCard course={course} />
              </Link>
            </List.Item>
          )}
        />
      </Section>
    </Container>
  );
};

export default CourseList;
