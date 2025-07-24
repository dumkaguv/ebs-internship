import { createStyles } from "antd-style";

export const useUserDashboardStyles = createStyles(
  ({ token, css, responsive }) => {
    return {
      banner: css`
        max-width: 220px;
        width: 100%;
        &&.ant-flex {
          padding: 24px;
          background-color: ${token.grey.grey200};
        }

        && .ant-typography {
          margin: 0px;
        }

        ${responsive.xs} {
          max-width: 100%;
        }
      `,
      cardContainer: css`
        && .ant-card-body {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-width: 400px;
        }
        && .ant-typography {
          margin: 0px;
        }
      `,
    };
  }
);
