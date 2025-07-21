import {
  UserLinksForm,
  UserInformationForm,
  UserImageForm,
  UserPasswordForm,
} from "@/features/userProfile/components";
import { useUserProfileFormStyles } from "./UserProfileFormStyles";
import { Flex } from "antd";
import { useOutletContext } from "react-router-dom";
import { User } from "@libs";
interface OutletContext {
  data: User;
}

export const UserProfileForm = () => {
  const { styles } = useUserProfileFormStyles();
  const { data } = useOutletContext<OutletContext>();

  return (
    <Flex className={styles.formContainer}>
      <UserInformationForm data={data} />
      <Flex
        justify="space-between"
        gap={40}
        className={styles.imageAndPasswordContainer}
      >
        <UserImageForm data={data} />
        <UserPasswordForm />
      </Flex>
      <UserLinksForm />
    </Flex>
  );
};
