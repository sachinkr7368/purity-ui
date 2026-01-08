import React, { memo } from "react";
import Card from "@/components/ui/Card";
import { FileText } from "lucide-react";

const invoices = [
  { id: 1, date: "March, 01, 2020", code: "#MS-415646", amount: "$180" },
  { id: 2, date: "February, 10, 2021", code: "#RV-126749", amount: "$250" },
  { id: 3, date: "April, 05, 2020", code: "#FB-212562", amount: "$560" },
  { id: 4, date: "June, 25, 2019", code: "#QW-103578", amount: "$120" },
  { id: 5, date: "March, 01, 2019", code: "#AR-803481", amount: "$300" },
];

const InvoiceRow = memo(({ invoice }) => (
  <div className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
    <div>
      <p className="text-sm font-bold text-gray-700">{invoice.date}</p>
      <p className="text-xs text-gray-400">{invoice.code}</p>
    </div>
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-gray-400">
        {invoice.amount}
      </span>
      <button className="text-gray-700 hover:text-gray-800 transition-colors flex items-center gap-1 text-[10px] font-bold uppercase">
        <FileText size={12} /> PDF
      </button>
    </div>
  </div>
));
InvoiceRow.displayName = "InvoiceRow";

const Invoices = memo(() => {
  return (
    <Card className="h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-800">Invoices</h3>
        <button className="border border-[#4FD1C5] text-[#4FD1C5] text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase hover:bg-[#F0FDFA] transition-colors">
          View all
        </button>
      </div>
      <div>
        {invoices.map((invoice) => (
          <InvoiceRow key={invoice.id} invoice={invoice} />
        ))}
      </div>
    </Card>
  );
});
Invoices.displayName = "Invoices";

export default Invoices;
