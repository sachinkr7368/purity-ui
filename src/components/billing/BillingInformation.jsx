import React, { memo } from "react";
import Card from "@/components/ui/Card";
import { Pencil, Trash } from "lucide-react";

const billingData = [
  {
    id: 1,
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    vat: "FRB1235476",
  },
  {
    id: 2,
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    vat: "FRB1235476",
  },
  {
    id: 3,
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    vat: "FRB1235476",
  },
];

const BillingInfoItem = memo(({ item }) => (
  <div className="flex justify-between items-start p-6.5 bg-gray-50 rounded-xl">
    <div>
      <h4 className="font-bold text-gray-500 text-sm mb-1">{item.name}</h4>
      <p className="text-xs text-gray-400">
        Company Name:{" "}
        <span className="text-gray-500 font-bold">{item.company}</span>
      </p>
      <p className="text-xs text-gray-400">
        Email Address:{" "}
        <span className="text-gray-500 font-bold">{item.email}</span>
      </p>
      <p className="text-xs text-gray-400">
        VAT Number: <span className="text-gray-500 font-bold">{item.vat}</span>
      </p>
    </div>
    <div className="flex gap-4">
      <button className="text-red-500 hover:text-red-600 transition-colors flex items-center gap-1 text-[10px] font-bold uppercase">
        <Trash size={14} className="mb-0.5" /> DELETE
      </button>
      <button className="text-gray-700 hover:text-gray-800 transition-colors flex items-center gap-1 text-[10px] font-bold uppercase">
        <Pencil size={12} className="mb-0.5" /> EDIT
      </button>
    </div>
  </div>
));
BillingInfoItem.displayName = "BillingInfoItem";

const BillingInformation = memo(() => {
  return (
    <Card className="h-full">
      <h3 className="font-bold text-gray-800 text-lg mb-4">
        Billing Information
      </h3>
      <div className="flex flex-col gap-4">
        {billingData.map((item) => (
          <BillingInfoItem key={item.id} item={item} />
        ))}
      </div>
    </Card>
  );
});
BillingInformation.displayName = "BillingInformation";

export default BillingInformation;
