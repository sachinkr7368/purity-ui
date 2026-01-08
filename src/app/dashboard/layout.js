"use client";
import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Footer from '@/components/layout/Footer';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 px-6 lg:px-8 pb-6">
          {children}
        </main>
        <div className="px-6 lg:px-8 pb-6">
          <Footer />
        </div>
      </div>
    </div>
  );
}
