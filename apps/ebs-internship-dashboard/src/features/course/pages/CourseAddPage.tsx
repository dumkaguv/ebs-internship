import { useForm } from "antd/es/form/Form";
import { useLayoutEffect } from "react";
import { Form, Tabs } from "antd";
import type { TabsProps } from "antd";
import {
  CourseAddFormStep1,
  CourseAddFormStep2,
  CourseAddFormStep3,
  CourseAddFormStep4,
} from "@/features/course/components";
import { getFormInfo } from "@/features/course/utils";
import { useAddCourseFormStore } from "../stores";

export const CourseAddPage = () => {
  const [form] = useForm();
  const { setForm, currentStep, setCurrentStep } = useAddCourseFormStore();

  useLayoutEffect(() => setForm(form), [form, setForm]);

  const initialValues = getFormInfo();

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
    },
    {
      key: "3",
      label: "Course Curriculum",
      children: <CourseAddFormStep3 title="Course Curriculum" />,
    },
    {
      key: "4",
      label: "Publish Course",
      children: <CourseAddFormStep4 title="Publish Course" />,
    },
  ];

  return (
    <Form
      form={form}
      initialValues={initialValues}
      layout="vertical"
      requiredMark={false}
      scrollToFirstError
    >
      <Tabs
        activeKey={String(currentStep)}
        onTabClick={(key) => setCurrentStep(Number(key))}
        tabBarGutter={24}
        className="w-full"
        items={items}
      />
    </Form>
  );
};
