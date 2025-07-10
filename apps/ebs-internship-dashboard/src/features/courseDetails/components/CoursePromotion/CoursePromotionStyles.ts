import { createStyles } from "antd-style";

export const useCoursePromotionStyles = createStyles(({ token, css }) => {
  return {
    couponContainer: css`
      width: 100%;
    `,
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
    filter: css`
      align-self: flex-end;
    `,
  };
});
