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
            A Dedicated Full Stack Web Developer based in Pune, India 📍
          </p>
          <p className="text-slate-700 dark:text-slate-400 font-mulish font-medium tracking-wide px-5 md:px-0">
            As a Full Stack Web Developer, I bring a comprehensive skill set
            that spans both front-end and back-end development. My expertise
            includes HTML, CSS, JavaScript, React, Tailwind, and SCSS on the
            front end, as well as Node.js, Express, and MongoDB on the back end.
            I excel in designing and maintaining responsive, dynamic websites
            that provide a seamless user experience. My strength lies in
            developing robust, efficient code and leveraging the latest
            development tools and methodologies. Additionally, I am a
            collaborative team player who thrives in cross-functional
            environments, consistently delivering high-quality web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
