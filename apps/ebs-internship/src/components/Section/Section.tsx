import { Flex, Typography } from "antd";
import { HTMLAttributes, ReactNode } from "react";
import { useSectionStyles } from "./SectionStyles";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title?: string;
  endAdornment?: ReactNode;
}

export const Section = ({ title, endAdornment, children, ...props }: Props) => {
  const { styles } = useSectionStyles();

  return (
    <section
      className={styles.section}
      {...props}
    >
      <Flex
        justify="space-between"
        align="center"
        style={title ? { marginBottom: 30 } : {}}
      >
        {title && <Typography.Title level={2}>{title}</Typography.Title>}
        {endAdornment}
      </Flex>

      {children}
    </section>
  );
};
