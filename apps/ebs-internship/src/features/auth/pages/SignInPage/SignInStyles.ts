import { createStyles } from "antd-style";

export const useSignInStyles = createStyles(({ css }) => {
  return {
    title: css`
      &&.ant-typography {
        text-align: center;
        margin-bottom: 16px !important;
      }
    `,
  };
});
