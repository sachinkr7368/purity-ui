"use client";
import React from "react";
import Card from "@/components/ui/Card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value1: 50, value2: 500 },
  { name: "Feb", value1: 40, value2: 180 },
  { name: "Mar", value1: 300, value2: 150 },
  { name: "Apr", value1: 320, value2: 270 },
  { name: "May", value1: 500, value2: 210 },
  { name: "Jun", value1: 350, value2: 250 },
  { name: "Jul", value1: 200, value2: 230 },
  { name: "Aug", value1: 230, value2: 180 },
  { name: "Sep", value1: 500, value2: 120 },
  { name: "Oct", value1: 400, value2: 130 },
  { name: "Nov", value1: 350, value2: 160 },
  { name: "Dec", value1: 400, value2: 130 },
];

const SalesOverviewChart = () => {
  return (
    <Card className="h-full flex flex-col justify-between">
      <div className="mb-4">
        <h3 className="font-bold text-lg text-gray-800">Sales overview</h3>
        <p className="text-sm text-gray-400">
          <span className="text-green-400 font-bold">(+5) more</span> in 2021
        </p>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4FD1C5" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4FD1C5" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2D3748" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#2D3748" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E2E8F0"
            />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 10, fill: "#A0AEC0" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 10, fill: "#A0AEC0" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value1"
              stroke="#4FD1C5"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorValue1)"
            />
            <Area
              type="monotone"
              dataKey="value2"
              stroke="#2D3748"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorValue2)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default SalesOverviewChart;
