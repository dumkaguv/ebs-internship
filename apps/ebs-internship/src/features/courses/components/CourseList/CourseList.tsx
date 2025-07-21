import { CourseCard } from "@/components";
import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import { Course } from "@libs";
import { List, ListProps } from "antd";
import { Link } from "react-router-dom";

interface Props extends ListProps<Course> {
  courses: Course[];
}

export const CourseList = ({ courses, ...rest }: Props) => {
  return (
    <List
      dataSource={courses}
      grid={{
        column: 3,
        gutter: [16, 40],
      }}
      renderItem={(course) => (
        <List.Item>
          <Link to={getRouteUrlById(RoutesEnum.COURSES, course.id)}>
            <CourseCard course={course} />
          </Link>
        </List.Item>
      )}
      {...rest}
    />
  );
};
