import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAuthors } from "@/features/course/api/fetchAuthors";
import {
  AutoComplete,
  Avatar,
  Flex,
  Typography,
  Tag,
  Form,
  FormInstance,
  Input,
} from "antd";
import type { DefaultOptionType } from "antd/es/select";
import { useCourseAddFormStep2Styles } from "./CourseAddFormStep2Styles";
import { Author } from "@libs";
import { SearchOutlined } from "@ant-design/icons";
import { FormValues } from "./CourseAddFormStep2";
import { useAddCourseFormStore } from "@/features/course/stores";
import { useWatch } from "antd/es/form/Form";

interface Props {
  form: FormInstance<FormValues>;
}

export const AssignAuthors = ({ form }: Props) => {
  const { data: authors } = useQuery({
    queryKey: ["authors"],
    queryFn: fetchAuthors,
  });

  const { course } = useAddCourseFormStore();
  const authorsValue: Author[] = useWatch("authors", form) || [];

  const { styles } = useCourseAddFormStep2Styles();

  useEffect(() => {
    if (course?.authors?.length && !authorsValue.length) {
      form.setFieldValue("authors", course.authors);
    }
  }, [course, authorsValue.length, form]);

  const handleSelect = (value: string) => {
    const selected = authors?.find((a) => a.id.toString() === value);
    if (!selected || authorsValue.some((a) => a.id === selected.id)) return;

    form.setFieldValue("authors", [...authorsValue, selected]);
  };

  const handleRemove = (id: number) => {
    form.setFieldValue(
      "authors",
      authorsValue.filter((a) => a.id !== id)
    );
  };

  const renderAuthorCard = (author: Author) => (
    <Flex
      align="center"
      gap={12}
    >
      <Avatar
        size={48}
        src={author.url_avatar}
      />
      <Flex vertical>
        <Typography.Text>
          {author.first_name} {author.last_name}
        </Typography.Text>
        <Typography.Text type="secondary">{author.bio}</Typography.Text>
      </Flex>
    </Flex>
  );

  const authorOptions: DefaultOptionType[] =
    authors?.map((author) => ({
      value: author.id.toString(),
      label: renderAuthorCard(author),
    })) ?? [];

  return (
    <>
      <Form.Item name="authors">
        <Input hidden />
      </Form.Item>

      <Flex
        vertical
        gap={16}
        className="w-full"
      >
        <Typography.Title level={5}>Assign Authors</Typography.Title>

        <AutoComplete
          options={authorOptions}
          placeholder="Search author..."
          value=""
          onChange={() => undefined}
          onSelect={handleSelect}
          prefix={<SearchOutlined />}
          allowClear
          className={styles.inputAuthors}
        />

        <Flex
          gap={8}
          wrap
        >
          {authorsValue.map((author) => (
            <Tag
              key={author.id}
              closable={authorsValue.length > 1}
              onClose={() => handleRemove(author.id)}
              className={styles.authorTag}
            >
              {renderAuthorCard(author)}
            </Tag>
          ))}
        </Flex>
      </Flex>
    </>
  );
};
