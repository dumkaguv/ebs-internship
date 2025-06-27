import { createStyles } from "antd-style";

export const useDashboardCoursesStyles = createStyles(({ token, css }) => {
  return {
    courseContainer: css`
      background-color: #fff;
      border-radius: ${token.borderRadiusSM}px;
      box-shadow: ${token.boxShadow};
      &&.ant-flex {
        padding: 16px;
      }
      max-width: 400px;
    `,

    courseTitle: css`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
    `,

    courseLink: css`
      transition: transform 0.4s ease;

      &:hover {
        transform: scale(1.03);
      }
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
