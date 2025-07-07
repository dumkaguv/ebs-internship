import { useMutation } from "@tanstack/react-query";
import {
  createCourse,
  createLessonToCourse,
  createTopicToLesson,
  updateCourse,
} from "@/features/course/api";
import { useAddCourseFormStore } from "@/features/course/stores";
import { ApiClient } from "@/services/apiClient";
import { ApiResponse, LOCAL_STORAGE } from "@libs";
import { Button, message } from "antd";
import { useEffect } from "react";
import { AxiosError } from "axios";

export const ButtonCreateCourse = () => {
  const { form, photoFile, videoFile } = useAddCourseFormStore();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      if (!form || !photoFile || !videoFile) {
        message.error("Validation failed! Check again all required inputs.");
        throw new Error("Form or files are missing");
      }

      try {
        await form.validateFields();
      } catch (e) {
        message.error("Validation failed! Check again all required inputs.");
        console.error(e);
        throw e;
      }

      const courseInfoFromForm = form.getFieldsValue();
      const mainCourseInfo = {
        title: courseInfoFromForm.title,
        subtitle: courseInfoFromForm.subtitle,
        topic: courseInfoFromForm.topic,
        language: courseInfoFromForm.language,
        duration: String(courseInfoFromForm.duration),
        description: courseInfoFromForm.description,
        level: courseInfoFromForm.level,
      };

      const createdCourse = await createCourse(mainCourseInfo);
      const createdCourseId = createdCourse?.id;

      if (!createdCourseId) {
        message.error("Failed to create course");
        throw new Error("Failed to create course");
      }

      const uploadedPhoto = await ApiClient.files.uploadFiles({
        target: `/course/images/${createdCourseId}`,
        file: photoFile,
      });

      const uploadedVideo = await ApiClient.files.uploadFiles({
        target: `/course/videos/${createdCourseId}`,
        file: videoFile,
      });

      if (!uploadedPhoto || !uploadedVideo) {
        message.error("Upload failed");
        throw new Error("Upload failed");
      }

      const updatedCourseWithFiles = await updateCourse(createdCourseId, {
        image_url: uploadedPhoto.url,
        image_path: `/${uploadedPhoto.name}`,
        video_url: uploadedVideo.url,
        video_path: `/${uploadedVideo.name}`,
      });

      if (!updatedCourseWithFiles) {
        message.error("Failed to update course with files");
        throw new Error("Failed to update course with files");
      }

      const lessons = courseInfoFromForm.lessons;

      const createdLessons = await Promise.all(
        lessons.map(({ title, ...rest }, index) =>
          createLessonToCourse({
            order: index + 1,
            course_id: createdCourseId,
            title,
            active_from: new Date().toISOString(),
            ...rest,
          })
        )
      );

      if (!createdLessons || createdLessons.length === 0) {
        message.error("Failed to create lessons");
        throw new Error("Failed to create lessons");
      }

      const createdTopics = await Promise.all(
        createdLessons.map((lesson, index) => {
          const topics = lessons[index]?.topics || [];

          return Promise.all(
            topics.map((topic) =>
              createTopicToLesson({
                lesson_id: Number(lesson?.id),
                title: topic.title,
                description: topic.description,
                summary: topic.summary,
                duration: String(topic.duration),
                order: topic.order,
                preview: topic.preview ?? false,
              })
            )
          );
        })
      );

      return createdTopics;
    },
    onSuccess: () => {
      message.destroy("creating-course");
      message.success("Course created successfully!");
      form?.resetFields();
      form?.setFieldsValue({});
      localStorage.removeItem(LOCAL_STORAGE.COURSE_ADD_FORM);
    },
    onError: (error: AxiosError<ApiResponse<null>>) => {
      message.destroy("creating-course");
      console.error(error);
    },
  });

  useEffect(() => {
    if (isPending) {
      message.open({
        key: "creating-course",
        type: "loading",
        content: "Creating course...",
        duration: 0,
      });
    }
  }, [isPending]);

  return (
    <Button
      type="primary"
      onClick={() => mutate()}
      loading={isPending}
    >
      Create course
    </Button>
  );
};
