import { createStyles } from "antd-style";

export const useCourseDetailsSyllabusStyles = createStyles(
  ({ token, css, responsive }) => {
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
        && .ant-typography {
          ${responsive.xs} {
            max-width: 150px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: inline-block;
            font-size: 16px;
          }
        }
      `,
      contentContainer: css`
        padding: 10px !important;
        border: 1px solid transparent;
        &:hover {
          border: 1px solid ${token.grey.grey300};
          border-radius: ${token.borderRadius}px;
        }
        && .ant-typography {
          margin: 0px;
          ${responsive.sm} {
            font-size: 14px;
          }
        }
      `,
      itemDuration: css`
        display: flex;
        align-items: center;
        gap: 8px;
      `,
    };
  }
);
