import { useQuery } from "@tanstack/react-query";
import { useCoursesStyles } from "./CoursesStyles";
import { fetchDashboardCourses } from "@/services/adminCourses";
import { Flex, Spin } from "antd";
import { CourseCard } from "@/components/CourseCard";
import { PaginationComponent } from "@libs/components/PaginationComponent";
import { useState } from "react";
import { useScrollTop } from "@libs/hooks/useScrollTop";

export const Courses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 9;
  const { styles } = useCoursesStyles();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["courses", currentPage],
    queryFn: () =>
      fetchDashboardCourses({ page: currentPage, per_page: perPage }),
  });
  useScrollTop(currentPage);

  if (isLoading) return <Spin size="large"></Spin>;
  if (isError) return <div>Error, data is undefined</div>;

  return (
    <Flex
      vertical
      align="center"
      justify="center"
      className={styles.coursesContainer}
      gap={40}
    >
      {data && (
        <>
          <CourseCard
            data={data?.data ?? []}
            limit={perPage}
          />
          <PaginationComponent
            current={currentPage}
            pageSize={perPage}
            onChange={(page) => setCurrentPage(page)}
            total={data?.meta?.total ?? 0}
          />
        </>
      )}
    </Flex>
  );
};
