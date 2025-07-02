import { Flex, Form, Input, Typography } from "antd";
import { useUserProfileLinksForm } from "./UserProfileLinksFormStyles";

export const UserProfileLinksForm = () => {
  const { styles } = useUserProfileLinksForm();

  return (
    <Flex
      className={styles.userContainer}
      vertical
    >
      <Typography.Title level={4}>Links</Typography.Title>

      <Flex vertical>
        <Form.Item
          label={<Typography.Paragraph>Website</Typography.Paragraph>}
          name="website"
        >
          <Input
            placeholder="https://example.com/"
            className={styles.inputForm}
          />
        </Form.Item>

        <Form.Item
          label={
            <Typography.Paragraph>X(Formerly twitter)</Typography.Paragraph>
          }
          name="twitter"
        >
          <Input
            placeholder="https://example.com/"
            className={styles.inputForm}
          />
        </Form.Item>

        <Form.Item
          label={<Typography.Paragraph>LinkedIn</Typography.Paragraph>}
          name="linkedin"
        >
          <Input
            placeholder="https://example.com/"
            className={styles.inputForm}
          />
        </Form.Item>

        <Form.Item
          label={<Typography.Paragraph>Youtube</Typography.Paragraph>}
          name="youtube"
        >
          <Input
            placeholder="https://example.com/"
            className={styles.inputForm}
          />
        </Form.Item>

        <Form.Item
          label={<Typography.Paragraph>Facebook</Typography.Paragraph>}
          name="facebook"
        >
          <Input
            placeholder="https://example.com/"
            className={styles.inputForm}
          />
        </Form.Item>
      </Flex>
    </Flex>
  );
};
