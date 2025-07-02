import { Button, Form, message } from "antd";
import {
  UserProfileLinksForm,
  UserProfileInformationForm,
  UserProfileImageForm,
} from "@/features/userProfile/components";
import { useUserProfileFormStyles } from "./UserProfileFormStyles";
import { useForm } from "antd/es/form/Form";
import { changeUserSettings } from "@/features/userProfile/api/changeUserSettings";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const UserProfileForm = () => {
  const [form] = useForm();
  const { styles } = useUserProfileFormStyles();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: changeUserSettings,
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
      <UserProfileInformationForm />
      <UserProfileImageForm />
      <UserProfileLinksForm />
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
