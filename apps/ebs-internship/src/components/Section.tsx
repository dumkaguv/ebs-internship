import { FC, HTMLAttributes, PropsWithChildren } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

const Section: FC<PropsWithChildren<Props>> = ({ children, ...props }) => {
  return (
    <section
      style={{ marginBlock: "60px", paddingBlock: "40px" }}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
