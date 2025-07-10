import { createStyles } from "antd-style";

export const useCouponDetailsStyles = createStyles(({ token, css }) => {
  return {
    couponContainer: css`
      width: 100%;
    `,
    backButton: css`
      &&.ant-btn {
        padding: 0px;
      }
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
      && .ant-pagination {
        display: flex;
        justify-content: center;
      }
    `,
    filter: css`
      align-self: flex-end;
    `,
    inputSearch: css`
      &&.ant-input-group-wrapper {
        width: 25%;
      }
    `,
  };
});
