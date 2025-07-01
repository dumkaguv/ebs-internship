import { Flex } from "antd";
import { StepContent } from "@/features/course/components";
import { UploadPhoto } from "./UploadPhoto";
import { UploadVideo } from "./UploadVideo";
import { useCourseAddFormStep2Styles } from "./CourseAddFormStep2Styles";
import { CourseDescription } from "./CourseDescription";

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
      <CourseDescription />
    </StepContent>
  );
};
