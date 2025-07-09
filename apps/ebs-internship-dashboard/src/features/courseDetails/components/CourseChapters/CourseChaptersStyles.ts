import { createStyles } from "antd-style";

export const useCourseChaptersStyles = createStyles(({ token, css }) => {
  return {
    table: css`
      &&.ant-table-row,
      .ant-table-cell {
        font-size: 14px;
      }
      && .ant-typography {
        margin: 0px;
        font-size: 14px;
      }
      && .ant-pagination {
        display: flex;
        justify-content: center;
      }
    `,
  };
});
