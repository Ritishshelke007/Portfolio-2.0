import React, { useState, useEffect } from "react";
import { RiGithubLine } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";
import { urlFor, client } from "../client";

const Projects = () => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const query = '*[_type == "projects"]';
      await client.fetch(query).then((data) => {
        const sortedProjects = data.sort(
          (a, b) => new Date(b._createdAt) - new Date(a._createdAt)
        );
        setProjectList(sortedProjects);
      });
    };
    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center bg-[#F9F9F9] dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700 font-poppins px-5"
    >
      <div className="pt-10">
        <p className="uppercase font-poppins font-bold text-[18px] text-sky-500 ">
          projects
        </p>
      </div>

      {projectList.map((project, index) => {
        const isEvenIndex = index % 2 === 0;
        return (
          <div
            key={project.index}
            className={` md:max-w-4xl bg-white mt-10   md:h-auto md:py-10 flex flex-col md:flex-row justify-center items-center shadow-lg rounded-2xl  gap-10 px-5 py-5 dark:bg-slate-900 transition-all ease-in duration-300 ${
              isEvenIndex ? "md:flex-row" : " md:flex-row-reverse"
            }`}
          >
            <div className="h-60 md:h-72 overflow-hidden shadow-xl rounded-xl md:w-1/2">
              <img
                src={urlFor(project.imgUrl)}
                alt="Project Image"
                className="bg-auto transition-all ease-in-out duration-300 hover:animate-scrollUp cursor-pointer"
              />
            </div>
            <div className="flex flex-col space-y-4 md:w-1/2">
              <div>
                <p className="font-bold text-center dark:text-white">
                  {project.title}
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm md:text-base font-semibold text-center dark:text-slate-500">
                  {project.description}
                </p>
              </div>

              <div className="w-full flex flex-wrap justify-center items-center gap-x-3 gap-y-2  font-semibold dark:text-slate-300 px-2 text-sm md:text-base">
                {project.tags.map((tag, index) => {
                  return (
                    <div
                      key={index}
                      className="p-3 shadow-md  dark:bg-gray-200 dark:text-slate-900 dark:rounded-lg"
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-center items-center space-x-10 md:text-lg  pt-5 dark:text-slate-200">
                <div className="flex justify-center items-center space-x-1 hover:text-sky-500 transition-all ease-in duration-300 cursor-pointer hover:-translate-y-1">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    className="flex justify-center space-x-2 items-center"
                  >
                    <div>Code</div>
                    <div>
                      <RiGithubLine />
                    </div>
                  </a>
                </div>
                <div className="flex justify-center items-center space-x-1 hover:text-sky-500 transition-all ease-in duration-300 cursor-pointer hover:-translate-y-1">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    className="flex justify-center space-x-2 items-center"
                  >
                    <div>Live Demo</div>
                    <div>
                      <BiLinkExternal />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
