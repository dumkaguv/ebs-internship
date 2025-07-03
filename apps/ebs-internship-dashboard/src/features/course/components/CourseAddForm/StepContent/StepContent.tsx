import { ReactNode } from "react";
import { Button, Card, Flex, message, Typography } from "antd";
import { useStepContentStyles } from "./StepContentStyles";
import { ButtonBack } from "@/components";
import { saveFormInfo } from "@/features/course/utils";
import { useAddCourseFormStore } from "@/features/course/stores";
import merge from "lodash.merge";
import { LOCAL_STORAGE } from "@libs";
import { ButtonCreateCourse } from "./ButtonCreateCourse";

const TOTAL_STEPS = 4;

interface Props {
  title: string;
  children: ReactNode;
}

export const StepContent = ({ title, children }: Props) => {
  const { form, currentStep, setCurrentStep } = useAddCourseFormStore();

  const { styles } = useStepContentStyles();

  if (!form) return null;

  const onSaveButtonClick = () => {
    try {
      saveFormInfo(
        merge(
          {},
          JSON.parse(
            localStorage.getItem(LOCAL_STORAGE.COURSE_ADD_FORM) ?? "[]"
          ),
          form.getFieldsValue()
        )
      );
      message.success("Saved successfully!");
    } catch (e) {
      message.error("Error occurred. Try again");
      console.log(e);
    }
  };

  const onButtonNextClick = async () => {
    try {
      await form.validateFields();

      const formValues = form.getFieldsValue();
      saveFormInfo(formValues);
      setCurrentStep(currentStep + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <Flex
        vertical
        gap={24}
      >
        <Flex
          align="center"
          justify="space-between"
          className={styles.header}
        >
          <Typography.Title level={3}>{title}</Typography.Title>
          <Button
            onClick={onSaveButtonClick}
            variant="solid"
            color="green"
          >
            Save
          </Button>
        </Flex>

        {children}

        <Flex
          gap={32}
          align="center"
          justify="space-between"
        >
          {currentStep > 1 ? (
            <Button
              variant="outlined"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Previous
            </Button>
          ) : (
            <ButtonBack
              title="Cancel"
              showIcon={false}
            />
          )}
          {currentStep === TOTAL_STEPS ? (
            <ButtonCreateCourse />
          ) : (
            <Button
              onClick={onButtonNextClick}
              type="primary"
            >
              Save & Next
            </Button>
          )}
        </Flex>
      </Flex>
    </Card>
  );
};
