import React from "react";
import DashboardNavbar from "@/components/layout/DashboardNavbar";
import CreditCard from "@/components/billing/CreditCard";
import PaymentStats from "@/components/billing/PaymentStats";
import PaymentMethod from "@/components/billing/PaymentMethod";
import BillingInformation from "@/components/billing/BillingInformation";
import Invoices from "@/components/billing/Invoices";
import Transactions from "@/components/billing/Transactions";

export default function BillingPage() {
  return (
    <>
      <DashboardNavbar pageName="Billing" parentName="Pages" />

      {/* Main Billing Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Left Column: Credit Card, Stats, Payment Method */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Top Row: Credit Card & Stats */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="w-full">
              <CreditCard />
            </div>
            <div className="w-full">
              <PaymentStats />
            </div>
          </div>

          {/* Payment Method */}
          <PaymentMethod />
        </div>

        {/* Right Column: Invoices */}
        <div className="lg:col-span-1">
          <Invoices />
        </div>
      </div>

      {/* Bottom Row: Billing Info & Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          <BillingInformation />
        </div>
        <div className="lg:col-span-1">
          <Transactions />
        </div>
      </div>
    </>
  );
}
