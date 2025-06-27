import { createStyles } from "antd-style";

export const useStepContentStyles = createStyles(({ css, token }) => {
  return {
    header: css`
      &&.ant-flex {
        border-bottom: 1px ${token.grey.grey200} solid;
        padding-bottom: 12px;
      }
    `,
  };
});
