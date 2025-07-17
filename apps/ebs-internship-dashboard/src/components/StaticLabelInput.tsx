import { Input } from "antd";
import type { InputProps } from "antd";
import { StaticLabelWrapper } from "@/components";
import { ComponentType } from "react";

interface Props extends InputProps {
  label: string;
  id: string;
  placeholder?: string;
  component?: ComponentType<InputProps>;
}

export const StaticLabelInput = ({
  label,
  id,
  placeholder,
  component: Component = Input,
  ...rest
}: Props) => {
  return (
    <StaticLabelWrapper
      id={id}
      label={label}
    >
      <Component
        id={id}
        placeholder={placeholder ?? "Input here..."}
        {...rest}
      />
    </StaticLabelWrapper>
  );
};
