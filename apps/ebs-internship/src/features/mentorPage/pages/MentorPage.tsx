import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchMentorDetails } from "@/features/mentorPage/api/fetchMentorDetails";
import { MentorInformation } from "@/features/mentorPage/components";
import { Flex, Spin, Typography } from "antd";
import { CoursesByMentor, Reviews } from "@/components";

export const MentorPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["tutors", id],
    queryFn: () => fetchMentorDetails(Number(id)),
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
      <MentorInformation data={data} />
      <CoursesByMentor
        authorId={Number(id)}
        authorName={`${data.first_name} ${data.last_name}`}
      />
      <Reviews id="Reviews" />
    </>
  );
};
