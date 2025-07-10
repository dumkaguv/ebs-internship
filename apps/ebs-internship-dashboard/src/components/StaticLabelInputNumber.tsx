import { InputNumber } from "antd";
import type { InputNumberProps } from "antd";
import { StaticLabelWrapper } from "@/components";

interface Props extends InputNumberProps {
  label: string;
  id: string;
}

export const StaticLabelInputNumber = ({ label, id, ...rest }: Props) => {
  return (
    <StaticLabelWrapper
      id={id}
      label={label}
    >
      <InputNumber
        id={id}
        {...rest}
      />
    </StaticLabelWrapper>
  );
};
