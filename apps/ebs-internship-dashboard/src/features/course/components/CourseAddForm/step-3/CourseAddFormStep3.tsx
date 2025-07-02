import { StepContent } from "@/features/course/components";

interface Props {
  title: string;
}

export const CourseAddFormStep3 = ({ title }: Props) => {
  return (
    <StepContent title={title}>
      <div></div>
    </StepContent>
  );
};
