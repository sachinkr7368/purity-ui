import React from "react";
import Link from "next/link";
import PurityUIIcon from "@/components/icons/PurityUiIcon";
import { Box, CircleUserRound, KeyRound, User } from "lucide-react";
import FacebookIcon from "@/components/icons/FacebookIcon";
import AppleIcon from "@/components/icons/AppleIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";

const Signup = () => {
  return (
    <div className="p-2 pb-10 bg-white">
      <div className="min-h-screen bg-white flex flex-col items-center justify-start relative overflow-x-hidden">
        {/* Background Header */}
        <div
          className="w-full min-h-[520px] absolute top-0 left-0 bg-[#4FD1C5] bg-cover bg-center z-0 rounded-xl pt-[34.5px]"
          style={{
            backgroundImage:
              "url('/assets/signup-bg-left.png'), url('/assets/signup-bg-right.png')",
            backgroundPosition: "left bottom, right bottom",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundSize: "contain, contain",
          }}
        >

          {/* Navigation / Header */}
          <div className="container mx-auto flex justify-between items-center text-white relative z-10 ">
            <div className="font-bold text-sm flex items-center gap-2 uppercase">
              <PurityUIIcon />
              Purity UI Dashboard
            </div>
            <nav className="hidden lg:flex gap-10 text-[10px] font-bold uppercase tracking-wide">
              <Link
                href="/dashboard"
                className="hover:opacity-80 flex items-center gap-1"
              >
                <Box size={10} /> Dashboard
              </Link>
              <Link
                href="/profile"
                className="hover:opacity-80 flex items-center gap-1"
              >
                <User size={10} />
                Profile
              </Link>
              <Link
                href="/auth/signup"
                className="hover:opacity-80 flex items-center gap-1"
              >
                <CircleUserRound size={10} /> Sign Up
              </Link>
              <Link
                href="/auth/signin"
                className="hover:opacity-80 flex items-center gap-1"
              >
                <KeyRound size={10} /> Sign In
              </Link>
            </nav>
            <button className="bg-white text-gray-700 p-auto rounded-full text-[10px] font-bold uppercase hover:bg-gray-100 transition-colors hidden md:block shadow-lg w-[150px] h-[35px]">
              Free Download
            </button>
          </div>

          {/* Welcome Text */}
          <div className="text-center text-white mt-[55px] relative z-10 px-4">
            <h1 className="text-4xl font-bold mb-2.5">Welcome!</h1>
            <p className="text-[#F0FDFA] max-w-[333px] mx-auto text-sm font-medium leading-relaxed">
              Use these awesome forms to login or create new account in your
              project for free.
            </p>
          </div>
        </div>

        {/* Signup Card */}
        <div className="relative z-10 w-full max-w-sm mt-[279px] px-4 mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
              <h2 className="text-lg font-bold text-gray-700">Register with</h2>
              <div className="flex justify-center gap-4 mt-6">
                <SocialButton icon={<FacebookIcon />} />
                <SocialButton icon={<AppleIcon />} />
                <SocialButton icon={<GoogleIcon />} />
              </div>
            </div>

            <div className="flex justify-center text-gray-400 text-[18px] font-bold">
              or
            </div>

            <form className="space-y-5 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4FD1C5] focus:ring-2 focus:ring-[#E6FAF8] transition-all text-sm placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4FD1C5] focus:ring-2 focus:ring-[#E6FAF8] transition-all text-sm placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Your password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4FD1C5] focus:ring-2 focus:ring-[#E6FAF8] transition-all text-sm placeholder-gray-400"
                />
              </div>

              <div className="flex items-center mt-2 ml-1">
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#E6FAF8] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#4FD1C5]"></div>
                  <span className="ms-3 text-sm font-medium text-gray-700">
                    Remember me
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#4FD1C5] hover:bg-[#38B2A8] text-white font-bold py-3.5 rounded-xl transition-all hover:shadow-lg mt-4 uppercase text-xs cursor-pointer"
              >
                Sign Up
              </button>

              <div className="text-center mt-4">
                <p className="text-gray-400 text-sm">
                  Already have an account?{" "}
                  <Link
                    href="/auth/signin"
                    className="text-[#4FD1C5] font-bold hover:text-[#38B2A8] ml-1"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400 text-sm flex justify-between items-center w-[1044px] max-w-[1044px]">
          <p className="">
            @ 2021, Made with ❤️ by{" "}
            <span className="text-[#4FD1C5] font-bold">Creative Tim</span> &{" "}
            <span className="text-[#4FD1C5] font-bold">Simmmple</span> for a
            better web
          </p>
          <div className="flex justify-center gap-11 text-gray-400">
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
        </div>
      </div>
    </div>
  );
};

// Icons & Components
const SocialButton = ({ icon }) => (
  <button className="w-16 h-16 border border-gray-200 rounded-2xl flex items-center justify-center hover:bg-gray-50 transition-all">
    <div className="text-gray-700 group-hover:scale-110 transition-transform">
      {icon}
    </div>
  </button>
);

export default Signup;
