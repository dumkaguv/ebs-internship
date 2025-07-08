import { StepContent } from "@/features/course/components";
import { Button, Collapse, Flex, Form, Switch, Typography } from "antd";
import type { CollapseProps } from "antd";
import { BurgerMenu } from "@/assets";
import { useRef } from "react";
import { ActionButtons } from "./ActionButtons";
import { StaticLabelInput, StaticLabelInputNumber } from "@/components";
import { useAddCourseFormStore } from "@/features/course/stores";
import { useTheme } from "antd-style";

interface Props {
  title: string;
}

export const CourseAddFormStep3 = ({ title }: Props) => {
  const topicsAddMap = useRef<Record<number, () => void>>({});
  const { form } = useAddCourseFormStore();
  const theme = useTheme();

  if (!form) return null;

  const createLessonItems = (
    lessonField: { key: number; name: number },
    removeLesson: (index: number) => void
  ) => [
    {
      key: lessonField.key.toString(),
      label: (
        <Flex
          justify="space-between"
          align="center"
        >
          <span>
            {form.getFieldValue(["lessons", lessonField.name, "title"]) ||
              "Lesson title (edit)"}
          </span>

          <ActionButtons
            onClickAdd={() => topicsAddMap.current[lessonField.name]?.()}
            onClickRemove={() => removeLesson(lessonField.name)}
            modalTitle="Edit Lesson Title"
            inputEditLabel="Lesson"
            inputEditId="lesson_title"
            inputEditPlaceholder="Write your lesson name here..."
            fieldName="title"
            index={lessonField.name}
          />
        </Flex>
      ),
      children: (
        <Form.Item
          noStyle
          shouldUpdate
        >
          {() => (
            <Form.List name={[lessonField.name, "topics"]}>
              {(topicFields, { add: addTopic, remove: removeTopic }) => {
                topicsAddMap.current[lessonField.name] = addTopic;
                return (
                  <Collapse
                    items={createTopicItems(
                      lessonField,
                      topicFields,
                      removeTopic
                    )}
                    expandIcon={() => (
                      <BurgerMenu
                        stroke={theme.grey.grey500}
                        width={20}
                        height={20}
                      />
                    )}
                    defaultActiveKey={0}
                  />
                );
              }}
            </Form.List>
          )}
        </Form.Item>
      ),
    },
  ];

  const createTopicItems = (
    lessonField: { name: number },
    topicFields: { key: number; name: number }[],
    removeTopic: (index: number) => void
  ): CollapseProps["items"] =>
    topicFields.map((topicField) => ({
      key: topicField.key.toString(),
      label: (
        <Flex
          justify="space-between"
          align="center"
        >
          <span>
            {form.getFieldValue([
              "lessons",
              lessonField.name,
              "topics",
              topicField.name,
              "title",
            ]) || "Topic title (edit)"}
          </span>
          <ActionButtons
            showAddButton={false}
            onClickRemove={() => removeTopic(topicField.name)}
            modalTitle="Edit Topic Name"
            inputEditLabel="Topic"
            inputEditId="topic_name"
            inputEditPlaceholder="Write your topic name here..."
            fieldName="title"
            index={lessonField.name}
            innerIndex={topicField.name}
          />
        </Flex>
      ),
      children: (
        <>
          <Form.Item
            name={[topicField.name, "description"]}
            rules={[
              { required: true, message: "Please fill topic description" },
            ]}
          >
            <StaticLabelInput
              label="Topic Description"
              id={`topic_description_${Math.random().toPrecision(6)}`}
              placeholder="Write your topic description here..."
            />
          </Form.Item>

          <Form.Item
            name={[topicField.name, "summary"]}
            rules={[{ required: true, message: "Please fill topic summary" }]}
          >
            <StaticLabelInput
              label="Topic Summary"
              id={`topic_summary_${Math.random().toPrecision(6)}`}
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
              label="Topic introduction"
              id={`topic_introduction_${Math.random().toPrecision(6)}`}
              placeholder="Write your topic introduction here..."
            />
          </Form.Item>

          <Flex gap={24}>
            <Form.Item
              name={[topicField.name, "duration"]}
              rules={[
                { required: true, message: "Please fill topic duration" },
              ]}
              className="w-full"
            >
              <StaticLabelInputNumber
                label="Topic Duration (hours)"
                id={`topic_duration_${Math.random().toPrecision(6)}`}
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
                id={`topic_order_${Math.random().toPrecision(6)}`}
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
                <Switch />
              </Form.Item>
            </Flex>
            <Flex vertical>
              <Typography.Paragraph>Preview</Typography.Paragraph>
              <Form.Item
                name={[topicField.name, "preview"]}
                valuePropName="checked"
              >
                <Switch />
              </Form.Item>
            </Flex>
          </Flex>
        </>
      ),
    }));

  return (
    <StepContent title={title}>
      <Flex
        vertical
        gap={32}
      >
        <Form.List name="lessons">
          {(lessonFields, { add: addLesson, remove: removeLesson }) => (
            <>
              {lessonFields.map((lessonField) => (
                <Form.Item
                  key={lessonField.key}
                  noStyle
                  shouldUpdate={(prev, next) => prev.lessons !== next.lessons}
                >
                  {() => (
                    <Collapse
                      items={createLessonItems(lessonField, removeLesson)}
                      expandIcon={() => (
                        <BurgerMenu
                          stroke={theme.grey.grey500}
                          width={20}
                          height={20}
                        />
                      )}
                      defaultActiveKey={0}
                    />
                  )}
                </Form.Item>
              ))}
              <Button
                type="primary"
                onClick={() => addLesson()}
              >
                Add Lesson
              </Button>
            </>
          )}
        </Form.List>
      </Flex>
    </StepContent>
  );
};
