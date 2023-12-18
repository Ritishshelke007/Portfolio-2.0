import React from "react";
import { Link } from "react-scroll";
import ThemeBtn from "./ThemeBtn";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Home",
      link: "hero",
    },
    {
      name: "About",
      link: "about",
    },
    {
      name: "Projects",
      link: "projects",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];

  return (
    <>
      <div className="nav overflow-hidden w-full py-6 px-14 sticky top-0 shadow-md flex justify-between items-center dark:bg-slate-900 transition-all ease-in duration-300 z-10 bg-white">
        <div className="font-poppins font-bold text-xl text-slate-900 cursor-pointer dark:text-slate-200">
          Ritish.dev
        </div>

        <div
          className="mobile_menu md:hidden text-2xl cursor-pointer z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? <GrClose /> : <HiOutlineMenuAlt3 />}
        </div>

        <ul
          className={`transition-all ease-in duration-500 md:hidden absolute  flex flex-col justify-center items-center space-y-10 z-10  h-screen left-0 w-full bg-slate-200 font-poppins font-bold ${
            open ? "-top-20" : "hidden"
          }`}
        >
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>

        <ul className="hidden md:flex justify-center items-center space-x-6 font-poppins text-md font-semibold text-slate-900 dark:text-slate-200">
          {links.map((linki) => {
            return (
              <Link
                activeClass="active"
                to={linki.link}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="hover:text-sky-500 transition-all duration-175 ease-in cursor-pointer "
              >
                {linki.name}
              </Link>
            );
          })}
          <li>|</li>
          <li className="hover:text-sky-600 transition-all duration-175 ease-in  cursor-pointer">
            <ThemeBtn />
          </li>
        </ul>

        {/* <ul className="hidden md:flex justify-center items-center space-x-6 font-poppins text-md font-semibold text-slate-900 dark:text-slate-200">
          <li className="hover:text-sky-500 transition-all duration-175 ease-in">
            <a href="/">Home</a>
          </li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="hover:text-sky-500 transition-all duration-175 ease-in cursor-pointer "
          >
            Test 1
          </Link>
          <li className="hover:text-sky-500 transition-all duration-175 ease-in">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-sky-500 transition-all duration-175 ease-in">
            <a href="#">Projects</a>
          </li>
          <li className="hover:text-sky-500 transition-all duration-175 ease-in">
            <a href="#">Contact</a>
          </li>
          <li>|</li>
          <li className="hover:text-sky-600 transition-all duration-175 ease-in  cursor-pointer">
            <ThemeBtn />
          </li>
        </ul> */}
      </div>
    </>
  );
};

export default Navbar;
