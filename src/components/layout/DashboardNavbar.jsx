import React, { memo } from "react";
import Link from "next/link";
import { Search, Settings, Bell, User } from "lucide-react";

const DashboardNavbar = memo(({ pageName, parentName }) => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-4 pt-6">
      <div className="mb-4 lg:mb-0">
        <div className="flex items-center gap-1 text-xs text-gray-400 mb-1">
          <Link
            href="/dashboard"
            className="hover:text-gray-600 transition-colors"
          >
            {parentName || "Pages"}
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">
            {pageName || "Dashboard"}
          </span>
        </div>
        <h1 className="font-bold text-gray-800 text-sm">
          {pageName || "Dashboard"}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <Search size={12} />
          </div>
          <input
            type="text"
            placeholder="Type here..."
            className="pl-8 pr-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#4FD1C5] transition-all bg-white placeholder-gray-400 w-44"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 text-gray-500">
          <Link
            href="/auth/signin"
            className="flex items-center gap-1 hover:text-gray-600 font-bold text-[12px]"
          >
            <User size={12} />
            <span>Sign In</span>
          </Link>

          <button className="hover:text-gray-600 transition-colors p-1">
            <Settings size={14} />
          </button>

          <button className="hover:text-gray-600 transition-colors p-1">
            <Bell size={14} />
          </button>
        </div>
      </div>
    </nav>
  );
});
DashboardNavbar.displayName = "DashboardNavbar";

export default DashboardNavbar;
