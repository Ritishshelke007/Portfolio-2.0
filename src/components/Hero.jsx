import React from "react";
import { RiLinkedinBoxLine, RiGithubLine } from "react-icons/ri";
import profile from "./profile.png";
import waving from "./waving.png";
import hero from "./hero.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="transition-all ease-in duration-300 flex justify-center items-center w-full h-screen md:h-[615px] bg-gray-100 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700 "
    >
      <div className="flex max-w-4xl space-x-5">
        <div className="flex flex-col space-y-4">
          <div className="relative font-poppins text-slate-900 leading-12 font-bold text-[50px] dark:text-slate-100">
            Front-End React Developer
            <div className="absolute top-20 right-44">
              <img src={waving} alt="waving hand" className="h-14" />
            </div>
          </div>
          <div className="font-mulish text-lg text-slate-800 dark:text-slate-400">
            Hi, I'm Ritish Shelke. A passionate Front-end React Developer based
            in Pune, India. 📍
          </div>
          <div className="flex justify-start space-x-3 items-center left-0">
            <a
              href="https://www.linkedin.com/in/ritish-shelke/"
              target="blank"
              className="hover:text-sky-500 transition-all ease-in duration-200"
            >
              <RiLinkedinBoxLine className="h-8 w-8 dark:text-slate-300" />
            </a>
            <a
              href="https://github.com/Ritishshelke007"
              target="blank"
              className="hover:text-sky-500 transition-all ease-in duration-200"
            >
              <RiGithubLine className="h-8 w-8 dark:text-slate-300" />
            </a>
          </div>
        </div>

        <div className="max-w-sm flex justify-center items-center">
          <img src={hero} alt="profile" className="rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
