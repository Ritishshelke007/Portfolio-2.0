import React from "react";
import { frontendtext, working, about } from "../assets/assets";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-screen flex justify-center items-center transition-all ease-in duration-500 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700"
    >
      <div className="flex flex-col md:flex-row max-w-4xl gap-6 md:gap-16">
        <div className="md:w-1/2 flex justify-center items-center relative">
          <img
            src={about}
            alt="about image"
            className="rounded-xl max-w-xs md:max-w-sm mx-auto md:p-0"
          />
          <img
            src={frontendtext}
            alt="frontend image"
            className="hidden md:inline-block md:absolute w-32 -right-10 rounded-full bottom-10 animate-spin-slow"
          />
          <img
            src={working}
            alt="working"
            className="hidden md:inline-block md:absolute right-0 bottom-[85px] w-12"
          />
        </div>
        <div className="md:w-1/2 flex flex-col space-y-3  text-center md:text-start">
          <p className="uppercase font-poppins font-bold text-md  text-sky-500 tracking-wider ">
            about me
          </p>
          <p className="font-bold text-[24px] dark:text-slate-300">
            A Dedicated Front-end Developer based in Pune, India 📍
          </p>
          <p className="text-slate-700 dark:text-slate-400 font-mulish font-medium tracking-wide px-5 md:px-0">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
