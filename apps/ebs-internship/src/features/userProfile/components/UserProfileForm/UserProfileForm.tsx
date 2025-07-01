// import { Button, Form } from "antd";
import {
  UserProfileLinksForm,
  UserProfileInformationForm,
  UserProfileImageForm,
} from "@/features/userProfile/components";
import { useUserProfileFormStyles } from "./UserProfileFormStyles";
import { Flex } from "antd";

const UserProfileForm = () => {
  const { styles } = useUserProfileFormStyles();

  return (
    <Flex
      vertical
      gap={40}
      className={styles.formContainer}
    >
      <UserProfileInformationForm />
      <UserProfileImageForm />
      <UserProfileLinksForm />
    </Flex>
  );
};

export default UserProfileForm;
