import { Flex, Spin, Tabs, TabsProps, Typography } from "antd";
import {
  CourseCommission,
  CourseReviews,
  CourseCustomer,
  CourseChapters,
  CoursePromotion,
} from "@/features/courseDetails/components";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCourseDetails } from "@/features/courseDetails/api/fetchCourseDetails";

export const Course = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["courses", id],
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    queryFn: () => fetchCourseDetails(id!),
  });

  if (isLoading)
    return (
      <Flex
        align="center"
        justify="center"
        className="h-screen"
      >
        <Spin size="large"></Spin>
      </Flex>
    );
  if (isError) return <div>Error: {error.message}</div>;
  if (!data)
    return <Typography.Text type="danger">No data found!</Typography.Text>;

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Commission",
      children: <CourseCommission />,
    },
    {
      key: "2",
      label: "Reviews",
      children: <CourseReviews />,
    },
    {
      key: "3",
      label: "Customer",
      children: <CourseCustomer />,
    },
    {
      key: "4",
      label: "Chapters",
      children: <CourseChapters data={data} />,
    },
    {
      key: "5",
      label: "Promotion",
      children: <CoursePromotion />,
    },
    {
      key: "6",
      label: "Detail",
      children: <div>Course details</div>,
    },
    {
      key: "7",
      label: "Settings",
      children: <div>Settings tab</div>,
    },
  ];

  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
    />
  );
};
