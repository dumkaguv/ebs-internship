import { useParams } from "react-router-dom";
import { CourseDetailsHero } from "../components";
import { CourseDetailsInformation } from "../components";
import { useQuery } from "@tanstack/react-query";
import { fetchCourseDetails } from "../api/fetchCourseDetails";
import { Flex, Spin } from "antd";

function CourseDetailsPage() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["courses", id],
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    queryFn: () => fetchCourseDetails(id!),
  });

  console.log(data);

  if (isLoading)
    return (
      <Flex
        align="center"
        justify="center"
        style={{ height: "100dvh" }}
      >
        <Spin size="large"></Spin>
      </Flex>
    );
  if (isError) return <div>Error: {error.message}</div>;
  if (!data) return <div style={{ color: "red" }}>No data found!</div>;

  return (
    <>
      <CourseDetailsHero data={data} />
      <CourseDetailsInformation data={data} />
    </>
  );
}

export default CourseDetailsPage;
