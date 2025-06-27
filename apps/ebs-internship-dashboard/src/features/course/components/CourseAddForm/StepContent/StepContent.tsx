import { ReactNode } from "react";
import { Button, Card, Flex, Typography } from "antd";
import { useStepContentStyles } from "./StepContentStyles";
import { ButtonBack } from "@/components";

interface Props {
  title: string;
  onButtonNextClick: () => void;
  children: ReactNode;
}

export const StepContent = ({ title, onButtonNextClick, children }: Props) => {
  const { styles } = useStepContentStyles();

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
          <ButtonBack
            title="Cancel"
            showIcon={false}
          />
          <Button
            onClick={onButtonNextClick}
            type="primary"
          >
            Next
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};
