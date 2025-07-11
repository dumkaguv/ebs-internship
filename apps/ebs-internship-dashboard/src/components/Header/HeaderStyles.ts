import { createStyles } from "antd-style";

export const useHeaderStyles = createStyles(({ css }) => {
  return {
    title: css`
      text-transform: capitalize;
    `,
  };
});
