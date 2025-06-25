import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Input, Typography } from "antd";
import { useForm } from "antd/es/form/Form";
import { useRegister } from "@/features/auth/hooks";

export const SignUpForm = () => {
  const [form] = useForm();

  const { mutate } = useRegister();

  const onSubmit = async () => {
    const values = await form.validateFields();
    values.return_url = "http://localhost:4200/profile";
    console.log("Form values:", values);
    mutate(values);
  };

  return (
    <Form
      form={form}
      onFinish={onSubmit}
      name="signup"
      layout="vertical"
      requiredMark={false}
      scrollToFirstError
    >
      <Flex
        gap={30}
        align="center"
      >
        <Form.Item
          label={<Typography.Title level={5}>First Name</Typography.Title>}
          name="first_name"
          rules={[
            {
              required: true,
              message: "Please enter your first name",
            },
            {
              min: 2,
              message: "First name must be at least 2 characters",
            },
            {
              max: 30,
              message: "First name must be at most 30 characters",
            },
            {
              pattern: /^[A-Za-z\s-]+$/,
              message: "Only letters, spaces, and hyphens are allowed",
            },
          ]}
          className="w-full"
        >
          <Input
            placeholder="John"
            className="input"
          />
        </Form.Item>

        <Form.Item
          label={<Typography.Title level={5}>Last Name</Typography.Title>}
          rules={[
            {
              required: true,
              message: "Please enter your last name",
            },
            {
              min: 2,
              message: "Last name must be at least 2 characters",
            },
            {
              max: 30,
              message: "Last name must be at most 30 characters",
            },
            {
              pattern: /^[A-Za-z\s-]+$/,
              message: "Only letters, spaces, and hyphens are allowed",
            },
          ]}
          className="w-full"
          name="last_name"
        >
          <Input
            placeholder="Doe"
            className="input"
          />
        </Form.Item>
      </Flex>
      <Form.Item
        label={<Typography.Title level={5}>Username</Typography.Title>}
        rules={[
          {
            required: true,
            message: "Please enter your username",
          },
          {
            min: 2,
            message: "Username must be at least 2 characters",
          },
          {
            max: 30,
            message: "Username must be at most 30 characters",
          },
          {
            pattern: /^[A-Za-z-]+$/,
            message: "Only letters, and hyphens are allowed",
          },
        ]}
        className="w-full"
        name="username"
      >
        <Input
          placeholder="johndoe"
          className="input"
        />
      </Form.Item>
      <Form.Item
        label={<Typography.Title level={5}>Email</Typography.Title>}
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
        className="w-full"
        name="email"
      >
        <Input
          placeholder="johndoe@gmail.com"
          className="input"
        />
      </Form.Item>

      <Flex
        gap={30}
        align="center"
      >
        <Form.Item
          label={<Typography.Title level={5}>Password</Typography.Title>}
          hasFeedback
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
          name="password"
          className="w-full"
        >
          <Input.Password
            placeholder="aGAss2%$`1"
            className="input"
          />
        </Form.Item>

        <Form.Item
          label={
            <Typography.Title level={5}>Confirm Password</Typography.Title>
          }
          className="w-full"
          name="password_confirmation"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match"));
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="aGAss2%$`1"
            className="input"
          />
        </Form.Item>
      </Flex>
      <Button
        htmlType="submit"
        type="primary"
        icon={<ArrowRightOutlined style={{ height: 24 }} />}
        iconPosition="end"
      >
        Create Account
      </Button>
    </Form>
  );
};
