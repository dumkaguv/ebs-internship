import { createStyles } from "antd-style";

export const useLogoStyles = createStyles(({ token, css }) => {
  return {
    title: css`
      &&.ant-typography {
        font-size: 16px;
        color: ${token.grey.grey300};
        font-weight: 500;
      }
    `,
  };
});
