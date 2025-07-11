import { useForm } from "antd/es/form/Form";
import { Button, Flex, Form } from "antd";
import { StepContent } from "@/features/course/components";
import { useAddCourseFormStore } from "@/features/course/stores";
import { useSubmitStep3 } from "@/features/course/hooks";
import { LessonCollapse } from "./LessonCollapse";
import { useEffect } from "react";

interface Props {
  title: string;
}

export interface FormValues {
  lessons: Lesson[];
}
interface Topic {
  id?: number;
  lesson_id?: number;
  title: string;
  description: string;
  summary: string;
  introduction: string;
  duration: number;
  order: number;
  active: boolean;
  preview: boolean;
}

interface Lesson {
  id?: number;
  order?: number;
  title: string;
  topics?: Topic[];
}

export const CourseAddFormStep3 = ({ title }: Props) => {
  const { course } = useAddCourseFormStore();
  const [form] = useForm<FormValues>();
  const {
    onButtonNextClick,
    topicsAddMap,
    deleteLessonMutate,
    deleteTopicMutate,
  } = useSubmitStep3(form);

  const initialLessonValue = {
    title: "",
    topics: [
      {
        title: "",
        description: "",
        summary: "",
        introduction: "",
        order: 1,
        active: true,
        preview: true,
      },
    ],
  };

  useEffect(() => {
    form.setFieldValue(
      "lessons",
      course?.lessons && course.lessons.length > 0
        ? course.lessons
        : [initialLessonValue]
    );
  }, [course, form]);

  return (
    <Form
      form={form}
      layout="vertical"
      requiredMark={false}
      scrollToFirstError
    >
      <StepContent
        form={form}
        title={title}
        onButtonNextClickCB={onButtonNextClick}
      >
        <Flex
          vertical
          gap={32}
        >
          <Form.List name="lessons">
            {(lessonFields, { add, remove }) => (
              <>
                {lessonFields.map((lessonField, index) => (
                  <LessonCollapse
                    key={lessonField.key}
                    form={form}
                    index={index}
                    lessonField={lessonField}
                    removeLesson={remove}
                    topicsAddMap={topicsAddMap}
                    deleteTopicMutate={deleteTopicMutate}
                    deleteLessonMutate={deleteLessonMutate}
                  />
                ))}
                <Button
                  type="primary"
                  onClick={() => add(initialLessonValue)}
                >
                  Add Lesson
                </Button>
              </>
            )}
          </Form.List>
        </Flex>
      </StepContent>
    </Form>
  );
};
