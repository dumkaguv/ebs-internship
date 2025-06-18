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
        color: "#16A34A" !important;
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
      height: 100%;
      border-radius: 8px;
      object-fit: cover;
    `,

    customButtonAdd: css`
      &&.ant-btn {
        margin-bottom: 16px;
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
        margin-bottom: 16px;
        background-color: ${token.colorBgContainer};
        &&.ant-btn:hover {
          background-color: ${token.colorFillSecondary};
          border-color: ${token.colorFillSecondary};
        }
      }
    `,
  };
});
