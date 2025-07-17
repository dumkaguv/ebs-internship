import { Button, Flex, Form, Input, message, Typography } from "antd";
import { useUserLinksForm } from "./UserLinksFormStyles";
import { useForm } from "antd/es/form/Form";
import { changeUserSettings } from "@/features/userProfile/api/changeUserSettings";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "@/providers/TanstackQueryClient";
import { fetchUserSettings } from "../../api";
import { useEffect } from "react";

export const UserLinksForm = () => {
  const [form] = useForm();
  const { data } = useQuery({
    queryKey: ["settings"],
    queryFn: fetchUserSettings,
  });

  const { styles } = useUserLinksForm();

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        website: data.website || "",
        twitter: data.twitter || "",
        linkedin: data.linkedin || "",
        youtube: data.youtube || "",
        facebook: data.facebook || "",
      });
    }
  }, [data, form]);

  const { mutate, isPending } = useMutation({
    mutationFn: changeUserSettings,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["settings"] });
      message.success("Links are added");
    },
    onError: () => {
      message.error("Failed to apply changes");
    },
  });

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      mutate(values);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form
      form={form}
      layout="vertical"
      requiredMark={false}
      scrollToFirstError
      className={styles.userContainer}
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
      <Form.Item className={styles.saveButton}>
        <Button
          htmlType="submit"
          block
          loading={isPending}
          onClick={handleSubmit}
        >
          Save Changes
        </Button>
      </Form.Item>
    </Form>
  );
};
