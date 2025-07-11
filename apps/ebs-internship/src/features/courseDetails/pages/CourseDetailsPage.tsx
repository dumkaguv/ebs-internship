import { useParams } from "react-router-dom";
import {
  CourseDetailsHero,
  CourseDetailsInformation,
} from "@/features/courseDetails/components";
import { useQuery } from "@tanstack/react-query";
import { fetchCourseDetails } from "@/features/courseDetails/api";
import { Flex, Spin, Typography } from "antd";
import { CourseList, OurCustomer } from "@/components";

export const CourseDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["courses", id],
    queryFn: () => fetchCourseDetails(Number(id)),
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

  return (
    <>
      <CourseDetailsHero
        data={data}
        id={Number(id)}
      />
      <CourseDetailsInformation data={data} />
      <OurCustomer />
      <CourseList
        title="More Courses Like This"
        category={data.categories[0]?.name}
      />
    </>
  );
};
