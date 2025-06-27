import { Input } from "antd";
import type { InputProps } from "antd";
import { StaticLabelWrapper } from "@/components";

interface Props extends InputProps {
  label: string;
  id: string;
}

export const StaticLabelInput = ({ label, id, className, ...rest }: Props) => {
  return (
    <StaticLabelWrapper
      id={id}
      label={label}
    >
      <Input
        id={id}
        {...rest}
      />
    </StaticLabelWrapper>
  );
};
