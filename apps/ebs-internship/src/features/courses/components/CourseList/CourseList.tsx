import { CourseCard } from "@/components";
import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import { Course } from "@libs";
import { List } from "antd";
import { Link } from "react-router-dom";

interface Props {
  courses: Course[];
}

export const CourseList = ({ courses }: Props) => {
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
    />
  );
};
