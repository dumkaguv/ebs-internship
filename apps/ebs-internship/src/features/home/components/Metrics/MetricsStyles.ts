import { createStyles } from "antd-style";

export const useMetricsStyles = createStyles(({ token, css }) => {
  return {
    metrics: css`
      background-color: ${token.grey.grey100};
      color: ${token.grey.grey900};
    `,

    metricsList: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0;
    `,

    metricsCount: css`
      font-size: 32px;
      font-weight: 600;
    `,

    metricsDescription: css`
      font-size: 14px;
      margin-bottom: 0;
    `,
  };
});
