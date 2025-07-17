import { createStyles } from "antd-style";

export const useSalesChartStyles = createStyles(({ css }) => {
  return {
    chartCard: css`
      width: 70%;
      && .recharts-responsive-container {
        padding-top: 20px;
      }
    `,
  };
});
