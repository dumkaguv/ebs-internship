import { Flex, Form, Switch, Typography } from "antd";
import { StaticLabelInput, StaticLabelInputNumber } from "@/components";
import { ActionButtons } from "./ActionButtons";
import type { CollapseProps, FormInstance } from "antd";
import type { FormValues } from "@/features/course/components/CourseAddForm/step-3/CourseAddFormStep3";

interface Props {
  form: FormInstance<FormValues>;
  lessonField: { name: number };
  topicFields: { key: number; name: number }[];
  removeTopic: (index: number) => void;
  lessonIndex: number;
  deleteTopicMutate: (id: number) => void;
}

export const TopicCollapse = ({
  form,
  lessonField,
  topicFields,
  removeTopic,
  deleteTopicMutate,
}: Props): CollapseProps["items"] => {
  const onClickRemove = (topicField: (typeof topicFields)[number]) => {
    const topic = form.getFieldValue([
      "lessons",
      lessonField.name,
      "topics",
      topicField.name,
    ]);

    if (topic?.id) {
      deleteTopicMutate(topic.id);
    }
    removeTopic(topicField.name);
  };

  return topicFields.map((topicField) => ({
    key: topicField.key.toString(),
    label: (
      <Form.Item
        noStyle
        shouldUpdate={(prev, curr) =>
          prev.lessons?.[lessonField.name]?.topics?.[topicField.name]?.title !==
          curr.lessons?.[lessonField.name]?.topics?.[topicField.name]?.title
        }
      >
        {() => {
          const title = form.getFieldValue([
            "lessons",
            lessonField.name,
            "topics",
            topicField.name,
            "title",
          ]);
          return (
            <Flex
              justify="space-between"
              align="center"
            >
              <span>{title || "Topic title (edit)"}</span>
              <ActionButtons
                form={form}
                showAddButton={false}
                onClickRemove={() => onClickRemove(topicField)}
                modalTitle="Edit Topic Name"
                inputEditLabel="Topic"
                inputEditId={`topic_name_${lessonField.name}_${topicField.name}`}
                inputEditPlaceholder="Write your topic name here..."
                fieldName="title"
                index={lessonField.name}
                innerIndex={topicField.name}
              />
            </Flex>
          );
        }}
      </Form.Item>
    ),
    children: (
      <>
        <Form.Item
          name={[topicField.name, "description"]}
          rules={[{ required: true, message: "Please fill topic description" }]}
        >
          <StaticLabelInput
            label="Topic Description"
            id={`topic_description_${lessonField.name}_${topicField.name}`}
            placeholder="Write your topic description here..."
          />
        </Form.Item>

        <Form.Item
          name={[topicField.name, "summary"]}
          rules={[{ required: true, message: "Please fill topic summary" }]}
        >
          <StaticLabelInput
            label="Topic Summary"
            id={`topic_summary_${lessonField.name}_${topicField.name}`}
            placeholder="Write your topic summary here..."
          />
        </Form.Item>

        <Form.Item
          name={[topicField.name, "introduction"]}
          rules={[
            { required: true, message: "Please fill topic introduction" },
          ]}
        >
          <StaticLabelInput
            label="Topic Introduction"
            id={`topic_intro_${lessonField.name}_${topicField.name}`}
            placeholder="Write your topic introduction here..."
          />
        </Form.Item>

        <Flex gap={24}>
          <Form.Item
            name={[topicField.name, "duration"]}
            rules={[{ required: true, message: "Please fill topic duration" }]}
            className="w-full"
          >
            <StaticLabelInputNumber
              label="Topic Duration (hours)"
              id={`topic_duration_${lessonField.name}_${topicField.name}`}
              placeholder="Write your topic duration here..."
            />
          </Form.Item>

          <Form.Item
            name={[topicField.name, "order"]}
            rules={[{ required: true, message: "Please fill topic order" }]}
            className="w-full"
          >
            <StaticLabelInputNumber
              label="Topic Order"
              id={`topic_order_${lessonField.name}_${topicField.name}`}
              placeholder="Write your topic order here..."
              min={1}
            />
          </Form.Item>
        </Flex>

        <Flex
          gap={36}
          align="start"
        >
          <Flex vertical>
            <Typography.Paragraph>Active</Typography.Paragraph>
            <Form.Item
              name={[topicField.name, "active"]}
              valuePropName="checked"
            >
              <Switch defaultChecked={true} />
            </Form.Item>
          </Flex>
          <Flex vertical>
            <Typography.Paragraph>Preview</Typography.Paragraph>
            <Form.Item
              name={[topicField.name, "preview"]}
              valuePropName="checked"
            >
              <Switch defaultChecked={true} />
            </Form.Item>
          </Flex>
        </Flex>
      </>
    ),
  }));
};
