import React from "react";
import DashboardNavbar from "@/components/layout/DashboardNavbar";
import AuthorsTable from "@/components/tables/AuthorsTable";
import ProjectsTable from "@/components/tables/ProjectsTable";

export default function TablesPage() {
  return (
    <>
      <DashboardNavbar pageName="Tables" parentName="Pages" />
      <div className="flex flex-col gap-6 mt-8">
        <AuthorsTable />
        <ProjectsTable />
      </div>
    </>
  );
}
