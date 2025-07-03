import { useAddCourseFormStore } from "@/features/course/stores";
import { Button, message } from "antd";

export const ButtonCreateCourse = () => {
  const { form } = useAddCourseFormStore();

  if (!form) return null;

  const onCreateCourseButtonClick = async () => {
    try {
      await form.validateFields();
    } catch (e) {
      message.error("Validation failed! Check again all required inputs.");
      console.log(e);
      return;
    }

    try {
      // api call
    } catch (e) {
      console.log(e);
      message.error("Error occurred creating course! Try again.");
    }
  };

  return (
    <Button
      type="primary"
      onClick={onCreateCourseButtonClick}
    >
      Create course
    </Button>
  );
};
