import React, { memo } from "react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const authorsData = [
  {
    id: 1,
    name: "Esthera Jackson",
    email: "esthera@simmmple.com",
    role: "Manager",
    org: "Organization",
    status: "Online",
    date: "14/06/21",
  },
  {
    id: 2,
    name: "Alexa Liras",
    email: "alexa@simmmple.com",
    role: "Programmer",
    org: "Developer",
    status: "Offline",
    date: "14/06/21",
  },
  {
    id: 3,
    name: "Laurent Michael",
    email: "laurent@simmmple.com",
    role: "Executive",
    org: "Projects",
    status: "Online",
    date: "14/06/21",
  },
  {
    id: 4,
    name: "Freduardo Hill",
    email: "freduardo@simmmple.com",
    role: "Manager",
    org: "Organization",
    status: "Online",
    date: "14/06/21",
  },
  {
    id: 5,
    name: "Daniel Thomas",
    email: "daniel@simmmple.com",
    role: "Programmer",
    org: "Developer",
    status: "Offline",
    date: "14/06/21",
  },
  {
    id: 6,
    name: "Mark Wilson",
    email: "mark@simmmple.com",
    role: "Designer",
    org: "UI/UX Design",
    status: "Online",
    date: "14/06/21",
  },
];

const AuthorRow = memo(({ author }) => (
  <tr className="group hover:bg-gray-50/50 transition-colors">
    <td className="py-3 px-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#E6FAF8] to-[#99F6E4] flex items-center justify-center text-[#0D9488] font-bold text-sm overflow-hidden">
          {author.name.charAt(0)}
        </div>
        <div>
          <h6 className="text-sm font-bold text-gray-700">{author.name}</h6>
          <p className="text-xs text-gray-400">{author.email}</p>
        </div>
      </div>
    </td>
    <td className="py-3 px-4">
      <h6 className="text-sm font-bold text-gray-700">{author.role}</h6>
      <p className="text-xs text-gray-400">{author.org}</p>
    </td>
    <td className="py-3 px-4">
      <Badge status={author.status} />
    </td>
    <td className="py-3 px-4">
      <span className="text-sm font-bold text-gray-700">{author.date}</span>
    </td>
    <td className="py-3 px-4 text-center">
      <button className="text-gray-400 font-bold text-xs hover:text-[#38B2A8] transition-colors">
        Edit
      </button>
    </td>
  </tr>
));
AuthorRow.displayName = "AuthorRow";

const AuthorsTable = memo(() => {
  return (
    <Card className="mb-6">
      <h3 className="font-bold text-gray-800 text-lg mb-5">Authors Table</h3>

      <div className="overflow-x-auto -mx-5">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-[10px] font-bold text-gray-400 uppercase py-3 px-4 opacity-70">
                Author
              </th>
              <th className="text-[10px] font-bold text-gray-400 uppercase py-3 px-4 opacity-70">
                Function
              </th>
              <th className="text-[10px] font-bold text-gray-400 uppercase py-3 px-4 opacity-70">
                Status
              </th>
              <th className="text-[10px] font-bold text-gray-400 uppercase py-3 px-4 opacity-70">
                Employed
              </th>
              <th className="text-[10px] font-bold text-gray-400 uppercase py-3 px-4 opacity-70"></th>
            </tr>
          </thead>
          <tbody>
            {authorsData.map((author) => (
              <AuthorRow key={author.id} author={author} />
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
});
AuthorsTable.displayName = "AuthorsTable";

export default AuthorsTable;
