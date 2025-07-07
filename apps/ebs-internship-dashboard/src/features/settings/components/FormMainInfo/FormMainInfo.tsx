import { Flex, Form, Select } from "antd";
import { StaticLabelInput, StaticLabelTextArea } from "@/components";
import { useAuthStore } from "@libs";
import { useEffect } from "react";
import { useForm } from "antd/es/form/Form";
import { useFormMainInfoStyles } from "./FormMainInfoStyles";
import { UploadPhoto } from "@/features/settings/components";

const options = [
  { value: "+880", label: "+880" },
  { value: "+240", label: "+240" },
  { value: "+127", label: "+127" },
  { value: "+254", label: "+254" },
];

export const FormMainInfo = () => {
  const { profile } = useAuthStore();

  const [form] = useForm();

  const { styles } = useFormMainInfoStyles();

  useEffect(() => {
    if (profile) {
      form.setFieldsValue({
        firstName: profile.first_name,
        lastName: profile.last_name,
        phone: profile.phone,
        address: profile.address,
        bio: profile.bio,
      });
    }
  }, [form, profile]);

  console.log(profile);

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
              name="firstName"
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
              name="lastName"
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
      </Flex>
    </Form>
  );
};
