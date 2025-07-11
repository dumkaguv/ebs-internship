import { createStyles } from "antd-style";

export const useSignUpPageStyles = createStyles(({ css }) => {
  return {
    title: css`
      &&.ant-typography {
        text-align: center;
        margin-bottom: 16px !important;
      }
    `,
  };
});
