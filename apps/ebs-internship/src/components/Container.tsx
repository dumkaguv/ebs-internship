import { HTMLAttributes } from "react";

const WIDTHS = {
  md: 1280,
  lg: 1440,
};
const PADDING_INLINE = 16;

interface Props extends HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof WIDTHS;
}

export const Container = ({
  size = "md",
  style,
  children,
  ...props
}: Props) => {
  return (
    <div
      style={{
        maxWidth:
          size === "md"
            ? `${WIDTHS.md + PADDING_INLINE * 2}px`
            : size === "lg"
            ? `${WIDTHS.lg + PADDING_INLINE * 2}px`
            : `${WIDTHS.lg + PADDING_INLINE * 2}px`,
        marginInline: "auto",
        paddingInline: 16,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
