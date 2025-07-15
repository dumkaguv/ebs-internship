import { createStyles } from "antd-style";

export const useCourseInstructorsStyles = createStyles(({ token, css }) => {
  return {
    instructors: css`
      max-width: 840px;
      && .ant-typography {
        margin: 0px;
      }
    `,

    authorCard: css`
      border: 1px solid ${token.grey.grey100};
      &&.ant-flex {
        padding: 30px;
      }
    `,

    authorLink: css`
      font-size: 20px;
      font-weight: 600;
    `,
    authorInfo: css`
      display: flex;
      align-items: center;
      gap: 8px;
    `,
  };
});
