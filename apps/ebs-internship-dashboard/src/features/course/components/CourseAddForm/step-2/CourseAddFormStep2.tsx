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

interface Props {
  title: string;
}

interface FormValues {
  photoFile: FileType;
  videoFile: FileType;
  description: string;
}

export const CourseAddFormStep2 = ({ title }: Props) => {
  const { course, photoFile, videoFile, setCourse } = useAddCourseFormStore();
  const [form] = useForm<FormValues>();

  const { styles } = useCourseAddFormStep2Styles();

  if (!course) return null;

  const onButtonNextClick = async () => {
    const valuesFromForm = form.getFieldsValue();

    if (!photoFile || !videoFile) {
      message.error("Photo or video is missing!");
      return;
    }

    const uploadedPhoto = await ApiClient.files.uploadFiles({
      target: `/course/images/${course.id}`,
      file: photoFile,
    });

    const uploadedVideo = await ApiClient.files.uploadFiles({
      target: `/course/videos/${course.id}`,
      file: videoFile,
    });

    if (!uploadedPhoto || !uploadedVideo) {
      message.error("Upload failed");
      throw new Error("Upload failed");
    }

    const updatedCourseWithFiles = await updateCourse(course.id, {
      image_url: uploadedPhoto.url,
      image_path: `/${uploadedPhoto.name}`,
      video_url: uploadedVideo.url,
      video_path: `/${uploadedVideo.name}`,
      description: valuesFromForm.description,
    });

    if (!updatedCourseWithFiles) {
      message.error("Failed to update course with files");
      throw new Error("Failed to update course with files");
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
