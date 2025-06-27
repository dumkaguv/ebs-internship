import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { Form, Tabs } from "antd";
import type { TabsProps } from "antd";
import { CourseAddFormStep1 } from "@/features/course/components";

export const CourseAddPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [form] = useForm();

  const onButtonNextClick = async () => {
    try {
      await form.validateFields();
      setCurrentStep((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Basic Information",
      children: (
        <CourseAddFormStep1
          title="Basic Information"
          form={form}
          onButtonNextClick={onButtonNextClick}
        />
      ),
    },
    {
      key: "2",
      label: "Advance Information",
      children: <div>Step 2</div>,
    },
    {
      key: "3",
      label: "Curriculum",
      children: <div>Step 3</div>,
    },
    {
      key: "4",
      label: "Publish Course",
      children: <div>Step 4</div>,
    },
  ];

  return (
    <Form
      form={form}
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
