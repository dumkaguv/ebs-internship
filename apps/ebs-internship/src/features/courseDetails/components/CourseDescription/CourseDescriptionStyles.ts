import { createStyles } from "antd-style";

export const useCourseDescriptionStyles = createStyles(({ token, css }) => {
  return {
    descriptionContainer: css`
      max-width: 840px;
    `,
    listContainer: css`
      && .ant-list-items {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    `,
  };
});
