import React, { memo } from "react";
import Card from "@/components/ui/Card";
import WalletIcon from "../icons/WalletIcon";
import PaypalIcon from "../icons/PaypalIcon";

const PaymentStats = memo(() => {
  return (
    <div className="grid grid-cols-2 gap-4 h-[240px]">
      <Card className="flex flex-col items-center justify-center text-center min-h-[85px]">
        <div className="bg-primary p-3 rounded-xl mb-2">
          <WalletIcon className="h-6.5 w-6.5" />
        </div>
        <p className="text-base text-gray-700 font-bold uppercase mt-5.5">
          Salary
        </p>
        <p className="text-sm text-gray-400 font-bold">Belong Interactive</p>
        <hr className="w-full border-gray-200 my-2" />
        <p className="text-lg font-bold text-gray-700">+$2000</p>
      </Card>

      <Card className="flex flex-col items-center justify-center text-center min-h-[85px]">
        <div className="bg-primary p-3 rounded-xl mb-2">
          <PaypalIcon className="h-6.5 w-6.5" />
        </div>
        <p className="text-base text-gray-700 font-bold uppercase mt-5.5">
          Paypal
        </p>
        <p className="text-sm text-gray-400 font-bold">Freelance Payment</p>
        <hr className="w-full border-gray-200 my-2" />
        <p className="text-lg font-bold text-gray-700">$455.00</p>
      </Card>
    </div>
  );
});
PaymentStats.displayName = "PaymentStats";

export default PaymentStats;
