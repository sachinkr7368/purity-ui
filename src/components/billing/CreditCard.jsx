import React, { memo } from "react";

const CreditCard = memo(() => {
  return (
    <div className="bg-linear-to-r from-[#313860] to-[#151928] rounded-xl p-5 text-white relative overflow-hidden h-[241px] min-h-[180px]">
      {/* Background pattern - arcs from top-left */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 241"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="0"
          cy="0"
          r="115"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          fill="none"
        />
        <circle
          cx="0"
          cy="0"
          r="210"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
          fill="none"
        />
        <circle
          cx="0"
          cy="0"
          r="305"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
          fill="none"
        />
        <circle
          cx="0"
          cy="0"
          r="400"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-[18px] font-bold mb-1">Purity UI</h3>
          </div>
          {/* Overlapping ellipses */}
          <svg
            width="50"
            height="33"
            viewBox="0 0 50 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="16"
              cy="16.5"
              rx="16"
              ry="16.5"
              fill="white"
              fillOpacity="0.5"
            />
            <ellipse
              cx="34"
              cy="16.5"
              rx="16"
              ry="16.5"
              fill="white"
              fillOpacity="0.3"
            />
          </svg>
        </div>

        <div className="mt-16">
          <div className="">
            <p className="text-xl font-bold tracking-widest">
              7812 2139 0823 XXXX
            </p>
          </div>

          <div className="flex justify-between items-end mt-3">
            <div className="flex gap-8">
              <div>
                <p className="text-[10px] uppercase opacity-70">Valid Thru</p>
                <p className="text-sm font-medium">05/24</p>
              </div>
              <div>
                <p className="text-[10px] uppercase opacity-70">CVV</p>
                <p className="text-sm font-medium">09X</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
CreditCard.displayName = "CreditCard";

export default CreditCard;
