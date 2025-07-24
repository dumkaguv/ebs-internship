import { createStyles } from "antd-style";

export const useMetricsStyles = createStyles(({ token, css, responsive }) => {
  return {
    metrics: css`
      background-color: ${token.grey.grey100};
      color: ${token.grey.grey900};
    `,

    metricsList: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 24px;
      margin-bottom: 0;

      ${responsive.lg} {
        flex-direction: column;
      }
    `,

    metricsCount: css`
      font-size: 32px;
      font-weight: 600;
    `,

    metricsDescription: css`
      font-size: 14px;
      margin-bottom: 0;
    `,

    divider: css`
      && {
        height: 55px;
        align-self: center;
      }
    `,
  };
});
