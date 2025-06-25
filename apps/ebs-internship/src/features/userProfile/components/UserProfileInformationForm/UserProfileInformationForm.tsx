import { Flex, Form, Input, Typography } from "antd";
import { useUserProfileInformationForm } from "./UserProfileInformationFormStyles";
import { createTextRules } from "@/utils/createTextRules";

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
        label={<Typography.Paragraph>Headline</Typography.Paragraph>}
        name="headline"
        className={styles.formItem}
        rules={createTextRules("Headline")}
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
