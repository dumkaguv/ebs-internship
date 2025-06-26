import { createStyles } from "antd-style";

export const useDashboardMainStyles = createStyles(({ token, css }) => {
  return {
    mainContainer: css`
      display: flex;
      width: 100%;
      max-width: 1300px;
      &&.ant-flex {
        padding: 16px;
      }
    `,
  };
});
