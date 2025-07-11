import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Api } from "@/services/apiClient";
import { Container, CourseCard } from "@/components";
import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import { Link } from "react-router-dom";
import { Button, Flex, Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useCoursesByMentorStyles } from "./CoursesByMentorStyles";

interface Props {
  authorId: number;
  authorName: string;
}

export const CoursesByMentor = ({ authorId, authorName }: Props) => {
  const { styles } = useCoursesByMentorStyles();

  const scrollRef = useRef<HTMLDivElement>(null);

  const { data: allCourses } = useQuery({
    queryKey: ["courses"],
    queryFn: () => Api.courses.fetchCourses(),
  });

  const courses =
    allCourses?.data?.filter((course) => course.author_id === authorId) ?? [];

  const scrollLeft = () =>
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });

  const scrollRight = () =>
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });

  return (
    <div className={styles.fullContainer}>
      <Container className={styles.coursesContainer}>
        <Flex justify="space-between">
          <Typography.Title level={3}>
            More Courses by {authorName}
          </Typography.Title>
          <Flex
            justify="flex-end"
            gap={4}
          >
            <Button
              className={styles.button}
              block
              onClick={scrollLeft}
            >
              <LeftOutlined />
            </Button>
            <Button
              block
              className={styles.button}
              onClick={scrollRight}
            >
              <RightOutlined />
            </Button>
          </Flex>
        </Flex>

        <div
          className={styles.carrousel}
          ref={scrollRef}
        >
          {courses?.map((course) => (
            <Flex
              key={course.id}
              className={styles.cardContainer}
            >
              <Link to={getRouteUrlById(RoutesEnum.COURSES, course.id)}>
                <CourseCard course={course} />
              </Link>
            </Flex>
          ))}
        </div>
      </Container>
    </div>
  );
};
