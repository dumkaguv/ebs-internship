import { createStyles } from "antd-style";

export const useCourseCardStyles = createStyles(({ token, css }) => {
  return {
    coursesContainer: css`
      width: 100%;
    `,

    courseCard: css`
      max-width: 400px;
    `,
    courseTitle: css`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
    `,

    customParagraph: css`
      background-color: ${token.grey.grey200};
      &&.ant-typography {
        font-size: 12px;
      }
      padding: 8px;
      border-radius: ${token.borderRadiusSM}px;
    `,

    line: css`
      margin: 8px 0;
      border-bottom: 1px solid ${token.grey.grey300};
    `,

    statsContainer: css`
      flex: 1 1 calc(33.333% - 16px);
    `,
  };
});
