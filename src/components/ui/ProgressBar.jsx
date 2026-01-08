import React from "react";

const ProgressBar = ({ value }) => {
  return (
    <div className="flex items-center gap-2 w-full">
      <span className="text-[#4FD1C5] font-bold text-xs min-w-[32px]">
        {value}%
      </span>
      <div className="flex-1 bg-gray-100 rounded-full h-1">
        <div
          className="bg-[#4FD1C5] h-1 rounded-full transition-all"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
