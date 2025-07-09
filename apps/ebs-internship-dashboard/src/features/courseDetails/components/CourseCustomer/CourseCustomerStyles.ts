import { createStyles } from "antd-style";

export const useCourseCustomerStyles = createStyles(({ token, css }) => {
  return {
    table: css`
      &&.ant-table-row,
      .ant-table-cell {
        font-size: 14px;
      }
      && .ant-pagination {
        display: flex;
        justify-content: center;
      }
    `,
  };
});
