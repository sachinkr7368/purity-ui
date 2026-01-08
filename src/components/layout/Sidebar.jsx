"use client";
import React, { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  BarChart2,
  CreditCard,
  Wand2,
  User,
  KeyRound,
  Rocket,
  HelpCircle,
} from "lucide-react";
import PurityUIIcon from "@/components/icons/PurityUiIcon";

const SidebarLink = memo(({ href, icon: Icon, label, isActive }) => {
  return (
    <Link href={href} className="w-full block">
      <div
        className={`
        flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 w-full
        ${isActive ? "bg-white shadow-sm" : "hover:bg-white/50"}
      `}
      >
        <div
          className={`p-2 rounded-xl ${
            isActive
              ? "bg-[#4FD1C5] text-white"
              : "bg-white text-[#4FD1C5] shadow-sm"
          }`}
        >
          <Icon size={12} strokeWidth={2.5} />
        </div>
        <span
          className={`text-xs font-bold ${
            isActive ? "text-gray-700" : "text-gray-400"
          }`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
});
SidebarLink.displayName = "SidebarLink";

const Sidebar = memo(() => {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  return (
    <aside className="w-[260px] min-w-[260px] h-screen overflow-y-auto flex flex-col py-6 px-5">
      {/* Brand */}
      <div className="flex items-center gap-2.5 mb-8 pl-2">
        <PurityUIIcon size={22} color="#2D3748" />
        <span className="font-bold text-[13px] uppercase text-gray-700 tracking-wide">
          Purity UI Dashboard
        </span>
      </div>

      <hr className="border-gray-100 mb-5" />

      <div className="flex flex-col gap-1">
        <SidebarLink
          href="/dashboard"
          icon={Home}
          label="Dashboard"
          isActive={isActive("/dashboard")}
        />
        <SidebarLink
          href="/tables"
          icon={BarChart2}
          label="Tables"
          isActive={isActive("/tables")}
        />
        <SidebarLink
          href="/billing"
          icon={CreditCard}
          label="Billing"
          isActive={isActive("/billing")}
        />
        <SidebarLink
          href="/rtl"
          icon={Wand2}
          label="RTL"
          isActive={isActive("/rtl")}
        />
      </div>

      <div className="text-[10px] font-bold text-gray-700 uppercase mt-6 mb-3 pl-3 tracking-wider">
        Account Pages
      </div>
      <div className="flex flex-col gap-1">
        <SidebarLink
          href="/profile"
          icon={User}
          label="Profile"
          isActive={isActive("/profile")}
        />
        <SidebarLink
          href="/auth/signin"
          icon={KeyRound}
          label="Sign In"
          isActive={false}
        />
        <SidebarLink
          href="/auth/signup"
          icon={Rocket}
          label="Sign Up"
          isActive={false}
        />
      </div>

      {/* Help Card */}
      <div className="mt-18">
        <div className="relative overflow-hidden rounded-2xl p-4 bg-[#4FD1C5]">
          {/* Decorative arcs from bottom-right corner */}
          <svg
            className="absolute bottom-0 right-0 w-48 h-48"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="200"
              cy="200"
              r="40"
              stroke="white"
              strokeOpacity="0.35"
              strokeWidth="1"
              fill="none"
            />
            <circle
              cx="200"
              cy="200"
              r="60"
              stroke="white"
              strokeOpacity="0.32"
              strokeWidth="1"
              fill="none"
            />
            <circle
              cx="200"
              cy="200"
              r="80"
              stroke="white"
              strokeOpacity="0.28"
              strokeWidth="1"
              fill="none"
            />
            <circle
              cx="200"
              cy="200"
              r="100"
              stroke="white"
              strokeOpacity="0.24"
              strokeWidth="1"
              fill="none"
            />
            <circle
              cx="200"
              cy="200"
              r="120"
              stroke="white"
              strokeOpacity="0.2"
              strokeWidth="1"
              fill="none"
            />
            <circle
              cx="200"
              cy="200"
              r="140"
              stroke="white"
              strokeOpacity="0.16"
              strokeWidth="1"
              fill="none"
            />
            <circle
              cx="200"
              cy="200"
              r="160"
              stroke="white"
              strokeOpacity="0.12"
              strokeWidth="1"
              fill="none"
            />
            <circle
              cx="200"
              cy="200"
              r="180"
              stroke="white"
              strokeOpacity="0.1"
              strokeWidth="1"
              fill="none"
            />
          </svg>
          <div className="relative z-10 flex flex-col items-start text-white">
            <div className="bg-white p-2 rounded-xl mb-3">
              <HelpCircle size={16} className="text-[#4FD1C5]" />
            </div>
            <h4 className="font-bold text-sm mb-0.5">Need help?</h4>
            <p className="text-[11px] font-medium mb-4 opacity-80">
              Please check our docs
            </p>
            <button className="w-full bg-white text-gray-700 text-[10px] font-bold py-2.5 rounded-xl uppercase hover:bg-gray-50 transition-colors tracking-wide">
              Documentation
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
});
Sidebar.displayName = "Sidebar";

export default Sidebar;
