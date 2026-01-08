import React from "react";
import Link from "next/link";
import { Box, CircleUserRound, KeyRound, User } from "lucide-react";
import PurityUIIcon from "@/components/icons/PurityUiIcon";
import Image from "next/image";

const Signin = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between relative overflow-hidden">
      <div className="flex">
        {/* navbar */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-[987.5px]">
          <div className="bg-white backdrop-blur-md rounded-2xl px-6 py-3 shadow-sm flex justify-between items-center border border-white/40">
            <Link
              href="/"
              className="font-bold text-sm flex items-center gap-2 uppercase text-gray-800"
            >
              <PurityUIIcon size={20} color="#2D3748" />
              Purity UI Dashboard
            </Link>
            <nav className="hidden lg:flex gap-8 text-[10px] font-bold uppercase tracking-wide text-gray-600">
              <Link
                href="/dashboard"
                className="hover:text-[#4FD1C5] flex items-center gap-1 transition-colors"
              >
                <Box size={12} /> Dashboard
              </Link>
              <Link
                href="/profile"
                className="hover:text-[#4FD1C5] flex items-center gap-1 transition-colors"
              >
                <User size={12} /> Profile
              </Link>
              <Link
                href="/auth/signup"
                className="hover:text-[#4FD1C5] flex items-center gap-1 transition-colors"
              >
                <CircleUserRound size={12} /> Sign Up
              </Link>
              <Link
                href="/auth/signin"
                className="hover:text-[#4FD1C5] flex items-center gap-1 transition-colors"
              >
                <KeyRound size={12} /> Sign In
              </Link>
            </nav>
            <button
              className="text-white w-[150px] h-[35px] rounded-full text-[10px] font-bold shadow-md"
              style={{
                background: "linear-gradient(90deg, #313860 0%, #151928 100%)",
              }}
            >
              Free Download
            </button>
          </div>
        </div>

        {/* Left Section - Form */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center items-center px-6 relative z-10 pt-24 lg:pt-0">
          <div className="w-full max-w-[350px]">
            <h1 className="text-3xl font-bold text-[#4FD1C5] mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-400 text-sm font-bold mb-8">
              Enter your email and password to sign in
            </p>

            <form className="space-y-6">
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

              <div className="flex items-center ml-1">
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
                className="w-full bg-[#4FD1C5] hover:bg-[#38B2A8] text-white font-bold py-3.5 rounded-xl transition-all mt-4 uppercase text-xs cursor-pointer"
              >
                Sign In
              </button>

              <div className="text-center mt-6">
                <p className="text-gray-400 text-sm font-medium">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/auth/signup"
                    className="text-[#4FD1C5] font-bold hover:text-[#38B2A8] ml-1"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Right Section - Teal Background */}
        <div className="hidden lg:block bg-[#4FD1C5] w-full min-w-[862px] max-w-[50%] rounded-bl-xl h-[872px] relative overflow-hidden">
          {/* Background Images */}
          <div
            className="absolute inset-0 bg-cover bg-no-repeat z-0"
            style={{
              backgroundImage:
                "url('/assets/signin-bg-left.png'), url('/assets/signin-bg-right.png')",
              backgroundPosition: "left bottom, right bottom",
            }}
          ></div>

          {/* Marketing Content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center p-10">
            <Image
              src="/assets/chakraui.png"
              alt="Purity UI Logo"
              width={357}
              height={92}
            />
          </div>
        </div>
      </div>
      {/* Footer - Absolute bottom or relative */}
        <div className="mt-[122px] text-center lg:text-left text-gray-400 text-sm mb-10 lg:flex lg:justify-between lg:pr-10 w-[985.5px] mx-auto">
          <p className="mb-2 lg:mb-0">
            @ 2021, Made with ❤️ by{" "}
            <span className="text-[#4FD1C5] font-bold">Creative Tim</span> &{" "}
            <span className="text-[#4FD1C5] font-bold">Simmmple</span>
          </p>
          <div className="flex justify-center lg:justify-end gap-6 text-gray-400">
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
  );
};

export default Signin;
