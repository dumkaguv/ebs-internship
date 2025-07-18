import { Container, Section } from "@/components";
import { Flex, Input, Typography } from "antd";
import { Sort, Filters, CourseList } from "@/features/courses/components";
import { useCourses } from "@/features/courses/hooks";
import { SearchOutlined } from "@ant-design/icons";
import { useCoursesPageStyles } from "./CoursesPageStyles";
import { PaginationComponent } from "@libs/components";
import { CourseListSkeletons } from "@/features/courses/components/CourseList";

export const CoursesPage = () => {
  const {
    courses,
    total,
    perPage,
    isLoading,
    searchValue,
    setSearchValue,
    currentPage,
    setCurrentPage,
    sort,
    setSort,
  } = useCourses();

  const { styles } = useCoursesPageStyles();

  return (
    <Container>
      <Section>
        <Flex
          vertical
          gap={32}
        >
          <Typography.Title level={1}>Design Courses</Typography.Title>
          <Typography.Title level={3}>All Development Courses</Typography.Title>
          <Flex gap={48}>
            <Flex flex={1}>
              <Input
                prefix={<SearchOutlined />}
                disabled={isLoading}
                allowClear
                onClear={() => setSearchValue(null)}
                placeholder="e.g. DSA"
                value={searchValue ?? ""}
                onChange={(event) => setSearchValue(event.target.value)}
              />
            </Flex>
            <Flex>
              <Sort
                sort={sort}
                setSort={setSort}
                isLoading={isLoading}
              />
            </Flex>
          </Flex>
          <Flex gap={40}>
            <Flex className={styles.leftSide}>
              <Filters />
            </Flex>
            <Flex
              vertical
              align="center"
              gap={24}
            >
              {isLoading ? (
                <CourseListSkeletons count={6} />
              ) : (
                <CourseList courses={courses} />
              )}

              {!isLoading && courses.length > 0 && total > perPage && (
                <PaginationComponent
                  current={currentPage}
                  pageSize={perPage}
                  onChange={(page) => setCurrentPage(page)}
                  total={total}
                />
              )}
            </Flex>
          </Flex>
        </Flex>
      </Section>
    </Container>
  );
};
