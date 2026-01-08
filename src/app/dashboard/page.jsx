"use client";
import React from "react";
import DashboardNavbar from "@/components/layout/DashboardNavbar";
import StatCard from "@/components/dashboard/StatCard";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import RocketsCard from "@/components/dashboard/RocketsCard";
import ActiveUsersChart from "@/components/dashboard/ActiveUsersChart";
import SalesOverviewChart from "@/components/dashboard/SalesOverviewChart";
import Projects from "@/components/dashboard/Projects";
import OrdersOverview from "@/components/dashboard/OrdersOverview";
import { Wallet, Globe, FileText, ShoppingCart } from "lucide-react";

export default function DashboardPage() {
  return (
    <>
      <DashboardNavbar pageName="Dashboard" parentName="Pages" />

      <div className="flex flex-col gap-6 mt-8">
        {/* Row 1: Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={Wallet}
            title="Today's Money"
            value="$53,000"
            change="+55%"
            isPositive={true}
            iconBg="bg-primary"
          />
          <StatCard
            icon={Globe}
            title="Today's Users"
            value="2,300"
            change="+3%"
            isPositive={true}
            iconBg="bg-primary"
          />
          <StatCard
            icon={FileText}
            title="New Clients"
            value="+3,052"
            change="-2%"
            isPositive={false}
            iconBg="bg-primary"
          />
          <StatCard
            icon={ShoppingCart}
            title="Total Sales"
            value="$173,000"
            change="+8%"
            isPositive={true}
            iconBg="bg-primary"
          />
        </div>

        {/* Row 2: Welcome & Rockets */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 min-h-[291px]">
          <div className="lg:col-span-4 h-full">
            <WelcomeCard />
          </div>
          <div className="lg:col-span-3 h-full">
            <RocketsCard />
          </div>
        </div>

        {/* Row 3: Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 h-full">
            <ActiveUsersChart />
          </div>
          <div className="lg:col-span-3 h-full">
            <SalesOverviewChart />
          </div>
        </div>

        {/* Row 4: Projects & Orders */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Projects />
          </div>
          <div className="lg:col-span-1">
            <OrdersOverview />
          </div>
        </div>
      </div>
    </>
  );
}
