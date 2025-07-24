import { HTMLAttributes } from "react";
import { Grid } from "antd";

const { useBreakpoint } = Grid;

const WIDTHS = {
  md: 1280,
  lg: 1440,
};

const PADDING_INLINE_DESKTOP = 16;
const PADDING_INLINE_MOBILE = 8;

interface Props extends HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof WIDTHS;
}

export const Container = ({
  size = "md",
  style,
  children,
  ...props
}: Props) => {
  const screens = useBreakpoint();

  const isMobile = !screens.sm;

  const paddingInline = isMobile
    ? PADDING_INLINE_MOBILE
    : PADDING_INLINE_DESKTOP;

  return (
    <div
      style={{
        maxWidth: `${WIDTHS[size] + PADDING_INLINE_DESKTOP * 2}px`,
        marginInline: "auto",
        paddingInline,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
