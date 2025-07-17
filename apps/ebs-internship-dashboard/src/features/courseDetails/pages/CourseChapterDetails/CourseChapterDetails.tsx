import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import { LeftOutlined } from "@ant-design/icons";
import { Button, Flex, message, Tabs, Typography } from "antd";
import { Link, useParams } from "react-router-dom";
import {
  ChapterDetails,
  ChapterResources,
  ChapterSeo,
} from "@/features/courseDetails/components";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { changeChapterInformation } from "@/features/courseDetails/api/changeChapterInformation";
import { useForm } from "antd/es/form/Form";
import { fetchChapterDetails } from "@/features/courseDetails/api/fetchChapterDetails";
import { useEffect } from "react";

export const CourseChapterDetails = () => {
  const [form] = useForm();
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["lessons", id],
    queryFn: () => fetchChapterDetails(Number(id)),
  });

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        title: data.title,
        summary: data.summary,
        duration: data.duration,
      });
    }
  }, [data, form]);

  const { mutate, isPending } = useMutation({
    mutationFn: changeChapterInformation,
    onSuccess: () => {
      message.success("Chapter information was updated");

      queryClient.invalidateQueries({ queryKey: ["lessons", id] });
    },
    onError: () => {
      message.error("Something went wrong");
    },
  });

  const submitLessonChanges = async () => {
    const values = await form.validateFields();
    mutate({ id, order: data?.order, course_id: data?.course_id, ...values });
  };

  return (
    <Flex
      vertical
      gap={16}
    >
      <Flex justify="space-between">
        <Link
          to={getRouteUrlById(RoutesEnum.COURSES.BASE, Number(data?.course_id))}
        >
          <Typography.Paragraph>
            <LeftOutlined />
            Chapter {data?.order} - {data?.title}
          </Typography.Paragraph>
        </Link>
        <Flex gap={8}>
          <Button
            type="primary"
            danger
          >
            Delete
          </Button>
          <Button
            type="primary"
            loading={isPending}
            onClick={submitLessonChanges}
          >
            Apply Changes
          </Button>
        </Flex>
      </Flex>

      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: "Details",
            children: <ChapterDetails form={form} />,
          },
          {
            key: "2",
            label: "Resources",
            children: <ChapterResources />,
          },
          {
            key: "3",
            label: "SEO",
            children: <ChapterSeo />,
          },
        ]}
      />
    </Flex>
  );
};
