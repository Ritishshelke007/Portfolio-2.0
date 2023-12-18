import React from 'react'
import carrental from './carrental.png'
import { RiLinkedinBoxLine, RiGithubLine } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center bg-[#F9F9F9] dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700 font-poppins"
    >
      <div className="pt-10">
        <p className="uppercase font-poppins font-bold text-[18px] text-sky-500 ">
          portfolio
        </p>
      </div>
      <div className="max-w-4xl bg-white mt-10  h-[25rem] flex justify-center items-center shadow-lg rounded-2xl space-x-10 gap-10 p-5">
        <div className="">
          <img
            src={carrental}
            alt=""
            className="rounded-xl shadow-md bg-cover hover:scale-105 transition-all ease-in duration-300"
          />
        </div>
        <div className="flex flex-col space-y-5">
          <div>
            <p className="font-bold text-center ">CAR RENTAL 🚗</p>
          </div>
          <div>
            <p className="text-slate-600 text-center">
              A car rental website is an online platform that allows users to
              rent cars for personal or business use. The website provides an
              interface for searching, comparing, and reserving cars.
            </p>
          </div>
          <div className="flex justify-center items-center space-x-3 font-semibold">
            <div className="p-3 shadow-md">React</div>
            <div className="p-3 shadow-md">SCSS</div>
          </div>
          <div className="flex justify-center items-center space-x-10 text-lg  pt-5">
            <div className="flex justify-center items-center space-x-1 hover:text-sky-500 transition-all ease-in duration-300 cursor-pointer hover:-translate-y-1">
              <div>Code</div>
              <div>
                <RiGithubLine />
              </div>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <div>Live Demo</div>
              <div>
                <BiLinkExternal />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl bg-white mt-10  h-[25rem] flex justify-center items-center shadow-lg rounded-2xl space-x-10 gap-10 p-5">
        <div className="flex flex-col space-y-5">
          <div>
            <p className="font-bold text-center ">CAR RENTAL 🚗</p>
          </div>
          <div>
            <p className="text-slate-600 text-center">
              A car rental website is an online platform that allows users to
              rent cars for personal or business use. The website provides an
              interface for searching, comparing, and reserving cars.
            </p>
          </div>
          <div className="flex justify-center items-center space-x-3 font-semibold">
            <div className="p-3 shadow-md">React</div>
            <div className="p-3 shadow-md">SCSS</div>
          </div>
          <div className="flex justify-center items-center space-x-10 text-lg">
            <div className="flex justify-center items-center space-x-2">
              <div>Code</div>
              <div>
                <RiGithubLine />
              </div>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <div>Live Demo</div>
              <div>
                <BiLinkExternal />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src={carrental}
            alt=""
            className="rounded-xl shadow-md bg-cover hover:scale-105 transition-all ease-in duration-300"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects