import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { IoCallOutline, IoMailUnreadOutline } from "react-icons/io5";
import { toast } from "react-hot-toast";
import { NavLink } from "react-router-dom";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_vti7qeh",
        "template_d81fbbh",
        form.current,
        "3kxqnx59rHfTJLj6s"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setLoading(false);
          toast.success("Thank you for contacting !");
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          toast.error("Error submitting form !");
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full h-screen mx-auto font-poppins dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700"
    >
      <div className="flex flex-col justify-center items-center w-full h-screen space-y-4">
        <div className="max-w-4xl w-full p-5 mb-0 md:rounded-xl mt-16 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-5 overflow-hidden">
          <div className="flex flex-col justify-between space-y-4 md:w-1/2">
            <div className="space-y-2">
              <h1 className=" text-xl font-bold uppercase text-sky-500">
                Contact
              </h1>
              <p className="font-semibold text-lg dark:text-slate-300">
                Don't be shy! Hit me up! 👇
              </p>
            </div>

            <div className="flex flex-col space-y-8">
              <div className="flex items-center space-x-6">
                <div className="p-3 shadow-lg rounded-full border border-solid animate-bounce">
                  <IoCallOutline className="h-5 w-5 text-sky-500" />
                </div>

                <div>
                  <p className="font-semibold dark:text-slate-300 ">Phone</p>
                  <p className="dark:text-slate-400">+91 7020415332</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="p-3 shadow-lg rounded-full border border-solid">
                  <IoMailUnreadOutline className="h-5 w-5 text-sky-500" />
                </div>
                <div>
                  <p className="font-semibold dark:text-slate-300">Mail</p>
                  <p className="dark:text-slate-400">
                    ritishshelke007@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4 mb-4 py-2 text-2xl">
              <a
                href="https://www.linkedin.com/in/ritish-shelke/"
                target="_blank"
              >
                <AiOutlineLinkedin className="hover:text-blue-400" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <AiOutlineInstagram className="hover:text-red-600" />
              </a>
              <a href="https://www.github.com/ritishshelke007" target="_blank">
                <AiOutlineGithub className="hover:text-gray-400" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="hidden md:block w-40 h-40 rounded-full bg-sky-400 md:absolute z-0 -top-20 -right-28"></div>

            <div className="w-40 h-40 rounded-full bg-sky-400 absolute z-0 -bottom-20 -left-20"></div>

            <div className="relative  bg-white dark:bg-slate-700 rounded-xl shadow-lg p-8">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col space-y-3  md:w-80"
              >
                <div>
                  <label htmlFor="name" className="dark:text-slate-200">
                    Your name
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    className="py-3  ring-1 ring-gray-300 w-full rounded-lg outline-none focus:ring-2 focus:ring-teal-300 px-4 dark:focus:ring-sky-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="name" className="dark:text-slate-200">
                    Email address
                  </label>
                </div>
                <div>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    className="py-3 ring-1 ring-gray-300 w-full rounded-lg outline-none focus:ring-2 focus:ring-teal-300 dark:focus:ring-sky-400 px-4"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="name" className="dark:text-slate-200">
                    Message
                  </label>
                </div>
                <div>
                  <textarea
                    name="message"
                    id="msg"
                    cols="30"
                    rows="3"
                    className="w-full ring-1 ring-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-teal-300 px-4 dark:focus:ring-sky-400 py-3"
                    required
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    value="Send"
                    className={`bg-sky-600 text-white font-bold uppercase px-4 py-3 rounded-lg ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center font-bold p-4  mx-auto items-center bottom-0 dark:text-slate-300">
          Copyright © 2023. All rights are reserved
        </div>
      </div>
    </section>
  );
};

export default Contact;
