import { Flex, Form, Typography } from "antd";
import { useChapterResourcesStyles } from "./ChapterResourcesStyles";
import { useForm } from "antd/es/form/Form";
import { StaticLabelInput } from "@/components";

export const ChapterResources = () => {
  const [form] = useForm();
  const { styles } = useChapterResourcesStyles();

  return (
    <Flex
      vertical
      gap={16}
    >
      <Typography.Title level={5}>Upload Notes</Typography.Title>
      <Typography.Paragraph>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.{" "}
      </Typography.Paragraph>

      <Form
        form={form}
        layout="vertical"
        className={styles.formContainer}
        requiredMark={false}
        scrollToFirstError
      >
        <Form.Item name="context-type">
          <StaticLabelInput
            id="contextType"
            placeholder="Notes"
            label="Context Type"
          />
        </Form.Item>

        <Form.Item name="title">
          <StaticLabelInput
            id="title"
            placeholder="Notes"
            label="Title"
          />
        </Form.Item>

        <Form.Item name="description">
          <StaticLabelInput
            id="description"
            placeholder="Description"
            label="Description"
          />
        </Form.Item>
      </Form>
    </Flex>
  );
};
