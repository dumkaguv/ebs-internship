import { TextFormattingToolbar } from "@/components";
import { Flex, Form, FormInstance, Typography } from "antd";

interface Props {
  form: FormInstance;
}

export const CourseDescription = ({ form }: Props) => {
  return (
    <Form.Item
      name="description"
      rules={[{ required: true, message: "Please fill in course description" }]}
      className="w-full"
    >
      <Flex
        vertical
        gap={16}
      >
        <Typography.Title level={5}>Course Descriptions</Typography.Title>

        <TextFormattingToolbar form={form} />
      </Flex>
    </Form.Item>
  );
};
