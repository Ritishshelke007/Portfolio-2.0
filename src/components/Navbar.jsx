import React from "react";
import { NavLink } from "react-router-dom";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import ThemeBtn from "./ThemeBtn";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/",
    },
    {
      name: "Project",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
  ];

  return (


    <>
      <div className="nav w-full py-6 px-14  top-0 shadow-md flex justify-between items-center dark:bg-slate-900 transition-all ease-in duration-300">
        <div className="font-poppins font-bold text-xl text-slate-900 cursor-pointer dark:text-slate-200">
          Ritish.dev
        </div>

        <div className="mobile_menu md:hidden text-2xl cursor-pointer z-50" onClick={()=>setOpen(!open)}>
          {open?<GrClose/> : <HiOutlineMenuAlt3/>}
        </div>

        <ul className={`transition-all ease-in duration-500 md:hidden absolute  flex flex-col justify-center items-center space-y-10 z-10  h-screen left-0 w-full bg-slate-200 font-poppins font-bold ${open?"-top-20":"hidden"}`}>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>

        <ul className="hidden md:flex justify-center items-center space-x-6 font-poppins text-md font-semibold text-slate-900 dark:text-slate-200">
          <li className="hover:text-sky-500 transition-all duration-175 ease-in">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-sky-500 transition-all duration-175 ease-in">
            <a href="#">About</a>
          </li>
          <li className="hover:text-sky-500 transition-all duration-175 ease-in">
            <a href="#">Projects</a>
          </li>
          <li className="hover:text-sky-500 transition-all duration-175 ease-in">
            <a href="#">Contact</a>
          </li>
          <li>|</li>
          <li className="hover:text-sky-600 transition-all duration-175 ease-in  cursor-pointer">
            <ThemeBtn/>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
