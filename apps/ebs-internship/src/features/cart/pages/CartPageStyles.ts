import { createStyles } from "antd-style";

export const useCartPageStyles = createStyles(({ css, token }) => {
  return {
    divider: css`
      padding-bottom: 6px;
      border-bottom: 1px solid ${token.grey.grey300};
    `,

    listItem: css`
      &:not(:first-child) {
        margin-top: 16px;
      }
    `,
  };
});
