import { Container, CourseCard, Section } from "@/components";
import { Flex, List, Pagination, Typography } from "antd";
import { Sort, Filters } from "../components";
import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import { Link } from "react-router-dom";
import { useCourses } from "../hooks";
import { useCoursePageStyles } from "./CoursePageStyles";

function CoursesPage() {
  const {
    courses,
    total,
    perPage,
    isLoading,
    currentPage,
    setCurrentPage,
    sort,
    setSort,
  } = useCourses();

  const { styles } = useCoursePageStyles();

  return (
    <Container>
      <Section>
        <Flex
          vertical
          gap={24}
        >
          <Typography.Title level={1}>Design Courses</Typography.Title>
          <Typography.Title level={3}>All Development Courses</Typography.Title>
          <Flex
            justify="flex-end"
            flex={1}
          >
            <Sort
              sort={sort}
              setSort={setSort}
            />
          </Flex>
          <Flex gap={40}>
            <Flex style={{ maxWidth: 305, width: "100%" }}>
              <Filters />
            </Flex>
            <Flex
              vertical
              gap={24}
            >
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
              {!isLoading && (
                <div className={styles.paginationWrapper}>
                  <Pagination
                    current={currentPage}
                    pageSize={perPage}
                    onChange={(page) => setCurrentPage(page)}
                    total={total}
                    align="center"
                  />
                </div>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Section>
    </Container>
  );
}

export default CoursesPage;
