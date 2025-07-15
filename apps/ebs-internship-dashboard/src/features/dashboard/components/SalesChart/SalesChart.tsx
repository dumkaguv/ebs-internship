import {
  XAxis,
  YAxis,
  Tooltip,
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";
import { Card, Typography } from "antd";
import { useSalesChartStyles } from "./SalesChartStyles";

const data = [
  { month: 1, first: 0, second: 0, third: 0 },
  { month: 2, first: 100, second: 80, third: 30 },
  { month: 3, first: 200, second: 100, third: 60 },
  { month: 4, first: 350, second: 320, third: 100 },
  { month: 5, first: 400, second: 320, third: 130 },
  { month: 6, first: 380, second: 300, third: 110 },
  { month: 7, first: 500, second: 400, third: 120 },
  { month: 8, first: 700, second: 600, third: 140 },
  { month: 9, first: 600, second: 500, third: 190 },
  { month: 10, first: 800, second: 700, third: 160 },
  { month: 11, first: 950, second: 850, third: 200 },
  { month: 12, first: 1000, second: 900, third: 270 },
];

export const SalesChart = () => {
  const { styles } = useSalesChartStyles();

  return (
    <Card
      variant="borderless"
      className={styles.chartCard}
    >
      <Typography.Title level={4}>Life Time Sales</Typography.Title>
      <ResponsiveContainer
        width={"100%"}
        height={"90%"}
      >
        <AreaChart data={data}>
          <defs>
            <linearGradient
              id="colorFirst"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#165DFF"
                stopOpacity={0.2}
              />
              <stop
                offset="100%"
                stopColor="#165DFF"
                stopOpacity={0}
              />
            </linearGradient>
            <linearGradient
              id="colorSecond"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#3BB346"
                stopOpacity={0.2}
              />
              <stop
                offset="100%"
                stopColor="#3BB346"
                stopOpacity={0}
              />
            </linearGradient>
            <linearGradient
              id="colorThird"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#F5A524"
                stopOpacity={0.2}
              />
              <stop
                offset="100%"
                stopColor="#F5A524"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="month"
            tick={{ fill: "#334155" }}
            axisLine={{ stroke: "#C9CDD4" }}
            tickLine={false}
            padding={{ left: 50, right: 50 }}
          />
          <YAxis
            ticks={[0, "200.00", "400.00", "600.00", "800.00", "1000.00"]}
            tick={{ fill: "#334155" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Area
            dataKey="first"
            stroke="#165DFF"
            fill="url(#colorFirst)"
            strokeWidth={2}
          />
          <Area
            dataKey="second"
            stroke="#27AE60"
            fill="url(#colorSecond)"
            strokeWidth={2}
          />
          <Area
            dataKey="third"
            stroke="#F5A524"
            fill="url(#colorThird)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};
