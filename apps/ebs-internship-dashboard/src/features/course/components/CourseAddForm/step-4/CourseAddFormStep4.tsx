import { StepContent } from "@/features/course/components";

interface Props {
  title: string;
}

export const CourseAddFormStep4 = ({ title }: Props) => {
  return (
    <StepContent title={title}>
      <div></div>
    </StepContent>
  );
};
