import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  size?: "md" | "lg";
}

const Container: FC<PropsWithChildren<Props>> = ({
  size = "md",
  children,
  ...props
}) => {
  return (
    <div
      style={{
        maxWidth:
          size === "md" ? "1280px" : size === "lg" ? "1440px" : "1440px",
        margin: "0 auto",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
