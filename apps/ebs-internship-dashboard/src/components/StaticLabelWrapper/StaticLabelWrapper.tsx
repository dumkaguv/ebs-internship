import { ReactNode } from "react";
import { useStaticLabelWrapperStyles } from "./StaticLabelWrapperStyles";

interface Props {
  label: string;
  id: string;
  children: ReactNode;
}

export const StaticLabelWrapper = ({ label, id, children, ...rest }: Props) => {
  const { styles } = useStaticLabelWrapperStyles();

  return (
    <div
      className={styles.wrapper}
      {...rest}
    >
      <label
        htmlFor={id}
        className={styles.label}
      >
        {label}
      </label>
      {children}
    </div>
  );
};
