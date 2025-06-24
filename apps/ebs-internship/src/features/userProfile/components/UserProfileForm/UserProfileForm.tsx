import { Button, Form, message } from "antd";
import { UserProfileInformationForm } from "../UserProfileInformationForm";
import { UserProfileImageForm } from "../UserProfileImageForm";
import { UserProfileLinksForm } from "../UserProfileLinksForm";
import { User } from "@/types/user";
import { useOutletContext } from "react-router-dom";
import { useUserProfileFormStyles } from "./UserProfileFormStyles";
import { useForm } from "antd/es/form/Form";
import { changeUserSettings } from "../../api/changeUserSettings";

type ContextType = { data: User };

const UserProfileForm = () => {
  const [form] = useForm();
  const { styles } = useUserProfileFormStyles();
  const { data } = useOutletContext<ContextType>();

  const handleFinish = async (values: User) => {
    await changeUserSettings(values);
    message.success("Changes was applied");
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
      className={styles.formContainer}
      requiredMark={false}
      scrollToFirstError
    >
      <UserProfileInformationForm />
      <UserProfileImageForm data={data} />
      <UserProfileLinksForm />
      <Form.Item>
        <Button
          htmlType="submit"
          block
        >
          Save Changes
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserProfileForm;
