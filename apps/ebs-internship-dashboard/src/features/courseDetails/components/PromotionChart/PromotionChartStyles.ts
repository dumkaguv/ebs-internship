import { createStyles } from "antd-style";

export const usePromotionChartStyles = createStyles(({ token, css }) => {
  return {
    period: css`
      && .ant-typography {
        margin: 0px;
      }
    `,

    lastPeriod: css`
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #00c9a7;
    `,
    chosenPeriod: css`
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #2f54eb;
    `,
  };
});
