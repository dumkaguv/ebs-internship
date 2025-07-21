import { createStyles } from "antd-style";

export const useCourseDescriptionStyles = createStyles(
  ({ responsive, css }) => {
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

        ${responsive.sm} {
          && .ant-list-item .ant-flex {
            font-size: 14px;
          }
        }
      `,
      descriptionParagraph: css`
        ${responsive.sm} {
          &&.ant-typography {
            font-size: 14px;
          }
        }
      `,
    };
  }
);
