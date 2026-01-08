import React from "react";
import DashboardNavbar from "@/components/layout/DashboardNavbar";
import AuthorsTable from "@/components/tables/AuthorsTable";
import ProjectsTable from "@/components/tables/ProjectsTable";

export default function DashboardPage() {
  return (
    <>
      <DashboardNavbar pageName="Tables" parentName="Pages" />
      <div className="flex flex-col gap-6">
        <AuthorsTable />
        <ProjectsTable />
      </div>
    </>
  );
}
