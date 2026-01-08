"use client";
import React from "react";
import Card from "@/components/ui/Card";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Wallet, Rocket, ShoppingCart, Wrench } from "lucide-react";

const data = [
  { name: "", value: 330 },
  { name: "", value: 250 },
  { name: "", value: 100 },
  { name: "", value: 300 },
  { name: "", value: 400 },
  { name: "", value: 200 },
  { name: "", value: 350 },
  { name: "", value: 210 },
  { name: "", value: 150 },
];

const ActiveUsersChart = () => {
  return (
    <Card className="h-full p-0 overflow-hidden">
      {" "}
      {/* Remove padding to allow chart to touch edges if needed */}{" "}
      {/* Chart Section - Dark Background */}
      <div className="bg-linear-to-b from-[#313860] to-[#151928] p-4 m-4 rounded-xl h-[260px]">
        {" "}
        {/* Increased height for axes */}
        <ResponsiveContainer width="100%" height={220}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: -20, bottom: 5 }}
          >
            {/* Hide grid lines but can add horizontal lines if needed - visual match only shows bars */}
            {/* <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" /> */}

            <YAxis
              tick={{ fill: "#fff", fontSize: 10, fontWeight: "bold" }}
              axisLine={false}
              tickLine={false}
              ticks={[0, 100, 200, 300, 400, 500]}
              domain={[0, 500]}
            />
            {/* Remove XAxis labels as they are not distinct in the screenshot, just bars */}
            <XAxis
              dataKey="name"
              tick={false}
              axisLine={false}
              tickLine={false}
            />

            <Bar
              dataKey="value"
              fill="#fff"
              radius={[20, 20, 20, 20]} // Fully rounded bars
              barSize={6}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* Stats Section - White Background (from Card) */}
      <div className="p-4 pt-0">
        <h3 className="font-bold text-lg mb-1 text-gray-700">Active Users</h3>
        <p className="text-sm font-mediumpu text-gray-400 mb-8">
          <span className="text-green-400 font-bold">(+23)</span> than last week
        </p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            {
              label: "Users",
              value: "32,984",
              progress: 60,
              icon: Wallet,
            },
            {
              label: "Clicks",
              value: "2,42m",
              progress: 80,
              icon: Rocket,
            },
            {
              label: "Sales",
              value: "2,400$",
              progress: 30,
              icon: ShoppingCart,
            },
            {
              label: "Items",
              value: "320",
              progress: 50,
              icon: Wrench,
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-bold">
                  <div className="p-1 bg-[#4FD1C5] rounded-md">
                    <Icon size={12} color="white" />
                  </div>{" "}
                  {item.label}
                </div>
                <p className="font-bold text-lg text-gray-700">{item.value}</p>
                <div className="h-0.5 w-full bg-gray-100 rounded-full mt-1">
                  <div
                    className="h-0.5 bg-[#4FD1C5] rounded-full"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default ActiveUsersChart;
