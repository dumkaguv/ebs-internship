import { useParams } from "react-router-dom";
import {
  CourseDetailsHero,
  CourseDetailsInformation,
} from "@/features/courseDetails/components";
import { useQuery } from "@tanstack/react-query";
import { Flex, Spin, Typography } from "antd";
import { CourseList } from "@/components";
import { Api } from "@libs";

export const CourseDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["courses", id],
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    queryFn: () => Api.courses.fetchCourseDetails(id!),
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
      <CourseList
        title="More Courses Like This"
        category={data.categories[0]?.name}
      />
    </>
  );
};
