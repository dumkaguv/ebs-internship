import { useQuery } from "@tanstack/react-query";
import { useCoursesStyles } from "./CoursesStyles";
import { fetchDashboardCourses } from "@/services/adminCourses";
import { Flex } from "antd";
import { CourseCard } from "@/components/CourseCard";
import { PaginationComponent } from "@libs/components/PaginationComponent";
import { useState } from "react";
import { useScrollTop } from "@libs/hooks/useScrollTop";
import { SkeletonCourses } from "@/features/courses/components/SkeletonCourses";

export const Courses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 9;
  const { styles } = useCoursesStyles();
  const { data, isLoading } = useQuery({
    queryKey: ["courses", currentPage],
    queryFn: () =>
      fetchDashboardCourses({ page: currentPage, per_page: perPage }),
  });
  useScrollTop(currentPage);

  if (isLoading) {
    return <SkeletonCourses count={perPage} />;
  }

  return (
    <Flex
      vertical
      justify="center"
      className={styles.coursesContainer}
      gap={40}
    >
      {data && (
        <>
          <CourseCard data={data?.data ?? []} />
          <Flex justify="center">
            <PaginationComponent
              current={currentPage}
              pageSize={perPage}
              onChange={(page) => setCurrentPage(page)}
              total={data?.meta?.total ?? 0}
            />
          </Flex>
        </>
      )}
    </Flex>
  );
};
