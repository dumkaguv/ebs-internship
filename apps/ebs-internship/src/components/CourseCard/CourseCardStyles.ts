import { createStyles } from "antd-style";

export const useCourseCardStyles = createStyles(({ token, css }) => {
  return {
    courseCardAuthor: css`
      && {
        font-size: 14px;
        color: ${token.grey.grey700};
      }
    `,

    courseCardDetails: css`
      && {
        color: ${token.grey.grey700};
      }
    `,
  };
});
