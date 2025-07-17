import { Input } from "antd";
import { StaticLabelWrapper } from "@/components";
import { TextAreaProps } from "antd/es/input";

interface Props extends TextAreaProps {
  label: string;
  id: string;
  placeholder?: string;
}

export const StaticLabelTextArea = ({
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
      <Input.TextArea
        id={id}
        placeholder={placeholder ?? "Input here..."}
        {...rest}
      />
    </StaticLabelWrapper>
  );
};
