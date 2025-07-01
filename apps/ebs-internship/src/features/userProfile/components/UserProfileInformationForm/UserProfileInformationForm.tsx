import { Button, Flex, Form, Input, Typography } from "antd";
import { useUserProfileInformationForm } from "./UserProfileInformationFormStyles";
import { createTextRules } from "@/utils/createTextRules";
import { useForm } from "antd/es/form/Form";
import { useUpdateUserProfile } from "@/features/userProfile/hooks/useUpdateUserProfile";

const UserProfileInformationForm = () => {
  const [form] = useForm();
  const { styles } = useUserProfileInformationForm();
  const { submit, isPending } = useUpdateUserProfile();

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
        className={styles.userContainer}
      >
        <Flex
          gap={30}
          align="center"
          justify="space-between"
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
          name="bio"
          label={<Typography.Paragraph>Description</Typography.Paragraph>}
        >
          <Input.TextArea
            placeholder="Description"
            rows={5}
          ></Input.TextArea>
        </Form.Item>

        <Flex
          gap={30}
          align="flex-start"
          justify="space-between"
        >
          <Form.Item
            label={<Typography.Paragraph>Email</Typography.Paragraph>}
            name="email"
            className={styles.formItem}
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

          <Flex
            vertical
            className={styles.passwordContainer}
          >
            <Form.Item
              label={
                <Typography.Paragraph>Current password</Typography.Paragraph>
              }
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
                <Typography.Paragraph>
                  Confirm new password
                </Typography.Paragraph>
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
        </Flex>
        <Form.Item className={styles.saveButton}>
          <Button
            htmlType="submit"
            block
            loading={isPending}
          >
            Save Changes
          </Button>
        </Form.Item>
      </Flex>
    </Form>
  );
};

export default UserProfileInformationForm;
