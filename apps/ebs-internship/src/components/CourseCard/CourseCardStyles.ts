import { createStyles } from "antd-style";

export const useCourseCardStyles = createStyles(({ token, css }) => {
  return {
    card: css`
      .ant-card-body {
        height: 230px !important;
      }
    `,

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

    image: css`
      object-fit: cover;
    `,
  };
});
