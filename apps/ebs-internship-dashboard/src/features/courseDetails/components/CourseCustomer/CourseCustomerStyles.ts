import { createStyles } from "antd-style";

export const useCourseCustomerStyles = createStyles(({ token, css }) => {
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
