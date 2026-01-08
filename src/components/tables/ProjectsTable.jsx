"use client";
import React, { memo } from "react";
import Card from "@/components/ui/Card";
import { CircleCheck, MoreVertical } from "lucide-react";

const projectsData = [
  {
    id: 1,
    company: "Chakra Soft UI Version",
    budget: "$14,000",
    status: "Working",
    completion: 60,
    color: "bg-purple-500",
  },
  {
    id: 2,
    company: "Add Progress Track",
    budget: "$3,000",
    status: "Canceled",
    completion: 10,
    color: "bg-blue-500",
  },
  {
    id: 3,
    company: "Fix Platform Errors",
    budget: "Not set",
    status: "Done",
    completion: 100,
    color: "bg-orange-500",
  },
  {
    id: 4,
    company: "Launch our Mobile App",
    budget: "$32,000",
    status: "Done",
    completion: 100,
    color: "bg-pink-500",
  },
  {
    id: 5,
    company: "Add the New Pricing Page",
    budget: "$400",
    status: "Working",
    completion: 25,
    color: "bg-blue-600",
  },
];

const ProgressBar = memo(({ value }) => (
  <div className="flex items-center gap-2.5 w-full">
    <span className="text-[#4FD1C5] font-bold text-xs min-w-[32px]">
      {value}%
    </span>
    <div className="flex-1 bg-gray-100 rounded-full h-1">
      <div
        className="bg-[#4FD1C5] h-1 rounded-full transition-all"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
));
ProgressBar.displayName = "ProgressBar";

const ProjectRow = memo(({ project }) => (
  <tr className="group hover:bg-gray-50/50 transition-colors">
    <td className="py-4 px-4">
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-xl ${project.color} flex items-center justify-center text-white font-bold text-[10px]`}
        >
          {project.company.substring(0, 2).toUpperCase()}
        </div>
        <span className="text-sm font-bold text-gray-700">
          {project.company}
        </span>
      </div>
    </td>
    <td className="py-4 px-4">
      <span className="text-sm font-bold text-gray-700">{project.budget}</span>
    </td>
    <td className="py-4 px-4 text-center">
      <span className="text-sm font-bold text-gray-700">{project.status}</span>
    </td>
    <td className="py-4 px-4">
      <ProgressBar value={project.completion} />
    </td>
    <td className="py-4 px-4 text-right">
      <button className="text-gray-300 hover:text-gray-500 transition-colors">
        <MoreVertical size={16} />
      </button>
    </td>
  </tr>
));
ProjectRow.displayName = "ProjectRow";

const ProjectsTable = memo(() => {
  return (
    <Card>
      <div className="mb-5">
        <h3 className="font-bold text-gray-800 text-lg">Projects</h3>
        <p className="text-gray-400 text-xs mt-1 flex items-center gap-1">
          <span className=""><CircleCheck fill="#04DF72" size={18} color="#fff" /></span>
          <span className="font-bold text-gray-400">30 done</span>
          <span>this month</span>
        </p>
      </div>

      <div className="overflow-x-auto -mx-5">
        <table className="w-full table-fixed">
          <colgroup>
            <col className="w-[45%]" />
            <col className="w-[10%]" />
            <col className="w-[20%]" />
            <col className="w-[10%]" />
            <col className="w-[5%]" />
          </colgroup>
          <thead>
            <tr className="border-b border-gray-100 text-left">
              <th className="text-[10px] font-bold text-gray-400 uppercase py-3 px-4 opacity-70">
                Companies
              </th>
              <th className="text-[10px] font-bold text-gray-400 uppercase py-3 px-4 opacity-70">
                Budget
              </th>
              <th className="text-[10px] font-bold text-gray-400 uppercase py-3 px-4 opacity-70 text-center">
                Status
              </th>
              <th className="text-[10px] font-bold text-gray-400 uppercase py-3 px-4 opacity-70">
                Completion
              </th>
              <th className="text-[10px] font-bold text-gray-400 uppercase py-3 px-4 opacity-70"></th>
            </tr>
          </thead>
          <tbody>
            {projectsData.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
});
ProjectsTable.displayName = "ProjectsTable";

export default ProjectsTable;
