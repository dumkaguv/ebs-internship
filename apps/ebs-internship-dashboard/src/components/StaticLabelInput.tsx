import { Input } from "antd";
import type { InputProps } from "antd";
import { StaticLabelWrapper } from "@/components";

interface Props extends InputProps {
  label: string;
  id: string;
  placeholder: string;
}

export const StaticLabelInput = ({
  label,
  id,
  placeholder,
  ...rest
}: Props) => {
  return (
    <StaticLabelWrapper
      id={id}
      label={label}
    >
      <Input
        id={id}
        placeholder={placeholder ?? "Input here..."}
        {...rest}
      />
    </StaticLabelWrapper>
  );
};
