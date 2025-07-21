import { createStyles } from "antd-style";

export const useMentorInformationStyles = createStyles(
  ({ css, responsive }) => {
    return {
      informationContainer: css`
        padding: 40px 0;
        display: flex;
        justify-content: space-between;
        gap: 16px;
        ${responsive.sm} {
          flex-direction: column;
        }
      `,
      firstSide: css`
        width: 60%;
        ${responsive.sm} {
          width: 100%;
        }
      `,

      mentorDescription: css`
        &&.ant-flex {
          padding-top: 40px;
        }
      `,
      buttonContainer: css`
        width: 100%;
        ${responsive.sm} {
          width: 50%;
        }
      `,
    };
  }
);
