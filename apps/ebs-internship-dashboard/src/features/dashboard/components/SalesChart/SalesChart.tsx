import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, Typography } from "antd";
import { useSalesChartStyles } from "./SalesChartStyles";

type SalesData = {
  month: string;
  salesA: number;
  salesB: number;
  salesC: number;
};

const data: SalesData[] = [
  { month: "1", salesA: 0, salesB: 0, salesC: 0 },
  { month: "2", salesA: 200, salesB: 150, salesC: 40 },
  { month: "3", salesA: 300, salesB: 170, salesC: 60 },
  { month: "4", salesA: 400, salesB: 190, salesC: 80 },
  { month: "5", salesA: 700, salesB: 240, salesC: 150 },
  { month: "6", salesA: 500, salesB: 230, salesC: 140 },
  { month: "7", salesA: 500, salesB: 200, salesC: 130 },
  { month: "8", salesA: 700, salesB: 350, salesC: 180 },
  { month: "9", salesA: 1000, salesB: 500, salesC: 200 },
  { month: "10", salesA: 800, salesB: 410, salesC: 190 },
  { month: "11", salesA: 1100, salesB: 700, salesC: 250 },
  { month: "12", salesA: 1600, salesB: 800, salesC: 260 },
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
        width="100%"
        height="90%"
      >
        <AreaChart
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient
              id="colorA"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#8884d8"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="#8884d8"
                stopOpacity={0}
              />
            </linearGradient>
            <linearGradient
              id="colorB"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#82ca9d"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="#82ca9d"
                stopOpacity={0}
              />
            </linearGradient>
            <linearGradient
              id="colorC"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#ffc658"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="#ffc658"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="month"
            padding={{ left: 30, right: 30 }}
            axisLine={{ fill: "#E2E8F0" }}
          />
          <YAxis
            tickFormatter={(value) => value.toFixed(2)}
            axisLine={false}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="salesA"
            stroke="#8884d8"
            fill="url(#colorA)"
          />
          <Area
            type="monotone"
            dataKey="salesB"
            stroke="#82ca9d"
            fill="url(#colorB)"
          />
          <Area
            type="monotone"
            dataKey="salesC"
            stroke="#ffc658"
            fill="url(#colorC)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};
