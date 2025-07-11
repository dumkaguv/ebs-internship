import { createStyles } from "antd-style";

export const useMainLayoutStyles = createStyles(({ css }) => {
  return {
    layout: css`
      padding: 16px;
      gap: 16px;
    `,
  };
});
