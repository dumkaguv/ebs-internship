import { FC, HTMLAttributes, PropsWithChildren } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

const Container: FC<PropsWithChildren<Props>> = ({ children, ...props }) => {
  return (
    <div
      style={{ maxWidth: "1280px", margin: "0 auto" }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
