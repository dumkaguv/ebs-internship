import { TextFormattingToolbar } from "@/components";
import { useAddCourseFormStore } from "@/features/course/stores";
import { LOCAL_STORAGE } from "@libs";
import { Flex, Form, Typography } from "antd";

export const CourseDescription = () => {
  const { form } = useAddCourseFormStore();

  const initialTextFormatterValue = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE.COURSE_ADD_FORM) || `{ description: "" }`
  ).description;

  const handleChange = (html: string) => {
    form?.setFieldsValue({ description: html });
  };

  return (
    <Form.Item
      name="description"
      rules={[{ required: true, message: "Please fill in course description" }]}
    >
      <Flex
        vertical
        gap={16}
      >
        <Typography.Title level={5}>Course Descriptions</Typography.Title>

        <TextFormattingToolbar
          initialValue={initialTextFormatterValue}
          onChange={handleChange}
        />
      </Flex>
    </Form.Item>
  );
};
