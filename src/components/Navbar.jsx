import React from "react";
import { Link } from "react-scroll";
import ThemeBtn from "./ThemeBtn";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = [
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
      <nav className="overflow-hidden w-full py-6 px-10 sticky top-0 shadow-md flex md:flex-row justify-between items-center dark:bg-slate-900 transition-all ease-in duration-300 z-10 bg-white">
        <section className="flex w-full justify-between items-center">
          <div className="font-poppins font-bold text-xl text-slate-900 cursor-pointer dark:text-slate-200">
            Ritish.dev
          </div>

          <HiOutlineMenuAlt3
            className="md:hidden text-2xl cursor-pointer dark:text-slate-200"
            onClick={() => setMenuOpen(true)}
          />

          <ul className="hidden md:flex justify-center items-center space-x-6 font-poppins text-md font-semibold text-slate-900 dark:text-slate-200">
            {menu.map((linki) => {
              return (
                <Link
                  activeClass="active"
                  to={linki.link}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="hover:text-sky-500 transition-all duration-175 ease-in cursor-pointer "
                  key={linki.name}
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
        </section>

        <div
          className={`fixed h-full w-screen md:hidden z-50 overflow-hidden bg-black/50 backdrop-blur-sm top-0 left-0  transition-all ease-in duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }
        }`}
        >
          <section className="text-black bg-white dark:bg-slate-800 flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 flex w-full transition-all ease-in duration-300">
            <IoCloseSharp
              className="absolute text-3xl top-6 right-10 cursor-pointer dark:text-slate-200"
              onClick={() => setMenuOpen(false)}
            />

            <ul className="md:hidden flex flex-col justify-center items-center h-full space-y-10 font-poppins text-md font-semibold text-slate-900 dark:text-slate-200 ">
              {menu.map((linki) => {
                return (
                  <Link
                    activeClass="active"
                    to={linki.link}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="hover:text-sky-500 transition-all duration-300 ease-in cursor-pointer "
                    key={linki.name}
                    onClick={() => setMenuOpen(false)}
                  >
                    {linki.name}
                  </Link>
                );
              })}

              <li className="hover:text-sky-600 transition-all duration-175 ease-in  cursor-pointer">
                <ThemeBtn />
              </li>
            </ul>
          </section>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
