import { Button, Form, message } from "antd";
import { useUserProfileFormStyles } from "./UserProfileFormStyles";
import { useForm } from "antd/es/form/Form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Api } from "@libs";

export const UserProfileForm = () => {
  const [form] = useForm();
  const { styles } = useUserProfileFormStyles();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: Api.profile.changeUserSettings,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      message.success("Changes was applied");
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
      className={styles.formContainer}
      requiredMark={false}
      scrollToFirstError
    >
      <Form.Item>
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
