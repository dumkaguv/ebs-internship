import { message, Tabs } from "antd";
import type { TabsProps } from "antd";
import {
  CourseAddFormStep1,
  CourseAddFormStep2,
  CourseAddFormStep3,
  CourseAddFormStep4,
} from "@/features/course/components";
import { useAddCourseFormStore } from "@/features/course/stores";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchCourseDetails } from "@/features/course/api";

export const CourseAddPage = () => {
  const { id } = useParams<{ id?: string }>();
  const { currentStep, setCourse, setCurrentStep } = useAddCourseFormStore();

  const queryClient = useQueryClient();

  useEffect(() => {
    if (!id) return;

    const loadCourse = async () => {
      try {
        const course = await queryClient.fetchQuery({
          queryKey: ["course", id],
          queryFn: () => fetchCourseDetails(id),
          retry: false,
        });

        console.log("Course loaded", course);
        setCourse(course);
      } catch (error) {
        message.error("Failed to load course");
        console.error(error);
      }
    };

    loadCourse();
  }, [currentStep, id, queryClient, setCourse]);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Basic Information",
      children: <CourseAddFormStep1 title="Basic Information" />,
    },
    {
      key: "2",
      label: "Advance Information",
      children: <CourseAddFormStep2 title="Advance Information" />,
      disabled: !id,
    },
    {
      key: "3",
      label: "Course Curriculum",
      children: <CourseAddFormStep3 title="Course Curriculum" />,
      disabled: !id,
    },
    {
      key: "4",
      label: "Publish Course",
      children: <CourseAddFormStep4 title="Publish Course" />,
      disabled: !id,
    },
  ];

  return (
    <Tabs
      activeKey={String(currentStep)}
      onTabClick={(key) => setCurrentStep(Number(key))}
      tabBarGutter={24}
      className="w-full"
      items={items}
    />
  );
};
