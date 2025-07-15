import { Flex, Typography } from "antd";
import { useDashboardMainStyles } from "./DashboardStyles";
import { DashboardBanner } from "@/components/DashboardBanner";
import { SalesChart } from "@/features/dashboard/components/SalesChart";
import { ReviewsBanner } from "@/components/ReviewsBanner";
import { useQuery } from "@tanstack/react-query";
import { fetchDashboardCourses } from "@/services/adminCourses";
import { CourseCard } from "@/components/CourseCard";

export const Dashboard = () => {
  const { styles } = useDashboardMainStyles();
  const perPage = 3;
  const { data } = useQuery({
    queryKey: ["courses", perPage],
    queryFn: () => fetchDashboardCourses({ per_page: perPage }),
  });

  return (
    <Flex
      className={styles.mainContainer}
      vertical
      gap={40}
    >
      <Flex
        justify="space-between"
        gap={24}
      >
        <DashboardBanner />
        <SalesChart />
      </Flex>
      <Flex
        vertical
        gap={10}
      >
        <Typography.Title level={4}>Reviews</Typography.Title>
        <ReviewsBanner />
      </Flex>
      <Flex
        justify="space=between"
        align="space-between"
        vertical
        gap={10}
      >
        <Typography.Title level={4}>Courses</Typography.Title>
        <CourseCard data={data?.data ?? []} />
      </Flex>
    </Flex>
  );
};
