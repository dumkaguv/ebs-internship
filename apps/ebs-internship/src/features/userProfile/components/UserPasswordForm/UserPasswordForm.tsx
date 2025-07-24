import { Button, Flex, Form, Input, message, Typography } from "antd";
import { useUserPasswordFormStyles } from "./UsePasswordFormStyles";
import { useForm } from "antd/es/form/Form";
import { useMutation } from "@tanstack/react-query";
import { updateUserPassword } from "../../api";

export const UserPasswordForm = () => {
  const [form] = useForm();
  const { styles } = useUserPasswordFormStyles();
  const { mutate, isPending } = useMutation({
    mutationFn: updateUserPassword,
    onSuccess: () => {
      message.success("Password was updated!");
    },
    onError: () => {
      message.error("Failed to update password");
    },
  });

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      mutate(values);
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      className={styles.passwordContainer}
      requiredMark={false}
      scrollToFirstError
      onFinish={handleSubmit}
    >
      <Typography.Title level={4}>Change Password</Typography.Title>

      <Flex
        vertical
        gap={16}
      >
        <Form.Item
          label={<Typography.Paragraph>Current password</Typography.Paragraph>}
          name="current_password"
          className={styles.formItem}
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                const newPass = getFieldValue("new_password");
                const confirm = getFieldValue("new_confirm_password");
                if (newPass || confirm) {
                  if (!value) {
                    return Promise.reject(
                      new Error(
                        "Current password is required to change password"
                      )
                    );
                  }
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          <Input.Password
            className={styles.inputForm}
            placeholder="Current Password"
          />
        </Form.Item>

        <Form.Item
          label={<Typography.Paragraph>New password</Typography.Paragraph>}
          name="new_password"
          className={styles.formItem}
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
            {
              min: 8,
              message: "Password must be at least 8 characters",
            },
            {
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]+$/,
              message:
                "Password must include upper/lowercase, number, and special character",
            },
          ]}
        >
          <Input.Password
            className={styles.inputForm}
            placeholder="New Password"
          />
        </Form.Item>

        <Form.Item
          hasFeedback
          label={
            <Typography.Paragraph>Confirm new password</Typography.Paragraph>
          }
          name="new_confirm_password"
          className={styles.formItem}
          rules={[
            {
              required: true,
              message: "Please confirm your password",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("new_password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match"));
              },
            }),
          ]}
        >
          <Input.Password
            type="password"
            className={styles.inputForm}
            placeholder="Confirm new password"
          />
        </Form.Item>
      </Flex>

      <Button
        htmlType="submit"
        className={styles.saveButton}
        loading={isPending}
      >
        Save Changes
      </Button>
    </Form>
  );
};
