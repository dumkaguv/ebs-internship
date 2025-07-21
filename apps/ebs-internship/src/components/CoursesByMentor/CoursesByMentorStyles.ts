import { createStyles } from "antd-style";

export const useCoursesByMentorStyles = createStyles(({ token, css }) => {
  return {
    fullContainer: css`
      width: 100%;
      background-color: ${token.grey.grey100};
    `,
    coursesContainer: css`
      display: flex;
      flex-direction: column;
      padding: 40px 0;
      gap: 20px;
    `,
    button: css`
      &&.ant-btn {
        color: #fff;
        background: ${token.grey.grey400};
        padding: 10px 16px;
      }
    `,
    carrousel: css`
      display: flex;
      gap: 16px;
      overflow-x: auto;
      scroll-behavior: smooth;
      scrollbar-width: none;
    `,

    cardContainer: css`
      flex: 0 0 auto;
      width: 280px;
    `,
  };
});
