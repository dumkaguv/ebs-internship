import { createStyles } from "antd-style";

export const useCartItemStyles = createStyles(({ token, css }) => {
  return {
    itemCard: css`
      display: flex;
      gap: 8px;
      padding: 16px 24px 16px 16px;
      border-radius: ${token.borderRadius}px;
      background-color: ${token.colorWhite};
      border: 1px solid ${token.grey.grey300};
    `,
  };
});
