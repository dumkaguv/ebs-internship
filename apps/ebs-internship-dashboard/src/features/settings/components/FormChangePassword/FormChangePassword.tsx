import { StaticLabelInput } from "@/components";
import { Api, ApiResponse } from "@libs";
import { ChangePasswordBody } from "@libs/services/profile";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { AxiosError } from "axios";

export const FormChangePassword = () => {
  const [form] = useForm<ChangePasswordBody>();

  const { mutateAsync: changePassword } = useMutation<
    ApiResponse<null>,
    AxiosError,
    ChangePasswordBody
  >({
    mutationFn: (values) => Api.profile.changePassword(values),
  });

  const onSubmit = (values: ChangePasswordBody) => {
    changePassword(values, {
      onSuccess: (response) => {
        message.success(response.message ?? "Password changed successfully!");
        form.resetFields();
      },
      onError: (error: AxiosError) => {
        message.error("Failed to change password");
        console.error(error);
      },
    });
  };

  return (
    <Form
      form={form}
      onFinish={onSubmit}
    >
      <Form.Item
        name="current_password"
        rules={[
          { required: true, message: "Please enter your current password" },
        ]}
      >
        <StaticLabelInput
          label="Current Password"
          id="currentPassword"
          component={Input.Password}
        />
      </Form.Item>

      <Form.Item
        name="new_password"
        rules={[
          {
            required: true,
            message: "Please enter your password",
          },
          {
            min: 6,
            message: "Password must be at least 6 characters",
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
        name="new_confirm_password"
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
