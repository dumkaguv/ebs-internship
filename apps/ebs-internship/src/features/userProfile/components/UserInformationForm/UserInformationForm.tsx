import { Button, Flex, Form, Input, Typography } from "antd";
import { createTextRules } from "@/utils/createTextRules";
import { useForm } from "antd/es/form/Form";
import { useUpdateUserProfile } from "@/features/userProfile/hooks/useUpdateUserProfile";
import { useEffect } from "react";
import { User } from "@libs";
import { useUserInformationForm } from "./UserInformationFormStyles";
interface Props {
  data: User;
}

export const UserInformationForm = ({ data }: Props) => {
  const [form] = useForm();
  const { styles } = useUserInformationForm();
  const { submit, isPending } = useUpdateUserProfile();

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        bio: data.bio,
      });
    }
  }, [data, form]);

  return (
    <Form
      form={form}
      layout="vertical"
      className={styles.formContainer}
      requiredMark={false}
      scrollToFirstError
      onFinish={submit}
    >
      <Flex
        vertical
        gap={16}
        className={styles.userContainer}
      >
        <Flex
          align="center"
          gap={16}
          justify="space-between"
          className={styles.nameContainer}
        >
          <Form.Item
            label={<Typography.Paragraph>First Name</Typography.Paragraph>}
            name="first_name"
            className={styles.formItem}
            rules={createTextRules("First Name")}
          >
            <Input
              className={styles.inputForm}
              placeholder="First Name"
            />
          </Form.Item>

          <Form.Item
            label={<Typography.Paragraph>Last Name</Typography.Paragraph>}
            name="last_name"
            className={styles.formItem}
            rules={createTextRules("Last Name")}
          >
            <Input
              className={styles.inputForm}
              placeholder="Last Name"
            />
          </Form.Item>
        </Flex>

        <Form.Item
          label={<Typography.Paragraph>Email</Typography.Paragraph>}
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email",
            },
            {
              type: "email",
              message: "Please enter a valid email",
            },
            {
              max: 50,
              message: "Email must be at most 50 characters",
            },
          ]}
        >
          <Input
            placeholder="Email"
            className={styles.inputForm}
          />
        </Form.Item>

        <Form.Item
          name="bio"
          label={<Typography.Paragraph>Description</Typography.Paragraph>}
        >
          <Input.TextArea
            placeholder="Description"
            rows={5}
          ></Input.TextArea>
        </Form.Item>

        <Form.Item className={styles.saveButton}>
          <Button
            htmlType="submit"
            block
            loading={isPending}
            className={styles.formItem}
          >
            Save Changes
          </Button>
        </Form.Item>
      </Flex>
    </Form>
  );
};
