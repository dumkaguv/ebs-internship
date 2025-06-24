import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchMentorDetails } from "../api/fetchMentorDetails";
import { MentorInformation } from "../components";
import { Flex, Spin } from "antd";
import CoursesByMentor from "@/components/CoursesByMentor/CoursesByMentor";

function MentorPage() {
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
        style={{ height: "100dvh" }}
      >
        <Spin size="large"></Spin>
      </Flex>
    );
  if (isError) return <div>Error: {error.message}</div>;
  if (!data) return <div style={{ color: "red" }}>No data found!</div>;

  return (
    <>
      <MentorInformation data={data} />
      <CoursesByMentor
        authorId={Number(id)}
        authorName={`${data.first_name} ${data.last_name}`}
      />
    </>
  );
}

export default MentorPage;
