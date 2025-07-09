import { ReactNode, useEffect } from "react";
import { Button, Card, Flex, FormInstance, message, Typography } from "antd";
import { ButtonBack } from "@/components";
import { useAddCourseFormStore } from "@/features/course/stores";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ApiResponse } from "@libs";

interface Props {
  form: FormInstance;
  title: string;
  children: ReactNode;
  onButtonNextClickCB: () => Promise<void>;
}

export const StepContent = ({
  form,
  title,
  children,
  onButtonNextClickCB,
}: Props) => {
  const { currentStep, setCurrentStep } = useAddCourseFormStore();

  const { mutate: callback, isPending } = useMutation<
    unknown,
    AxiosError<ApiResponse<null>>
  >({
    mutationFn: onButtonNextClickCB,
    onSuccess: (data) => {
      requestAnimationFrame(() => message.destroy("Processing"));
      message.success(
        (data as AxiosResponse<ApiResponse<null>>)?.data?.message ?? "Success!"
      );
      setCurrentStep(currentStep + 1);
    },
    onError: (error: AxiosError<ApiResponse<null>>) => {
      requestAnimationFrame(() => message.destroy("Processing"));
      console.error(error);
    },
  });

  const onButtonNextClick = async () => {
    try {
      await form.validateFields();
    } catch (e) {
      console.log(e);
      message.error("Error validation fields!");
      return;
    }

    callback();
  };

  useEffect(() => {
    if (isPending) {
      message.open({
        key: "Processing",
        type: "loading",
        content: "Processing...",
        duration: 0,
      });
    }
  }, [isPending]);

  return (
    <Card>
      <Flex
        vertical
        gap={24}
      >
        <Typography.Title level={3}>{title}</Typography.Title>

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
          <Button
            onClick={onButtonNextClick}
            loading={isPending}
            type="primary"
          >
            Save & Next
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};
