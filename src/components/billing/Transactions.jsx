import React, { memo } from "react";
import Card from "@/components/ui/Card";
import { Calendar, ArrowUp, ArrowDown, Minus } from "lucide-react";

const transactions = [
  {
    id: 1,
    name: "Netflix",
    date: "27 March 2020, at 12:30 PM",
    amount: "-$2500",
    type: "expense",
    category: "newest",
  },
  {
    id: 2,
    name: "Apple",
    date: "27 March 2020, at 12:30 PM",
    amount: "+$2500",
    type: "income",
    category: "newest",
  },
  {
    id: 3,
    name: "Stripe",
    date: "26 March 2020, at 12:45 PM",
    amount: "+$800",
    type: "income",
    category: "yesterday",
  },
  {
    id: 4,
    name: "HubSpot",
    date: "26 March 2020, at 12:30 PM",
    amount: "+$1700",
    type: "income",
    category: "yesterday",
  },
  {
    id: 5,
    name: "Webflow",
    date: "26 March 2020, at 05:00 AM",
    amount: "Pending",
    type: "pending",
    category: "yesterday",
  },
  {
    id: 6,
    name: "Microsoft",
    date: "25 March 2020, at 16:30 PM",
    amount: "-$987",
    type: "expense",
    category: "yesterday",
  },
];

const TransactionRow = memo(({ transaction }) => {
  const getIcon = () => {
    if (transaction.type === "income") return <ArrowUp size={12} />;
    if (transaction.type === "expense") return <ArrowDown size={12} />;
    return <Minus size={12} />;
  };

  const getColor = () => {
    if (transaction.type === "income")
      return "text-green-400 border border-green-400";
    if (transaction.type === "expense")
      return "text-red-400 border border-red-400";
    return "text-gray-400 border border-gray-400";
  };

  const getAmountColor = () => {
    if (transaction.type === "income") return "text-green-400";
    if (transaction.type === "expense") return "text-red-400";
    return "text-gray-700";
  };

  return (
    <div className="flex justify-between items-center py-3">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-full ${getColor()}`}>{getIcon()}</div>
        <div>
          <p className="text-[14px] font-bold text-gray-700">
            {transaction.name}
          </p>
          <p className="text-[12px] text-gray-400 font-bold">
            {transaction.date}
          </p>
        </div>
      </div>
      <span className={`text-sm font-bold ${getAmountColor()}`}>
        {transaction.amount}
      </span>
    </div>
  );
});
TransactionRow.displayName = "TransactionRow";

const Transactions = memo(() => {
  const newestTransactions = transactions.filter(
    (t) => t.category === "newest"
  );
  const yesterdayTransactions = transactions.filter(
    (t) => t.category === "yesterday"
  );

  return (
    <Card className="h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-700">Your Transactions</h3>
        <div className="flex items-center gap-1 text-xs text-gray-400 font-bold">
          <Calendar size={12} className="text-gray-700" />
          <span>23 - 30 March 2020</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">
          Newest
        </p>
        {newestTransactions.map((t) => (
          <TransactionRow key={t.id} transaction={t} />
        ))}
      </div>

      <div>
        <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">
          Yesterday
        </p>
        {yesterdayTransactions.map((t) => (
          <TransactionRow key={t.id} transaction={t} />
        ))}
      </div>
    </Card>
  );
});
Transactions.displayName = "Transactions";

export default Transactions;
