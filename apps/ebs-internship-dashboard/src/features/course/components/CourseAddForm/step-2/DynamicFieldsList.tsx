import { StaticLabelInput } from "@/components";
import { useAddCourseFormStore } from "@/features/course/stores";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { LOCAL_STORAGE } from "@libs";
import { Button, Flex, Form, Typography } from "antd";
import { useEffect } from "react";

interface Props {
  title: string;
  inputsName: string;
  placeholder: string;
  maxInputs?: number;
}

export const DynamicFieldsList = ({
  title,
  inputsName,
  placeholder,
  maxInputs = 8,
}: Props) => {
  const { form } = useAddCourseFormStore();

  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE.COURSE_ADD_FORM) ?? `[""]`
    );
    const values = stored?.[inputsName] ?? [""];

    form?.setFieldValue(inputsName, values);
  }, [form, inputsName]);

  return (
    <Form.List name={inputsName}>
      {(fields, { add, remove }) => (
        <>
          <Flex
            justify="space-between"
            align="center"
            gap={24}
          >
            <Typography.Title
              level={5}
            >{`${title} (${fields.length} / ${maxInputs})`}</Typography.Title>
            <Button
              type="link"
              icon={<PlusOutlined />}
              disabled={fields.length >= maxInputs}
              onClick={() => add("")}
            >
              Add new
            </Button>
          </Flex>

          {fields.map((field, index) => (
            <Flex
              key={field.key}
              gap={16}
              align="center"
            >
              <Form.Item
                {...field}
                key={field.key}
                name={field.name}
                rules={[{ required: true, message: "Please fill in" }]}
                className="w-full"
                style={{ marginBottom: 0 }}
              >
                <StaticLabelInput
                  id={String(index) + Math.random().toPrecision(6)}
                  label={String(index + 1).padStart(2, "0")}
                  maxLength={120}
                  count={{ show: true }}
                  placeholder={placeholder}
                />
              </Form.Item>
              {fields.length > 1 ? (
                <MinusCircleOutlined onClick={() => remove(field.name)} />
              ) : null}
            </Flex>
          ))}
        </>
      )}
    </Form.List>
  );
};
