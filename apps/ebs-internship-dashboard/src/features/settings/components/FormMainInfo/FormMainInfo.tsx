import { Button, Flex, Form, message, Select } from "antd";
import { StaticLabelInput, StaticLabelTextArea } from "@/components";
import { Api, throttle, useAuthStore, User } from "@libs";
import { useCallback, useEffect } from "react";
import { useForm } from "antd/es/form/Form";
import { useFormMainInfoStyles } from "./FormMainInfoStyles";
import { UploadPhoto } from "@/features/settings/components";
import { useMutation } from "@tanstack/react-query";
import type { ChangeUserProfileInfoProps } from "@libs/services/profile";
import { AxiosError } from "axios";

const options = [
  { value: "+880", label: "+880" },
  { value: "+240", label: "+240" },
  { value: "+127", label: "+127" },
  { value: "+254", label: "+254" },
];

export const FormMainInfo = () => {
  const { profile } = useAuthStore();

  const [form] = useForm<ChangeUserProfileInfoProps>();

  const { styles } = useFormMainInfoStyles();

  const { mutateAsync: updateProfileInfo, isPending } = useMutation<
    User,
    AxiosError<Error>,
    ChangeUserProfileInfoProps
  >({
    mutationFn: (values) => Api.profile.changeUserProfileInfo(values),
  });

  const throttledSave = throttle(async () => {
    try {
      await form.validateFields();
      const formValues = form.getFieldsValue();
      await updateProfileInfo(formValues);
      message.success("Settings updated");
    } catch (e) {
      if (e instanceof AxiosError) {
        message.error("Failed to update profile: " + e.message);
      } else {
        console.error("Validation error:", e);
        message.error("Please correct the errors in the form");
      }
    }
  }, 4000);

  const onSaveButtonClick = useCallback(async () => {
    const didRun = await throttledSave();

    if (!didRun) {
      message.warning("Please wait a bit before saving again.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (profile) {
      form.setFieldsValue({
        first_name: profile.first_name,
        last_name: profile.last_name,
        phone: profile.phone,
        address: profile.address,
        bio: profile.bio,
      });
    }
  }, [form, profile]);

  return (
    <Form
      form={form}
      layout="vertical"
      className={styles.wrapper}
    >
      <Flex
        vertical
        gap={28}
      >
        <Flex gap={36}>
          <Flex
            vertical
            gap={28}
            className="w-full"
          >
            <Form.Item
              name="first_name"
              rules={[
                {
                  required: true,
                  message: "Please, fill in your first name",
                },
              ]}
              className="w-full"
            >
              <StaticLabelInput
                id="firstName"
                label="First Name"
                placeholder="Enter your first name here..."
              />
            </Form.Item>

            <Form.Item
              name="last_name"
              rules={[
                {
                  required: true,
                  message: "Please, fill in your last name",
                },
              ]}
              className="w-full"
            >
              <StaticLabelInput
                id="lastName"
                label="Last Name"
                placeholder="Enter your last name here..."
              />
            </Form.Item>

            <Flex>
              <Select
                options={options}
                defaultValue={options[0].label}
                className={styles.phoneSelect}
              />
              <Form.Item
                name="phone"
                rules={[
                  {
                    pattern: /^\d+$/,
                    message: "Phone number must contain only digits",
                  },
                  {
                    type: "string",
                    min: 8,
                    message: "Phone number must be at least 8 digits",
                  },
                ]}
                className="w-full"
              >
                <StaticLabelInput
                  id="phone"
                  label="Phone"
                  placeholder="Enter your phone here..."
                />
              </Form.Item>
            </Flex>

            <Form.Item
              name="address"
              className="w-full"
            >
              <StaticLabelInput
                id="address"
                label="Address"
                placeholder="Enter your last address here..."
              />
            </Form.Item>
          </Flex>
          <UploadPhoto />
        </Flex>

        <Form.Item
          name="bio"
          className="w-full"
        >
          <StaticLabelTextArea
            id="bio"
            label="Bio"
            placeholder="Write a short bio..."
          />
        </Form.Item>

        <Button
          // htmlType="submit"
          onClick={onSaveButtonClick}
          type="primary"
          loading={isPending}
          className={styles.buttonSave}
        >
          Save Changes
        </Button>
      </Flex>
    </Form>
  );
};
