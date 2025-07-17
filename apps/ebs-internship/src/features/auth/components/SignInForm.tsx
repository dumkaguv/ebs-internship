import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import { useForm } from "antd/es/form/Form";
import { useLogin } from "@/features/auth/hooks";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "@/config/routesEnum";
import { Api, useAuthStore } from "@libs";
import { USER_ROLES, LOCAL_STORAGE } from "@libs";
import { navigateToAdminProfile } from "@/utils";

export const SignInForm = () => {
  const [form] = useForm();
  const navigate = useNavigate();
  const setProfile = useAuthStore((state) => state.setProfile);
  const { mutate, isPending } = useLogin();

  const handleSubmitSignIn = async () => {
    const { email, password } = await form.validateFields();
    mutate(
      { email, password },
      {
        onSuccess: async () => {
          const profile = await Api.profile.me();
          const isAdmin = profile?.roles.includes(USER_ROLES.ADMIN_ROLE);
          const userRole = isAdmin
            ? USER_ROLES.ADMIN_ROLE
            : USER_ROLES.STUDENT_ROLE;

          setProfile(profile);

          localStorage.setItem(LOCAL_STORAGE.USER_ROLE, userRole);

          if (isAdmin) {
            navigateToAdminProfile();
          } else {
            navigate(RoutesEnum.PROFILE.BASE);
          }
        },
      }
    );
  };

  return (
    <Form
      form={form}
      onFinish={handleSubmitSignIn}
      name="signin"
      layout="vertical"
      requiredMark={false}
      scrollToFirstError
    >
      <Form.Item
        label={<Typography.Title level={5}>Email</Typography.Title>}
        rules={[
          {
            required: true,
            message: "Please enter your email or username",
          },
          {
            type: "email",
            message: "Please enter a valid email",
          },
        ]}
        className="w-full"
        name="email"
      >
        <Input placeholder="Username or Email ID" />
      </Form.Item>
      <Form.Item
        label={<Typography.Title level={5}>Password</Typography.Title>}
        rules={[
          {
            required: true,
            message: "Please enter your password",
          },
        ]}
        name="password"
        className="w-full"
      >
        <Input.Password placeholder="Enter Password" />
      </Form.Item>
      <Button
        htmlType="submit"
        loading={isPending}
        disabled={isPending}
        type="primary"
        icon={<ArrowRightOutlined style={{ height: 24 }} />}
        iconPosition="end"
      >
        Sign In
      </Button>
    </Form>
  );
};
