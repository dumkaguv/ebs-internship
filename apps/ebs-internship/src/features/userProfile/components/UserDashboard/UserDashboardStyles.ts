import { createStyles } from "antd-style";

export const useUserDashboardStyles = createStyles(({ token, css }) => {
  return {
    banner: css`
      width: 220px;
      &&.ant-flex {
        padding: 24px;
        background-color: ${token.grey.grey200};
      }

      && .ant-typography {
        margin: 0px;
      }
    `,
    cardContainer: css`
      && .ant-card-body {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 400px;
      }
      && .ant-typography {
        margin: 0px;
      }
    `,
  };
});
