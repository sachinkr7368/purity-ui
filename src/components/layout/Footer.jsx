import React, { memo } from "react";

const Footer = memo(() => {
  return (
    <footer className="flex flex-col lg:flex-row justify-between items-center text-gray-400 text-xs font-medium py-4">
      <p className="mb-2 lg:mb-0">
        @ 2021, Made with ❤️ by{" "}
        <span className="text-[#4FD1C5] font-bold">Creative Tim</span> &{" "}
        <span className="text-[#4FD1C5] font-bold">Simmmple</span> for a better
        web
      </p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-gray-600 transition-colors">
          Creative Tim
        </a>
        <a href="#" className="hover:text-gray-600 transition-colors">
          Simmmple
        </a>
        <a href="#" className="hover:text-gray-600 transition-colors">
          Blog
        </a>
        <a href="#" className="hover:text-gray-600 transition-colors">
          License
        </a>
      </div>
    </footer>
  );
});
Footer.displayName = "Footer";

export default Footer;
