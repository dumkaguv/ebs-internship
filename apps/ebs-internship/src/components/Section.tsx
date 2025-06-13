import { Flex, Typography } from "antd";
import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  endAdornment?: ReactNode;
}

const Section: FC<PropsWithChildren<Props>> = ({
  title,
  endAdornment,
  children,
  ...props
}) => {
  return (
    <section
      style={{ marginBlock: "60px", paddingBlock: "40px" }}
      {...props}
    >
      <Flex
        justify="space-between"
        align="center"
      >
        {title && <Typography.Title level={2}>{title}</Typography.Title>}
        {endAdornment}
      </Flex>
      
      {children}
    </section>
  );
};

export default Section;
