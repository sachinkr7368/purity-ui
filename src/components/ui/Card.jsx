import React from "react";

const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={`bg-white rounded-xl p-5 ${className || ""}`}
      style={{ boxShadow: "0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)" }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
