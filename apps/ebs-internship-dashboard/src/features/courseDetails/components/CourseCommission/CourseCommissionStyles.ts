import { createStyles } from "antd-style";

export const useCourseCommissionStyles = createStyles(({ token, css }) => {
  return {
    table: css`
      width: 100%;

      && .ant-pagination {
        display: flex;
        justify-content: center;
      }
    `,
  };
});
