import { Flex, Form, message } from "antd";
import { StepContent } from "@/features/course/components";
import { UploadPhoto } from "./UploadPhoto";
import { UploadVideo } from "./UploadVideo";
import { useCourseAddFormStep2Styles } from "./CourseAddFormStep2Styles";
import { CourseDescription } from "./CourseDescription";
import { useForm } from "antd/es/form/Form";
import { ApiClient } from "@/services/apiClient";
import { useAddCourseFormStore } from "@/features/course/stores";
import { updateCourse } from "@/features/course/api";
import { FileType } from "@/features/course/stores/courseAddFormStore";
import { UpdateCourseBody } from "@/features/course/api/updateCourse";
import { AssignAuthors } from "./AssignAuthors";
import { Author } from "@libs";
import { StaticLabelInput } from "@/components";

interface Props {
  title: string;
}

export interface FormValues {
  photoFile?: FileType;
  videoFile?: FileType;
  description?: string;
  target_group?: string;
  authors: Author[];
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

    const updatedCourse = await updateCourse(course.id, updateData, {
      authors: valuesFromForm.authors.map((author) => author.id),
    });

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

        <Flex className={styles.sectionDivider}>
          <Flex
            vertical
            gap={32}
            className="w-full"
          >
            <AssignAuthors form={form} />
            <Form.Item
              name="target_group"
              className="w-full"
              initialValue={course.target_group || undefined}
            >
              <StaticLabelInput
                id="target_group"
                label="Target Group"
                placeholder="Who this course is for..."
                count={{
                  show: true,
                  max: 120,
                }}
                allowClear
              />
            </Form.Item>
          </Flex>
        </Flex>
      </StepContent>
    </Form>
  );
};
