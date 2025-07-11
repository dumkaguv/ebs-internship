import { createStyles } from "antd-style";

export const useSortStyles = createStyles(({ token, css }) => {
  return {
    buttonSort: css`
      && {
        border-color: ${token.grey.grey900};
      }
    `,
  };
});
