import { Tabs, type TabsProps } from "antd";
import {
  CourseAddFormStep1,
  CourseAddFormStep2,
  CourseAddFormStep3,
  CourseAddFormStep4,
} from "@/features/course/components";
import { useAddCourseFormStore } from "@/features/course/stores";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchCourseDetails } from "@/features/course/api";

export const CourseAddPage = () => {
  const { id } = useParams<{ id?: string }>();
  const { currentStep, setCourse, setCurrentStep } = useAddCourseFormStore();

  const { data: course, isSuccess } = useQuery({
    queryKey: ["course", id],
    queryFn: () => fetchCourseDetails(String(id)),
    enabled: !!id,
    retry: false,
  });

  useEffect(() => {
    if (isSuccess && course) {
      setCourse(course);
    }
  }, [isSuccess, course, setCourse]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentStep]);

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
      label: "Course Product",
      children: <CourseAddFormStep4 title="Course Product" />,
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
