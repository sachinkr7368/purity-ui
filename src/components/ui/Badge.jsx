import React from "react";

const Badge = ({ status, className }) => {
  const isOnline = status === "Online";
  const bgClass = isOnline ? "bg-green-400" : "bg-gray-300";

  return (
    <span
      className={`${bgClass} text-white text-[10px] font-bold px-3 py-1 rounded-md ${
        className || ""
      }`}
    >
      {status}
    </span>
  );
};

export default Badge;
