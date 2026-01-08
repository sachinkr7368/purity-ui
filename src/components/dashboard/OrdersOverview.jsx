import React, { memo } from "react";
import Card from "@/components/ui/Card";
import {
  Bell,
  FileText,
  ShoppingCart,
  CreditCard,
  Key,
  AppWindow,
} from "lucide-react";

const ordersData = [
  {
    id: 1,
    title: "$2400, Design changes",
    date: "22 DEC 7:20 PM",
    icon: Bell,
    color: "text-teal-300",
    isLast: false,
  },
  {
    id: 2,
    title: "New order #4219423",
    date: "21 DEC 11:21 PM",
    icon: FileText,
    color: "text-red-500",
    isLast: false,
  },
  {
    id: 3,
    title: "Server Payments for April",
    date: "21 DEC 9:28 PM",
    icon: ShoppingCart,
    color: "text-blue-500",
    isLast: false,
  },
  {
    id: 4,
    title: "New card added for order #3210145",
    date: "20 DEC 3:52 PM",
    icon: CreditCard,
    color: "text-orange-500",
    isLast: false,
  },
  {
    id: 5,
    title: "Unlock packages for Development",
    date: "19 DEC 11:35 PM",
    icon: Key,
    color: "text-purple-500",
    isLast: false,
  },
  {
    id: 6,
    title: "New order #9851258",
    date: "18 DEC 4:41 PM",
    icon: AppWindow, // Placeholder for XD
    color: "text-pink-500",
    isLast: true,
  },
];

const OrderItem = memo(({ order }) => {
  const Icon = order.icon;
  return (
    <div className="flex gap-4 relative">
      <div className="flex flex-col items-center">
        <Icon size={16} className={order.color} />
        {!order.isLast && (
          <div className="w-[2px] bg-gray-200 flex-1 my-1"></div>
        )}
      </div>
      <div className="pb-6">
        <h6 className="text-sm font-bold text-gray-700 leading-none mb-1">
          {order.title}
        </h6>
        <span className="text-xs font-bold text-gray-400">{order.date}</span>
      </div>
    </div>
  );
});
OrderItem.displayName = "OrderItem";

const OrdersOverview = memo(() => {
  return (
    <Card className="h-full">
      <div className="mb-6">
        <h3 className="font-bold text-lg text-gray-800">Orders overview</h3>
        <p className="text-sm text-gray-400">
          <span className="text-green-400 font-bold">+30%</span> this month
        </p>
      </div>
      <div>
        {ordersData.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </Card>
  );
});
OrdersOverview.displayName = "OrdersOverview";

export default OrdersOverview;
