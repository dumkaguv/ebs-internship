import { StepContent } from "@/features/course/components";
import { Button, Collapse, Flex, Form, Switch, Typography } from "antd";
import type { CollapseProps } from "antd";
import { BurgerMenu } from "@/assets";
import { useEffect, useRef } from "react";
import { ActionButtons } from "./ActionButtons";
import { StaticLabelInput, StaticLabelInputNumber } from "@/components";
import { useAddCourseFormStore } from "@/features/course/stores";
import { LOCAL_STORAGE } from "@libs";
import { useTheme } from "antd-style";

interface Props {
  title: string;
}

export const CourseAddFormStep3 = ({ title }: Props) => {
  const topicsAddMap = useRef<Record<number, () => void>>({});

  const { form } = useAddCourseFormStore();

  const theme = useTheme();

  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE.COURSE_ADD_FORM) ?? `[""]`
    );
    const values = stored?.lessons ?? [{ topics: [null] }];

    form?.setFieldValue("lessons", values);
  }, [form]);

  if (!form) return null;

  return (
    <StepContent title={title}>
      <Flex
        vertical
        gap={32}
      >
        <Form.List name="lessons">
          {(lessonFields, { add: addLesson, remove: removeLesson }) => (
            <>
              {lessonFields.map((lessonField) => {
                const lessonKey = lessonField.key.toString();

                return (
                  <Form.Item
                    key={lessonKey}
                    noStyle
                    shouldUpdate={(prev, next) => prev.lessons !== next.lessons}
                  >
                    {() => {
                      const lessonItems: CollapseProps["items"] = [
                        {
                          key: lessonKey,
                          label: (
                            <Flex justify="space-between">
                              <span>
                                {form.getFieldValue([
                                  "lessons",
                                  lessonField.name,
                                  "title",
                                ]) ?? "Lesson title (edit)"}
                              </span>
                              <Flex gap={16}>
                                <ActionButtons
                                  onClickAdd={() =>
                                    topicsAddMap.current[lessonField.name]?.()
                                  }
                                  onClickRemove={() =>
                                    removeLesson(lessonField.name)
                                  }
                                  modalTitle="Edit Lesson Title"
                                  inputEditLabel="Lesson"
                                  inputEditId="lesson_title"
                                  inputEditPlaceholder="Write your lesson name here.."
                                  fieldName="title"
                                  index={lessonField.name}
                                />
                              </Flex>
                            </Flex>
                          ),
                          children: (
                            <Form.Item
                              noStyle
                              shouldUpdate
                            >
                              {() => (
                                <Form.List name={[lessonField.name, "topics"]}>
                                  {(
                                    topicFields,
                                    { add: addTopic, remove: removeTopic }
                                  ) => {
                                    topicsAddMap.current[lessonField.name] =
                                      addTopic;

                                    const topicItems: CollapseProps["items"] =
                                      topicFields.map((topicField) => ({
                                        key: topicField.key.toString(),
                                        label: (
                                          <Flex justify="space-between">
                                            <span>
                                              {form.getFieldValue([
                                                "lessons",
                                                lessonField.name,
                                                "topics",
                                                topicField.name,
                                                "title",
                                              ]) ?? "Topic title (edit)"}
                                            </span>
                                            <Flex gap={16}>
                                              <ActionButtons
                                                showAddButton={false}
                                                onClickRemove={() =>
                                                  removeTopic(topicField.name)
                                                }
                                                modalTitle="Edit Topic Name"
                                                inputEditLabel="Topic"
                                                inputEditId="topic_name"
                                                inputEditPlaceholder="Write your topic name here.."
                                                fieldName="title"
                                                index={lessonField.name}
                                                innerIndex={topicField.name}
                                              />
                                            </Flex>
                                          </Flex>
                                        ),
                                        children: (
                                          <>
                                            <Form.Item
                                              name={[
                                                topicField.name,
                                                "description",
                                              ]}
                                              rules={[
                                                {
                                                  required: true,
                                                  message:
                                                    "Please fill topic description",
                                                },
                                              ]}
                                            >
                                              <StaticLabelInput
                                                label="Topic Description"
                                                id="topic_description"
                                                placeholder="Write your topic description here..."
                                              />
                                            </Form.Item>
                                            <Form.Item
                                              name={[
                                                topicField.name,
                                                "summary",
                                              ]}
                                              rules={[
                                                {
                                                  required: true,
                                                  message:
                                                    "Please fill topic summary",
                                                },
                                              ]}
                                            >
                                              <StaticLabelInput
                                                label="Topic Summary"
                                                id="topic_summary"
                                                placeholder="Write your topic summary here..."
                                              />
                                            </Form.Item>
                                            <Flex gap={24}>
                                              <Form.Item
                                                name={[
                                                  topicField.name,
                                                  "duration",
                                                ]}
                                                rules={[
                                                  {
                                                    required: true,
                                                    message:
                                                      "Please fill topic duration",
                                                  },
                                                ]}
                                                className="w-full"
                                              >
                                                <StaticLabelInputNumber
                                                  label="Topic Duration (hours)"
                                                  id="topic_duration"
                                                  placeholder="Write your topic duration here..."
                                                />
                                              </Form.Item>
                                              <Form.Item
                                                name={[
                                                  topicField.name,
                                                  "order",
                                                ]}
                                                rules={[
                                                  {
                                                    required: true,
                                                    message:
                                                      "Please fill topic order",
                                                  },
                                                ]}
                                                className="w-full"
                                              >
                                                <StaticLabelInputNumber
                                                  label="Topic Order"
                                                  id="topic_order"
                                                  placeholder="Write your topic order here..."
                                                />
                                              </Form.Item>
                                            </Flex>
                                            <Flex
                                              gap={36}
                                              align="start"
                                            >
                                              <Flex vertical>
                                                <Typography.Paragraph>
                                                  Active
                                                </Typography.Paragraph>
                                                <Form.Item
                                                  name={[
                                                    topicField.name,
                                                    "active",
                                                  ]}
                                                >
                                                  <Switch defaultChecked />
                                                </Form.Item>
                                              </Flex>

                                              <Flex vertical>
                                                <Typography.Paragraph>
                                                  Preview
                                                </Typography.Paragraph>
                                                <Form.Item
                                                  name={[
                                                    topicField.name,
                                                    "preview",
                                                  ]}
                                                >
                                                  <Switch defaultChecked />
                                                </Form.Item>
                                              </Flex>
                                            </Flex>
                                          </>
                                        ),
                                      }));

                                    return (
                                      <Collapse
                                        items={topicItems}
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

                      return (
                        <Collapse
                          items={lessonItems}
                          defaultActiveKey={0}
                          expandIcon={() => (
                            <BurgerMenu
                              stroke={theme.grey.grey500}
                              width={20}
                              height={20}
                            />
                          )}
                        />
                      );
                    }}
                  </Form.Item>
                );
              })}

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
