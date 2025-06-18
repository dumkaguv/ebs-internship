import { createStyles } from "antd-style";

export const useCourseDetailsInformationStyles = createStyles(
  ({ token, css }) => {
    return {
      infoContainer: css`
        max-width: 1280px;
        padding-block: 40px 0;
        margin: 0 auto;
      `,

      activeButton: css`
        &&.ant-btn {
          background-color: #eff6ff;
          max-width: 148px;
          width: 100%;
          height: auto;
          padding: 18px 21px;
          border: 0;
          &&.ant-btn:hover {
            background-color: #eff6ff;
          }
        }
      `,

      defaultButton: css`
        &&.ant-btn {
          padding: 18px 21px;
          border-radius: 8px;
          background-color: #fff;
          max-width: 148px;
          width: 100%;
          height: auto;

          &&.ant-btn:hover {
            border: 0;
            outline: 0;
            background-color: #eff6ff;
          }
        }
      `,

      line: css`
        max-width: 840px;
        width: 100%;
        border-bottom: 1px solid #e2e8f0;
        margin: 25px 0;
      `,

      descriptionContainer: css`
        max-width: 840px;
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
  }
);
