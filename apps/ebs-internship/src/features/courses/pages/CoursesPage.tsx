import { Container, Section } from "@/components";
import { Flex, Input, Pagination, Typography } from "antd";
import { Sort, Filters, CourseList } from "../components";
import { useCourses } from "../hooks";
import { SearchOutlined } from "@ant-design/icons";

function CoursesPage() {
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
              />
            </Flex>
          </Flex>
          <Flex gap={40}>
            <Flex style={{ maxWidth: 305, width: "100%" }}>
              <Filters />
            </Flex>
            <Flex
              vertical
              gap={24}
            >
              <CourseList
                courses={courses}
                isLoading={isLoading}
              />
              {!isLoading && courses.length > 0 && total > perPage && (
                <Pagination
                  current={currentPage}
                  pageSize={perPage}
                  onChange={(page) => setCurrentPage(page)}
                  total={total}
                  align="center"
                />
              )}
            </Flex>
          </Flex>
        </Flex>
      </Section>
    </Container>
  );
}

export default CoursesPage;
