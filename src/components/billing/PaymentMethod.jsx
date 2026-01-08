"use client";
import React, { memo } from "react";
import Card from "@/components/ui/Card";
import { Pencil } from "lucide-react";

// Mastercard logo component
const MastercardIcon = () => (
  <svg
    width="21"
    height="14"
    viewBox="0 0 21 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7" cy="7" r="7" fill="#EB001B" />
    <circle cx="14" cy="7" r="7" fill="#F79E1B" />
  </svg>
);

// Visa logo component
const VisaIcon = () => (
  <svg
    width="35"
    height="12"
    viewBox="0 0 35 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="0"
      y="11"
      fill="#4318FF"
      fontSize="12"
      fontWeight="800"
      fontStyle="italic"
      fontFamily="Arial Black, Arial, sans-serif"
    >
      VISA
    </text>
  </svg>
);

const paymentMethods = [
  {
    id: 1,
    type: "mastercard",
    number: "7812 2139 0823 XXXX",
    icon: MastercardIcon,
  },
  { id: 2, type: "visa", number: "7812 2139 0823 XXXX", icon: VisaIcon },
];

const PaymentMethod = memo(() => {
  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-800">Payment Method</h3>
        <button
          className=" text-white text-[10px] font-bold px-4 py-2 rounded-lg uppercase hover:bg-gray-700 transition-colors"
          style={{
            background: "linear-gradient(90deg, #313860 0%, #151928 100%)",
          }}
        >
          Add a new card
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {paymentMethods.map((method) => {
          const IconComponent = method.icon;
          return (
            <div
              key={method.id}
              className="flex items-center justify-between p-4 border border-gray-100 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <IconComponent />
                <span className="text-sm font-medium text-gray-700">
                  {method.number}
                </span>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <Pencil size={14} />
              </button>
            </div>
          );
        })}
      </div>
    </Card>
  );
});
PaymentMethod.displayName = "PaymentMethod";

export default PaymentMethod;
