import React from "react";
import { RiLinkedinBoxLine, RiGithubLine } from "react-icons/ri";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import { hero } from "../assets/assets";

const Hero = () => {
  return (
    <section
      id="hero"
      className="transition-all ease-in duration-300 flex flex-col justify-center items-center w-full h-screen  bg-gray-100 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700 md:space-y-28 space-y-5"
    >
      <div className="flex flex-col-reverse md:flex-row justify-center items-center md:flex max-w-3xl relative md:gap-5 space-x-5">
        <div className="flex flex-col space-y-5 relative ">
          <div className="pt-5 font-poppins text-slate-900 leading-tight font-bold md:text-[45px] text-[38px] dark:text-slate-100 text-center  md:text-left">
            Full Stack Web Developer👋🏻
            {/* <div className="absolute top-[38px] md:top-14 md:right-52 right-[70px]">
              <img src={waving} alt="waving hand" className="h-10 md:h-12" />
            </div> */}
          </div>
          <div className="font-mulish text-center px-2 text-lg text-slate-800 dark:text-slate-400 md:text-left">
            Hi, I'm Ritish Shelke. A passionate Full-Stack Web Developer based
            in Pune, India. 📍
          </div>
          <div className="flex justify-center md:justify-start space-x-4 items-center left-0 ">
            <div className="group relative inline-block">
              <a href="https://github.com/Ritishshelke007" target="blank">
                <RiGithubLine className="h-8 w-8 transform transition-all duration-200 hover:scale-125 hover:text-sky-500 dark:text-slate-300" />
              </a>
              <span class="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 dark:bg-gray-700 dark:text-slate-100 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">
                GitHub
              </span>
            </div>
            <div className="group inline-block relative">
              <a
                href="https://www.linkedin.com/in/ritish-shelke/"
                target="blank"
                className="hover:text-sky-500 transition-all ease-in duration-200"
              >
                <RiLinkedinBoxLine className="h-8 w-8  transform transition-all duration-200 hover:scale-125 hover:text-sky-500 dark:text-slate-300" />
              </a>
              <span class="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900  dark:bg-gray-700 dark:text-slate-100 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">
                LinkedIn
              </span>
            </div>
          </div>
        </div>

        <div className="w-[250px] md:w-[350px] flex justify-center items-center">
          <img src={hero} alt="profile" className="rounded-full " />
        </div>
      </div>

      <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row justify-center items-center">
        <div className="flex flex-col md:flex-row justify-start space-x-6">
          <p className="font-poppins font-bold text-start dark:text-slate-300">
            Tech Stack
          </p>
          <IoEllipsisHorizontalOutline className="text-2xl w-10 md:hidden dark:text-slate-400" />
          <p className="hidden md:block font-poppins font-bold text-start dark:text-slate-100">
            |
          </p>
        </div>

        <ul className="grid grid-cols-2 md:flex gap-6 md:ml-5">
          <li className="cursor-pointer hover:-translate-y-1 transition-all ease-in duration-300">
            <img src="https://skillicons.dev/icons?i=js,ts" />
          </li>

          <li className="cursor-pointer hover:-translate-y-1 transition-all ease-in duration-300">
            <img src="https://skillicons.dev/icons?i=react,next" />
          </li>

          <li className="cursor-pointer hover:-translate-y-1 transition-all ease-in duration-300">
            <img src="https://skillicons.dev/icons?i=tailwind,materialui" />
          </li>
          <li className="cursor-pointer hover:-translate-y-1 transition-all ease-in duration-300">
            <img src="https://skillicons.dev/icons?i=nodejs,express" />
          </li>
          <li className="cursor-pointer hover:-translate-y-1 transition-all ease-in duration-300">
            <img src="https://skillicons.dev/icons?i=mongo,mysql" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
