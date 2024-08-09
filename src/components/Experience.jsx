import React from "react";

const Experience = () => {
  return (
    // <div className="relative max-w-full px-10 after:content-[''] after:absolute after:w-[6px] after:h-full after:bg-gray-300 after:top-0 after:left-[50%] after:-ml-[3px] after:-z-10">
    //   <div className="relative px-12 py-10 w-1/2 bg-white left-0 max-w-2xl">
    //     <div className="w-12 h-12 rounded-full bg-gray-300 absolute -right-[70px] top-8 z-10 p-2">
    //       <img src={assessliLogo} alt="Assessli" />
    //     </div>
    //     <div className="space-y-2 px-5 py-7 bg-gray-100 relative rounded-md">
    //       <h2 className="font-semibold text-2xl">Assessli (One Oath)</h2>
    //       <p className="font-semibold text-sm">April 2024 - June 2024</p>
    //       <ul className="list-disc">
    //         <li>
    //           Developed a React-based report generation system, streamlining
    //           assessment workflows and replacing the legacy Python solution,
    //           which optimized performance and reduced processing time
    //         </li>
    //         <li>
    //           Designed and launched Assessli's official website and contributed
    //           to developing an assessment platform by enhancing frontend and
    //           backend functionalities to improve user experience and system
    //           efficiency
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="relative px-12 py-12 w-1/2 bg-white left-[50%] max-w-2xl">
    //     <div className="w-12 h-12 rounded-full bg-gray-300 absolute -left-[70px] top-8 z-10 p-2">
    //       <img src={assessliLogo} alt="Assessli" />
    //     </div>
    //     <div className="space-y-2 px-5 py-7 bg-gray-100 relative rounded-md">
    //       <h2 className="font-semibold text-2xl">IT Jobxs</h2>
    //       <p className="font-semibold text-sm">February 2023 - April 2023</p>
    //       <ul className="list-disc">
    //         <li>
    //           Integrated reCAPTCHA with the website- Google Layer of protection
    //           from bots increasing web security by 70%.
    //         </li>
    //         <li>
    //           Evaluated 100+ type checking in the codebase, improving code
    //           quality and reducing runtime errors by 42%.
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <section
      id="experience"
      className="bg-white text-gray-800 transition-all ease-in duration-500 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700 md:h-screen md:flex md:justify-center md:items-center "
    >
      <div className="container max-w-5xl md:px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-5 md:mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-sky-500">
              <h3 className="text-3xl font-semibold dark:text-slate-100">
                Experiences
              </h3>
            </div>{" "}
            dark:text-slate-300
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-sky-500 ">
                <div class="cursor-pointer overflow-hidden w-full relative transition-all duration-500 hover:translate-y-2 md:max-w-3xl  bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-2 p-2 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-sky-400 dark:bg-slate-900">
                  <div>
                    <h2 class="font-bold text-xl dark:text-slate-100">
                      Assessli (One Oath)
                    </h2>
                    <h3 className="font-semibold dark:text-slate-300">
                      Frontend Development Intern
                    </h3>
                    <time className="text-xs tracking-wide uppercase text-gray-600 dark:text-slate-300">
                      APRIL 2024 - JUNE 2024
                    </time>
                    <ul className="list-disk dark:text-slate-400 pt-3">
                      <li>
                        ● Developed a React-based report generation system,
                        streamlining assessment workflows and replacing the
                        legacy Python solution, which optimized performance and
                        reduced processing time.
                      </li>
                      <li>
                        ● Designed and launched Assessli's official website and
                        contributed to developing an assessment platform by
                        enhancing frontend and backend functionalities to
                        improve user experience and system efficiency
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-sky-500 ">
                <div class="cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 max-w-3xl  bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-2 p-2 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-sky-400 dark:bg-slate-900">
                  <div>
                    <h2 class="font-bold text-xl dark:text-slate-100">
                      IT Jobxs
                    </h2>
                    <h3 className="font-semibold dark:text-slate-300">
                      Software Development Intern
                    </h3>
                    <time className="text-xs tracking-wide uppercase text-gray-600 dark:text-slate-300">
                      FEBRUARY 2023 - APRIL 2023
                    </time>
                    <ul className="list-disk dark:text-slate-400 pt-3">
                      <li>
                        ● Integrated reCAPTCHA with the website Google Layer of
                        protection from bots increasing web security by 70%.
                      </li>
                      <li>
                        ● Evaluated 100+ type checking in the codebase,
                        improving code quality and reducing runtime errors by
                        42%.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
