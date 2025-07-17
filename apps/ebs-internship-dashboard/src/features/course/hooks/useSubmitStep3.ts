import { useRef } from "react";
import { FormInstance, message } from "antd";
import { useAddCourseFormStore } from "@/features/course/stores";
import { useMutation } from "@tanstack/react-query";
import {
  createLessonToCourse,
  createTopicToLesson,
  deleteLesson,
  deleteTopic,
  updateLesson,
  updateTopic,
} from "@/features/course/api";
import type { FormValues } from "@/features/course/components/CourseAddForm/step-3/CourseAddFormStep3";
import { Lesson } from "@libs";

const TOPIC_TYPE = "EscolaLms\\TopicTypes\\Models\\TopicContent\\RichText";

export const useSubmitStep3 = (form: FormInstance<FormValues>) => {
  const topicsAddMap = useRef<Record<number, () => void>>({});
  const { course } = useAddCourseFormStore();

  const { mutate: deleteLessonMutate } = useMutation({
    mutationFn: deleteLesson,
  });
  const { mutate: deleteTopicMutate } = useMutation({
    mutationFn: deleteTopic,
  });

  const onButtonNextClick = async () => {
    if (!course) return;

    const courseInfoFromForm = form.getFieldsValue();
    const lessons = courseInfoFromForm.lessons;
    const topics = lessons.flatMap((lesson) => lesson.topics);

    const existingLessonIds = new Set(
      course?.lessons?.map((lesson) => lesson.id)
    );
    const existingTopicIds = new Set(
      course?.lessons?.flatMap((lesson) =>
        lesson.topics.map((topic) => topic.id)
      )
    );

    const createCoursesAndTopics = async () => {
      const lessonsToCreate = lessons.filter(
        ({ id }) => !existingLessonIds.has(Number(id))
      );

      let createdLessons: Array<Lesson | undefined> = [];

      const createLessons = async () => {
        if (lessonsToCreate.length > 0) {
          const maxExistingOrder = Math.max(
            0,
            ...(course.lessons?.map((lesson) => lesson.order || 0) ?? [])
          );

          createdLessons = await Promise.all(
            lessonsToCreate.map(({ title }, index) =>
              createLessonToCourse({
                course_id: course.id,
                order: maxExistingOrder + index + 1,
                title,
                active_from: new Date().toISOString(),
              })
            )
          );

          const allCreated = createdLessons.every((lesson) => lesson?.id);
          if (!allCreated) {
            message.error("Failed to create some lessons");
            throw new Error("Failed to create lessons");
          }
        }
      };

      await createLessons();

      const createTopics = async () => {
        await Promise.all(
          createdLessons.map((lesson, index) => {
            if (!lesson?.id) return null;

            const sourceLesson = lessonsToCreate[index];
            const topics = sourceLesson.topics || [];
            const topicsToCreate = topics.filter(
              (topic) => !topic.id || !existingTopicIds.has(topic.id)
            );

            return Promise.all(
              topicsToCreate.map((topic) =>
                createTopicToLesson({
                  lesson_id: Number(lesson.id),
                  topicable_type: TOPIC_TYPE,
                  introduction: topic.introduction,
                  value: topic.title,
                  title: topic.title,
                  description: topic.description,
                  summary: topic.summary,
                  duration: String(topic.duration),
                  order: topic.order,
                  active: topic.active ? 1 : 0,
                  preview: topic.preview ? 1 : 0,
                })
              )
            );
          })
        );
      };

      await createTopics();
    };

    const updateCoursesAndTopics = async () => {
      const updateLessons = async () => {
        const lessonsToUpdate = lessons.filter(
          (lesson) => lesson.id && existingLessonIds.has(lesson.id)
        );

        await Promise.all(
          lessonsToUpdate.map((lesson, index) => {
            if (!lesson.id) return null;

            return updateLesson(lesson.id, {
              course_id: course.id,
              order: lesson.order ?? index + 1,
              title: lesson.title,
            });
          })
        );
      };

      await updateLessons();

      const updateTopics = async () => {
        const topicsToUpdate = topics.filter(
          (topic) => topic?.id && existingTopicIds.has(topic.id)
        );

        await Promise.all(
          topicsToUpdate.map((topic) => {
            if (!topic?.id || !topic.lesson_id) return null;

            return updateTopic(topic.id, {
              lesson_id: topic.lesson_id,
              order: topic.order,
              title: topic.title,
              description: topic.description,
              summary: topic.summary,
              introduction: topic.introduction,
              duration: String(topic.duration),
              active: topic.active ? 1 : 0,
              preview: topic.preview ? 1 : 0,
            });
          })
        );
      };

      await updateTopics();
    };

    await createCoursesAndTopics();
    await updateCoursesAndTopics();
  };

  return {
    onButtonNextClick,
    topicsAddMap,
    deleteLessonMutate,
    deleteTopicMutate,
  };
};
