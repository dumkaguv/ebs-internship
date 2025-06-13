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
      style={{ marginBlock: "60px" }}
      {...props}
    >
      <Flex
        justify="space-between"
        align="center"
        style={title ? { marginBottom: 30 } : {}}
      >
        {title && (
          <Typography.Title
            level={2}
            style={{ marginBottom: 0 }}
          >
            {title}
          </Typography.Title>
        )}
        {endAdornment}
      </Flex>

      {children}
    </section>
  );
};

export default Section;
