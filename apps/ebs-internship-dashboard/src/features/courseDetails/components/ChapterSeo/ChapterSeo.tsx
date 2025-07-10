import { Flex, Form, Typography } from "antd";
import { useForm } from "antd/es/form/Form";
import { useChapterDetailsStyles } from "../ChapterDetails/ChapterDetailsStyles";
import { StaticLabelInput } from "@/components";

export const ChapterSeo = () => {
  const [form] = useForm();
  const { styles } = useChapterDetailsStyles();

  return (
    <Flex
      vertical
      gap={16}
    >
      <Typography.Title level={5}>SEO</Typography.Title>
      <Typography.Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography.Paragraph>

      <Form
        form={form}
        layout="vertical"
        className={styles.formContainer}
        requiredMark={false}
        scrollToFirstError
      >
        <Form.Item name="pptTitle">
          <StaticLabelInput
            id="pptTitle"
            placeholder="Notes"
            label="PPT Title"
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
