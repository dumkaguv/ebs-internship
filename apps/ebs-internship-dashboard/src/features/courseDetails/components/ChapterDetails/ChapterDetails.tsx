import { Flex, Form, Typography } from "antd";
import { useForm } from "antd/es/form/Form";
import { useChapterDetailsStyles } from "./ChapterDetailsStyles";
import { StaticLabelInput } from "@/components";
interface Props {
  form: ReturnType<typeof useForm>[0];
}

export const ChapterDetails = ({ form }: Props) => {
  const { styles } = useChapterDetailsStyles();

  return (
    <Flex
      vertical
      gap={16}
    >
      <Typography.Title level={5}>Chapter details</Typography.Title>
      <Typography.Paragraph>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium.
      </Typography.Paragraph>

      <Form
        form={form}
        layout="vertical"
        className={styles.formContainer}
        requiredMark={false}
        scrollToFirstError
      >
        <Form.Item
          name="title"
          rules={[
            { required: true, message: "Please enter a title" },
            { min: 3, message: "Title must be at least 3 characters" },
          ]}
        >
          <StaticLabelInput
            id="title"
            placeholder="Title"
            label="Title"
          />
        </Form.Item>

        <Form.Item
          name="summary"
          rules={[
            { required: true, message: "Please enter a summary" },
            { min: 10, message: "Summary must be at least 10 characters" },
          ]}
        >
          <StaticLabelInput
            id="summary"
            placeholder="Summary"
            label="Summary"
          />
        </Form.Item>

        <Form.Item
          name="duration"
          rules={[
            { required: true, message: "Please enter a duration" },
            {
              pattern: /^[0-9]+$/,
              message: "Duration must be a number (in minutes)",
            },
          ]}
        >
          <StaticLabelInput
            id="duration"
            placeholder="Duration"
            label="Duration"
          />
        </Form.Item>
      </Form>
    </Flex>
  );
};
