import { Flex, Form, Input, Typography } from "antd";
import { useUserProfileInformationForm } from "./UserProfileInformationFormStyles";

const UserProfileInformationForm = () => {
  const { styles } = useUserProfileInformationForm();

  return (
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
        >
          <Input
            className={styles.inputForm}
            placeholder="Last Name"
          />
        </Form.Item>
      </Flex>

      <Form.Item
        label={<Typography.Paragraph>Headline</Typography.Paragraph>}
        name="headline"
        className={styles.formItem}
        rules={[
          {
            required: true,
            message: "Please enter your headline",
          },
          {
            min: 2,
            message: "Headline must be at least 2 characters",
          },
          {
            max: 30,
            message: "Headline must be at most 30 characters",
          },
          {
            pattern: /^[A-Za-z\s-]+$/,
            message: "Only letters, spaces, and hyphens are allowed",
          },
        ]}
      >
        <Input
          placeholder="Headline"
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

      <Form.Item
        label={<Typography.Paragraph>Email</Typography.Paragraph>}
        name="email"
        className={styles.formItem}
      >
        <Input
          placeholder="Email"
          className={styles.inputForm}
        />
      </Form.Item>
    </Flex>
  );
};

export default UserProfileInformationForm;
