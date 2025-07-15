import { createStyles } from "antd-style";

export const useCourseChaptersStyles = createStyles(({ token, css }) => {
  return {
    table: css`
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
