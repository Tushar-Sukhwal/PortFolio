import { Socials } from "@/constants";
import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div >
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 hidden md:block">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <a
            href="#contact"
            className="text-purple-400 montserrat border border-purple-800 p-2 px-4 rounded-full mr-9"
          >
            Let&lsquo;s get in touch
          </a>

          <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              <a href="#about-me" className="cursor-pointer">
                About me
              </a>
              <a href="#skills" className="cursor-pointer">
                Skills
              </a>
              <a href="#projects" className="cursor-pointer">
                Projects
              </a>
            </div>
          </div>

          <a
            href="#contact"
            className="text-purple-400 montserrat border border-purple-800 p-2 px-4 rounded-full flex gap-1"
          >
            <p>My Resume</p>
            <Download />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
