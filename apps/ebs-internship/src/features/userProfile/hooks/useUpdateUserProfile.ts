import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  changeUserSettings,
  changeUserEmail,
  updateUserPassword,
} from "@/features/userProfile/api";
import { message } from "antd";

interface FormValues {
  first_name: string;
  last_name: string;
  bio?: string;
  email: string;
  current_password?: string;
  new_password?: string;
  new_confirm_password?: string;
}

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();

  const updateProfile = useMutation({
    mutationFn: changeUserSettings,
    onError: () => {
      message.error("Failed to update profile");
    },
  });

  const updateEmail = useMutation({
    mutationFn: changeUserEmail,
    onError: () => {
      message.error("Failed to update email");
    },
  });

  const updatePassword = useMutation({
    mutationFn: updateUserPassword,
    onError: () => {
      message.error("Failed to update password");
    },
  });

  const submit = async (values: FormValues) => {
    const {
      email,
      current_password,
      new_password,
      new_confirm_password,
      first_name,
      last_name,
      bio,
    } = values;

    try {
      if (current_password && new_password && new_confirm_password) {
        await updatePassword.mutateAsync({
          current_password,
          new_password,
          new_confirm_password,
        });
      }

      if (email) {
        await updateEmail.mutateAsync({ email });
      }

      await updateProfile.mutateAsync({ first_name, last_name, bio });

      await queryClient.invalidateQueries({ queryKey: ["profile"] });
      message.success("Profile updated successfully");
    } catch (err) {
      console.error(err);
    }
  };
  const isPending =
    updateProfile.isPending ||
    updateEmail.isPending ||
    updatePassword.isPending;

  return { submit, isPending };
};
