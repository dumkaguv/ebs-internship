import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  changeUserEmail,
  changeUserInformation,
} from "@/features/userProfile/api";
import { message } from "antd";

interface FormValues {
  first_name: string;
  last_name: string;
  bio: string;
  email: string;
}

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();

  const updateProfile = useMutation({
    mutationFn: changeUserInformation,
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

  const submit = async (values: FormValues) => {
    const { email, first_name, last_name, bio } = values;

    try {
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
  const isPending = updateProfile.isPending || updateEmail.isPending;

  return { submit, isPending };
};
