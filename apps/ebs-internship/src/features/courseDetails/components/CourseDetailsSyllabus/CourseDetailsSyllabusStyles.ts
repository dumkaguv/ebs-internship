import { createStyles } from "antd-style";

export const useCourseDetailsSyllabusStyles = createStyles(({ token, css }) => {
  return {
    syllabusContainer: css`
      display: flex;
      flex-direction: column;
      gap: 16px;
    `,
    collapseItems: css`
      max-width: 840px;
      padding: ${token.paddingLG}px;
      &&.ant-collapse {
        background-color: ${token.colorWhite};
        border: 1px solid ${token.grey.grey300};
      }
    `,
    contentContainer: css`
      padding: ${token.paddingSM}px !important;
      &:hover {
        border: 1px solid ${token.grey.grey300};
        border-radius: ${token.borderRadius}px;
      }
    `,
    itemDuration: css`
      display: flex;
      align-items: center;
      gap: 8px;
    `,
  };
});
