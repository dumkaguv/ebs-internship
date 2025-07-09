import { Flex, Form, message } from "antd";
import { StepContent } from "@/features/course/components";
import { UploadPhoto } from "./UploadPhoto";
import { UploadVideo } from "./UploadVideo";
import { useCourseAddFormStep2Styles } from "./CourseAddFormStep2Styles";
import { CourseDescription } from "./CourseDescription";
import { DynamicFieldsList } from "./DynamicFieldsList";
import { useForm } from "antd/es/form/Form";
import { ApiClient } from "@/services/apiClient";
import { useAddCourseFormStore } from "@/features/course/stores";
import { updateCourse } from "@/features/course/api";
import { FileType } from "@/features/course/stores/courseAddFormStore";
import { UpdateCourseBody } from "@/features/course/api/updateCourse";

interface Props {
  title: string;
}

interface FormValues {
  photoFile: FileType;
  videoFile: FileType;
  description: string;
}

export const CourseAddFormStep2 = ({ title }: Props) => {
  const { course, photoFile, videoFile } = useAddCourseFormStore();
  const [form] = useForm<FormValues>();

  const { styles } = useCourseAddFormStep2Styles();

  if (!course) return null;

  const onButtonNextClick = async () => {
    const valuesFromForm = form.getFieldsValue();

    const updateData: Partial<UpdateCourseBody> = {
      description: valuesFromForm.description,
    };

    if (photoFile) {
      const uploadedPhoto = await ApiClient.files.uploadFiles({
        target: `/course/images/${course.id}`,
        file: photoFile,
      });

      if (!uploadedPhoto) {
        message.error("Failed to upload photo");
        throw new Error("Photo upload failed");
      }

      updateData.image_url = uploadedPhoto.url;
      updateData.image_path = `/${uploadedPhoto.name}`;
    }

    if (videoFile) {
      const uploadedVideo = await ApiClient.files.uploadFiles({
        target: `/course/videos/${course.id}`,
        file: videoFile,
      });

      if (!uploadedVideo) {
        message.error("Failed to upload video");
        throw new Error("Video upload failed");
      }

      updateData.video_url = uploadedVideo.url;
      updateData.video_path = `/${uploadedVideo.name}`;
    }

    const updatedCourse = await updateCourse(course.id, updateData);

    if (!updatedCourse) {
      message.error("Failed to update course");
      throw new Error("Course update failed");
    }
  };

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
          gap={48}
          justify="space-between"
          className={styles.sectionDivider}
        >
          <UploadPhoto />
          <UploadVideo />
        </Flex>
        <Flex className={styles.sectionDivider}>
          <CourseDescription form={form} />
        </Flex>
        <Flex
          vertical
          gap={24}
          className={styles.sectionDivider}
        >
          <DynamicFieldsList
            inputsName="teach"
            title="What you will teach in this course"
            placeholder="What you will teach in this course..."
          />
        </Flex>
        <Flex
          vertical
          gap={24}
          className={styles.sectionDivider}
        >
          <DynamicFieldsList
            inputsName="audience"
            title="Target Audience"
            placeholder="Who this course is for..."
          />
        </Flex>
        <DynamicFieldsList
          inputsName="requirements"
          title="Course requirements"
          placeholder="What is your course requirements..."
        />
      </StepContent>
    </Form>
  );
};
