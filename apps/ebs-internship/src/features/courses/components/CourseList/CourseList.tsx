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
        gutter: [16, 40],
        xxl: 3,
        xl: 3,
        lg: 2,
        md: 2,
        sm: 1,
        xs: 1,
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
