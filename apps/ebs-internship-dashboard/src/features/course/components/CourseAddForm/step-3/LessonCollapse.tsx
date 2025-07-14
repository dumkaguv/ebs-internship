import { Collapse, Flex, Form } from "antd";
import { BurgerMenu } from "@/assets";
import { ActionButtons } from "./ActionButtons";
import { TopicCollapse } from "./TopicCollapse";
import { useTheme } from "antd-style";
import type { RefObject } from "react";
import type { FormInstance } from "antd";
import type { FormValues } from "@/features/course/components/CourseAddForm/step-3/CourseAddFormStep3";

interface Props {
  form: FormInstance<FormValues>;
  index: number;
  lessonField: { key: number; name: number };
  removeLesson: (index: number) => void;
  topicsAddMap: RefObject<Record<number, () => void>>;
  deleteLessonMutate: (id: number) => void;
  deleteTopicMutate: (id: number) => void;
}

export const LessonCollapse = ({
  form,
  index,
  lessonField,
  removeLesson,
  topicsAddMap,
  deleteLessonMutate,
  deleteTopicMutate,
}: Props) => {
  const theme = useTheme();

  const onClickAdd = () => topicsAddMap.current[lessonField.name]?.();

  const onClickRemove = () => {
    const lesson = form.getFieldValue(["lessons", lessonField.name]);

    if (lesson?.id) {
      deleteLessonMutate(lesson.id);
    }
    removeLesson(lessonField.name);
  };

  const createAddTopicFn = (
    add: (initialValue: unknown) => void,
    topicCount: number
  ) => {
    return () => {
      add({
        title: "",
        description: "",
        summary: "",
        introduction: "",
        order: topicCount + 1,
        active: true,
        preview: true,
      });
    };
  };

  console.log("lesson");

  return (
    <Form.Item
      noStyle
      shouldUpdate={(prev, curr) =>
        prev.lessons?.[lessonField.name]?.title !==
        curr.lessons?.[lessonField.name]?.title
      }
    >
      {() => {
        const lessonTitle = form.getFieldValue([
          "lessons",
          lessonField.name,
          "title",
        ]);

        return (
          <Collapse
            items={[
              {
                key: lessonField.key.toString(),
                label: (
                  <Flex
                    justify="space-between"
                    align="center"
                  >
                    <span>{lessonTitle || "Lesson title (edit)"}</span>
                    <ActionButtons
                      form={form}
                      onClickAdd={onClickAdd}
                      onClickRemove={onClickRemove}
                      modalTitle="Edit Lesson Title"
                      inputEditLabel="Lesson"
                      inputEditId={`lesson_title_lesson_${lessonField.name}`}
                      inputEditPlaceholder="Write your lesson name here..."
                      fieldName="title"
                      index={lessonField.name}
                    />
                  </Flex>
                ),
                children: (
                  <Form.List name={[lessonField.name, "topics"]}>
                    {(topicFields, { add, remove }) => {
                      topicsAddMap.current[lessonField.name] = createAddTopicFn(
                        add,
                        topicFields.length
                      );

                      return (
                        <Collapse
                          items={TopicCollapse({
                            form,
                            lessonField,
                            topicFields,
                            removeTopic: remove,
                            lessonIndex: index,
                            deleteTopicMutate,
                          })}
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
                ),
              },
            ]}
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
    </Form.Item>
  );
};
