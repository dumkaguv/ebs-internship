import { createStyles } from "antd-style";

export const useMentorInformationStyles = createStyles(({ css }) => {
  return {
    informationContainer: css`
      padding: 40px 0;
      display: flex;
      justify-content: space-between;
    `,
    firstSide: css`
      width: 60%;
    `,

    mentorDescription: css`
      &&.ant-flex {
        padding-top: 40px;
      }
    `,
    buttonContainer: css`
      width: 100%;
    `,
  };
});
