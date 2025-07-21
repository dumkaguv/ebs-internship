import { Container, Section } from "@/components";
import { Flex, Input, Typography, Grid, Button, Drawer } from "antd";
import { Sort, Filters, CourseList } from "@/features/courses/components";
import { useCourses } from "@/features/courses/hooks";
import { FilterOutlined, SearchOutlined } from "@ant-design/icons";
import { useCoursesPageStyles } from "./CoursesPageStyles";
import { PaginationComponent } from "@libs/components";
import { CourseListSkeletons } from "@/features/courses/components/CourseList";
import { useState } from "react";

const { useBreakpoint } = Grid;

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

  const [isOpen, setIsOpen] = useState(false);

  const screens = useBreakpoint();

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
          <Flex
            gap={32}
            align={screens.lg ? "center" : ""}
            vertical={!screens.lg}
          >
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
            <Flex gap={20}>
              {!screens.lg && (
                <>
                  <Button
                    onClick={() => setIsOpen((prev) => !prev)}
                    icon={<FilterOutlined />}
                    style={{ width: "fit-content" }}
                  >
                    Filters
                  </Button>
                  <Drawer
                    title="Filters"
                    closable={{ "aria-label": "Close Button" }}
                    placement="left"
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                  >
                    <Filters />
                  </Drawer>
                </>
              )}

              <Sort
                sort={sort}
                title={screens.md ? "Sort By" : ""}
                setSort={setSort}
                isLoading={isLoading}
              />
            </Flex>
          </Flex>
          <Flex gap={40}>
            <Flex className={styles.leftSide}>{screens.lg && <Filters />}</Flex>
            <Flex
              vertical
              align="center"
              gap={24}
            >
              {isLoading ? (
                <CourseListSkeletons count={6} />
              ) : (
                <CourseList
                  grid={{
                    gutter: [16, 40],
                    xxl: 3,
                    xl: 3,
                    lg: 2,
                    md: 2,
                    sm: 1,
                    xs: 1,
                  }}
                  courses={courses}
                />
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
