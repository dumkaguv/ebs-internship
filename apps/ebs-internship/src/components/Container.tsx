import { CSSProperties, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  size?: "md" | "lg";
  style?: CSSProperties;
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
          size === "md" ? "1280px" : size === "lg" ? "1440px" : "1440px",
        margin: "0 auto",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
