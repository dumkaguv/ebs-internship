import { createStyles } from "antd-style";

export const useCourseDetailsHeroStyles = createStyles(({ token, css }) => {
  return {
    heroSection: css`
      background-color: #f8fafc;
      padding: 25px 0;
    `,

    heroContainer: css`
      display: flex;
      justify-content: space-between;
    `,

    leftSide: css`
      max-width: 60%;
      && .ant-typography {
        margin: 0px;
      }
    `,

    detailsContainer: css`
      && .ant-typography {
        font-size: 14px;
        color: ${token.grey.grey700};
      }

      a {
        font-size: 14px;
      }
    `,

    rateNumber: css`
      &&.ant-typography {
        font-size: 16px !important;
        color: #fec84b !important;
      }
    `,

    rate: css`
      && .ant-rate-star-full {
        font-size: 18px;
        margin: 0px !important;
      }
    `,

    line: css`
      border-right: 1px solid ${token.grey.grey700};
      height: 16px;
    `,

    globalIcon: css`
      font-size: 24px;
    `,

    rightSide: css`
      width: 30%;
    `,

    customCard: css`
      max-width: 385px;
      width: 30%;
      position: absolute !important;
    `,

    cardTitle: css`
      font-size: 24px;
      font-weight: 600;
      display: flex;
      gap: 13px;
      align-items: center;

      &&.ant-typography {
        padding: 25px 0;
      }
    `,
    rateText: css`
      &&.ant-typography {
        color: ${token.green5};
        font-size: 20px;
      }
    `,

    cardImg: css`
      width: 100%;
      height: 200px;
      border-radius: 8px;
      object-fit: cover;
    `,

    customButtonAdd: css`
      &&.ant-btn {
        background-color: black;
        color: white;
        &&.ant-btn:hover {
          background-color: #333;
          border-color: #333;
          color: white;
        }
      }
    `,

    customButtonBuy: css`
      &&.ant-btn {
        background-color: ${token.colorBgContainer};
        &&.ant-btn:hover {
          background-color: ${token.colorFillSecondary};
          border-color: ${token.colorFillSecondary};
        }
      }
    `,

    cardLine: css`
      border-top: 1px solid ${token.grey.grey300};
      margin: 24px 0px;
    `,
  };
});
