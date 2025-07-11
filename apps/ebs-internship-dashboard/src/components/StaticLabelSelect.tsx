import { StaticLabelWrapper } from "@/components/StaticLabelWrapper";
import { Select, SelectProps } from "antd";

interface Props extends SelectProps {
  label: string;
  id: string;
}

export const StaticLabelSelect = ({ label, id, ...rest }: Props) => {
  return (
    <StaticLabelWrapper
      label={label}
      id={id}
    >
      <Select
        id={id}
        {...rest}
      />
    </StaticLabelWrapper>
  );
};
