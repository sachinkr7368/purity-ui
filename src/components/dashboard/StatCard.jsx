import React from "react";
import Card from "@/components/ui/Card";

const StatCard = ({
  icon: Icon,
  title,
  value,
  change,
  isPositive = true,
  iconBg = "bg-primary",
}) => {
  return (
    <Card>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[12px] text-gray-400 font-bold mb-1">{title}</p>
          <h3 className="text-[18px] font-bold text-gray-700 flex gap-1 items-center">
            {value}{" "}
            <span
              className={`flex items-center gap-1 text-xs font-bold ${
                isPositive ? "text-green-400" : "text-red-400"
              }`}
            >
              <span>{change}</span>
            </span>
          </h3>
        </div>
        <div
          className={`${iconBg} h-[45px] w-[45px] flex justify-center items-center rounded-xl`}
        >
          <Icon size={20} className="text-white" />
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
