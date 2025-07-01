import { Flex } from "antd";
import { StepContent } from "@/features/course/components";
import { UploadPhoto } from "./UploadPhoto";
import { UploadVideo } from "./UploadVideo";
import { useCourseAddFormStep2Styles } from "./CourseAddFormStep2Styles";
import { CourseDescription } from "./CourseDescription";
import { DynamicFieldsList } from "./DynamicFieldsList";

interface Props {
  title: string;
}

export const CourseAddFormStep2 = ({ title }: Props) => {
  const { styles } = useCourseAddFormStep2Styles();

  return (
    <StepContent title={title}>
      <Flex
        gap={48}
        justify="space-between"
        className={styles.sectionDivider}
      >
        <UploadPhoto />
        <UploadVideo />
      </Flex>
      <Flex className={styles.sectionDivider}>
        <CourseDescription />
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
  );
};
