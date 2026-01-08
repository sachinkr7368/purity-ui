import React, { memo } from "react";
import Card from "@/components/ui/Card";
import { CircleCheck } from "lucide-react";
import {
  AdobeXDIcon,
  AtlassianIcon,
  SlackIcon,
  SpotifyIcon,
  JiraIcon,
  InvisionIcon,
} from "@/components/icons/BrandIcons";

const projectsData = [
  {
    id: 1,
    company: "Chakra Soft UI Version",
    icon: AdobeXDIcon,
    budget: "$14,000",
    completion: 60,
    members: [
      "/assets/img/avatars/avatar1.png",
      "/assets/img/avatars/avatar2.png",
      "/assets/img/avatars/avatar3.png",
      "/assets/img/avatars/avatar4.png",
      "/assets/img/avatars/avatar5.png",
    ],
  },
  {
    id: 2,
    company: "Add Progress Track",
    icon: AtlassianIcon,
    budget: "$3,000",
    completion: 10,
    members: [
      "/assets/img/avatars/avatar1.png",
      "/assets/img/avatars/avatar2.png",
    ],
  },
  {
    id: 3,
    company: "Fix Platform Errors",
    icon: SlackIcon,
    budget: "Not set",
    completion: 100,
    members: [
      "/assets/img/avatars/avatar3.png",
      "/assets/img/avatars/avatar1.png",
    ],
  },
  {
    id: 4,
    company: "Launch our Mobile App",
    icon: SpotifyIcon,
    budget: "$32,000",
    completion: 100,
    members: [
      "/assets/img/avatars/avatar4.png",
      "/assets/img/avatars/avatar5.png",
      "/assets/img/avatars/avatar2.png",
      "/assets/img/avatars/avatar1.png",
    ],
  },
  {
    id: 5,
    company: "Add the New Pricing Page",
    icon: JiraIcon,
    budget: "$400",
    completion: 25,
    members: [
      "/assets/img/avatars/avatar5.png",
      "/assets/img/avatars/avatar1.png",
      "/assets/img/avatars/avatar3.png",
      "/assets/img/avatars/avatar4.png",
      "/assets/img/avatars/avatar2.png",
    ],
  },
  {
    id: 6,
    company: "Redesign New Online Shop",
    icon: InvisionIcon,
    budget: "$7,600",
    completion: 40,
    members: [
      "/assets/img/avatars/avatar1.png",
      "/assets/img/avatars/avatar5.png",
    ],
  },
];

const ProgressBar = memo(({ value }) => (
  <div className="flex items-center gap-2.5 w-full">
    <span className="text-[#4FD1C5] font-bold text-xs min-w-[24px]">
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

// Avatar Component placeholder
const Avatar = ({ index }) => {
  const colors = [
    "bg-red-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-purple-200",
  ];
  const color = colors[index % colors.length];
  return (
    <div
      className={`w-5 h-5 rounded-full border-2 border-white ${color} flex items-center justify-center text-[8px] font-bold text-gray-700`}
    ></div>
  );
};

const ProjectRow = memo(({ project }) => {
  const Icon = project.icon;
  return (
    <tr className="group hover:bg-gray-50/50 transition-colors border-t border-gray-100">
      <td className="py-3 px-2 pl-0">
        <div className="flex items-center gap-3">
          <div className="shrink-0">
            <Icon size={20} />
          </div>
          <span className="text-sm font-bold text-gray-700">
            {project.company}
          </span>
        </div>
      </td>

      <td className="py-3 px-2">
        <div className="flex -space-x-2">
          {project.members.map((member, i) => (
            <Avatar key={i} index={i} />
          ))}
        </div>
      </td>

      <td className="py-3 px-2">
        <span className="text-xs font-bold text-gray-700">
          {project.budget}
        </span>
      </td>

      <td className="py-3 px-2">
        <ProgressBar value={project.completion} />
      </td>
    </tr>
  );
});
ProjectRow.displayName = "ProjectRow";

const Projects = memo(() => {
  return (
    <Card className="h-full">
      <div className="mb-6 flex flex-col gap-1">
        <h3 className="font-bold text-gray-800 text-lg">Projects</h3>
        <p className="text-gray-400 text-sm flex items-center gap-1">
          <CircleCheck className="text-green-400" size={16} />
          <span className="font-bold text-gray-500">30 done</span>
          <span>this month</span>
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="text-[10px] font-bold text-gray-400 uppercase pl-0 pb-4 opacity-70">
                Companies
              </th>
              <th className="text-[10px] font-bold text-gray-400 uppercase px-2 pb-4 opacity-70">
                Members
              </th>
              <th className="text-[10px] font-bold text-gray-400 uppercase px-2 pb-4 opacity-70">
                Budget
              </th>
              <th className="text-[10px] font-bold text-gray-400 uppercase px-2 pb-4 opacity-70">
                Completion
              </th>
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
Projects.displayName = "Projects";

export default Projects;
