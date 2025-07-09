import { Flex, Form } from "antd";
import { StepContent } from "@/features/course/components";
import { UploadPhoto } from "./UploadPhoto";
import { UploadVideo } from "./UploadVideo";
import { useCourseAddFormStep2Styles } from "./CourseAddFormStep2Styles";
import { CourseDescription } from "./CourseDescription";
import { DynamicFieldsList } from "./DynamicFieldsList";
import { useForm } from "antd/es/form/Form";

interface Props {
  title: string;
}

export const CourseAddFormStep2 = ({ title }: Props) => {
  const [form] = useForm();

  const { styles } = useCourseAddFormStep2Styles();

  const onButtonNextClick = async () => {
    console.log(1);
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
    </Form>
  );
};
