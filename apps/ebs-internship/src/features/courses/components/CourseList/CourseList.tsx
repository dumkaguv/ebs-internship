import { CourseCard } from "@/components";
import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import { Course } from "@/types";
import { List } from "antd";
import { Link } from "react-router-dom";

interface Props {
  courses: Course[];
  isLoading: boolean;
}

export const CourseList = ({ courses, isLoading }: Props) => {
  return (
    <List
      dataSource={courses}
      loading={isLoading}
      grid={{
        column: 3,
        gutter: [16, 40],
      }}
      renderItem={(course) => (
        <List.Item>
          <Link to={getRouteUrlById(RoutesEnum.COURSES, course.id)}>
            <CourseCard
              course={course}
              imageHeight={(courses?.length ?? 0) < 4 ? "100%" : 200}
            />
          </Link>
        </List.Item>
      )}
    />
  );
};
