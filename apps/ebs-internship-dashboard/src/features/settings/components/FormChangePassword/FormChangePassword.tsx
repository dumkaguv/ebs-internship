import { StaticLabelInput } from "@/components";
import { Button, Form, Input } from "antd";

export const FormChangePassword = () => {
  return (
    <Form>
      <Form.Item name="currentPassword">
        <StaticLabelInput
          label="Current Password"
          id="currentPassword"
          component={Input.Password}
        />
      </Form.Item>

      <Form.Item
        name="newPassword"
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
        hasFeedback
      >
        <StaticLabelInput
          label="New Password"
          id="newPassword"
          component={Input.Password}
        />
      </Form.Item>

      <Form.Item
        name="confirmPassword"
        rules={[
          {
            required: true,
            message: "Please confirm your password",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("newPassword") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Passwords do not match"));
            },
          }),
        ]}
        hasFeedback
      >
        <StaticLabelInput
          label="Confirm Password"
          id="confirmPassword"
          component={Input.Password}
        />
      </Form.Item>

      <Button
        htmlType="submit"
        type="primary"
      >
        Save Changes
      </Button>
    </Form>
  );
};
