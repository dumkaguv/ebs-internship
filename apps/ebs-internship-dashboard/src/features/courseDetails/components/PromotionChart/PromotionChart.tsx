import { DatePicker, Flex, Select, Typography } from "antd";
import { useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";
import { usePromotionChartStyles } from "./PromotionChartStyles";
import dayjs from "dayjs";

const data = [
  { month: "Jan", current: 500, previous: 3500 },
  { month: "Feb", current: 2000, previous: 5000 },
  { month: "Mar", current: 1500, previous: 1000 },
  { month: "Apr", current: 4500, previous: 8100 },
  { month: "May", current: 1000, previous: 1900 },
  { month: "Jun", current: 1200, previous: 5000 },
  { month: "Jul", current: 8000, previous: 4500 },
  { month: "Aug", current: 2100, previous: 1800 },
  { month: "Sep", current: 4500, previous: 7500 },
  { month: "Oct", current: 1000, previous: 2500 },
  { month: "Nov", current: 7000, previous: 3500 },
  { month: "Dec", current: 4000, previous: 500 },
];

export const PromotionChart = () => {
  const [groupBy, setGroupBy] = useState("Daily");
  const { styles } = usePromotionChartStyles();

  return (
    <Flex
      vertical
      gap={8}
    >
      <Flex
        justify="space-between"
        align="center"
      >
        <Flex gap={20}>
          <DatePicker.RangePicker
            format="YYYY-MM-DD"
            defaultValue={[dayjs().subtract(7, "day"), dayjs()]}
          />
          <Select
            value={groupBy}
            onChange={setGroupBy}
          >
            <Select.Option value="Daily">Daily</Select.Option>
            <Select.Option value="Weekly">Weekly</Select.Option>
            <Select.Option value="Monthly">Monthly</Select.Option>
          </Select>
        </Flex>

        <Flex
          gap={20}
          className={styles.period}
        >
          <Flex
            align="center"
            gap={8}
          >
            <div className={styles.chosenPeriod} />
            <Typography.Paragraph>Chosen Period</Typography.Paragraph>
          </Flex>
          <Flex
            align="center"
            gap={8}
          >
            <div className={styles.lastPeriod} />
            <Typography.Paragraph>Last Period</Typography.Paragraph>
          </Flex>
        </Flex>
      </Flex>
      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <AreaChart data={data}>
          <defs>
            <linearGradient
              id="colorPrevious"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="rgba(59, 179, 70, 0.2)"
              />
              <stop
                offset="100%"
                stopColor="rgba(59, 179, 70, 0)"
              />
            </linearGradient>
            <linearGradient
              id="colorCurrent"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="rgba(22, 93, 255, 0.2)"
              />
              <stop
                offset="100%"
                stopColor="rgba(22, 93, 255, 0)"
              />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            padding={{ left: 100, right: 100 }}
            axisLine={{ stroke: "#C9CDD4" }}
            tickLine={false}
            tick={{ fill: "#86909C", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            ticks={[0, 2000, 4000, 6000, 8000, 10000]}
            tick={{ fill: "#86909C", fontSize: 12 }}
          />
          <CartesianGrid
            vertical={false}
            stroke="#E5E6EB"
            strokeDasharray="4 4"
          />
          <Tooltip />

          <Area
            dataKey="previous"
            stroke="#0FC6C2"
            strokeWidth={2}
            fill="url(#colorPrevious)"
            fillOpacity={1}
          />
          <Area
            dataKey="current"
            stroke="#165DFF"
            strokeWidth={2}
            fill="url(#colorCurrent)"
            fillOpacity={1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Flex>
  );
};
