import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import { useForm } from "antd/es/form/Form";

const SignInForm = () => {
  const [form] = useForm();

  const handleSubmitSignIn = async () => {
    const values = await form.validateFields();
    console.log(values);
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
        label={
          <Typography.Title
            level={5}
            style={{ marginBottom: 0 }}
          >
            Email
          </Typography.Title>
        }
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
        style={{ width: "100%" }}
        name="email"
      >
        <Input
          placeholder="Username or Email ID"
          style={{ height: 58, padding: 16 }}
        />
      </Form.Item>
      <Form.Item
        label={
          <Typography.Title
            level={5}
            style={{ marginBottom: 0 }}
          >
            Password
          </Typography.Title>
        }
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please enter your password",
          },
        ]}
        name="password"
        style={{ width: "100%" }}
      >
        <Input.Password
          placeholder="Enter Password"
          style={{ height: 58, padding: 16 }}
        />
      </Form.Item>
      <Button
        htmlType="submit"
        type="primary"
        icon={<ArrowRightOutlined style={{ height: 24 }} />}
        iconPosition="end"
      >
        Sign In{" "}
      </Button>
    </Form>
  );
};

export default SignInForm;
