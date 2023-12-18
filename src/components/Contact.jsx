import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { IoCallOutline, IoMailUnreadOutline } from "react-icons/io5";
import { toast } from "react-hot-toast";

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
    <section id="contact" className="w-full h-screen mx-auto font-poppins">
      <div className="flex justify-center items-center w-full h-screen pt-16">
        <div className="max-w-4xl w-full p-8 md:rounded-xl  flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-5 overflow-hidden">
          <div className="flex flex-col justify-between space-y-4 md:w-1/2">
            <div className="space-y-2">
              <h1 className=" text-xl font-bold uppercase text-sky-500">
                Contact
              </h1>
              <p className="font-semibold text-lg ">
                Don't be shy! Hit me up! 👇
              </p>
            </div>

            <div className="flex flex-col space-y-5">
              <div className="flex items-center space-x-6">
                <div className="p-3 shadow-lg rounded-full border border-solid animate-bounce">
                  <IoCallOutline className="h-5 w-5 text-sky-500" />
                </div>

                <div>
                  <p className="font-semibold ">Phone</p>
                  <p className="">+91 7020415332</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="p-3 shadow-lg rounded-full border border-solid">
                  <IoMailUnreadOutline className="h-5 w-5 text-sky-500" />
                </div>
                <p className="">ritishshelke007@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-4 py-2 text-2xl">
              <AiOutlineFacebook />
              <AiOutlineTwitter />
              <AiOutlineInstagram />
              <AiOutlineLinkedin />
            </div>
          </div>

          <div className="relative">
            <div className="w-40 h-40 rounded-full bg-sky-400 absolute z-0 -top-20 -right-28"></div>

            <div className="w-40 h-40 rounded-full bg-sky-400 absolute z-0 -bottom-20 -left-20"></div>

            <div className="relative z-10 bg-white rounded-xl shadow-lg p-8">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col space-y-3  md:w-80"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    className="py-3  ring-1 ring-gray-300 w-full rounded-lg outline-none focus:ring-2 focus:ring-teal-300 px-4"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="name">Email address</label>
                </div>
                <div>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    className="py-3 ring-1 ring-gray-300 w-full rounded-lg outline-none focus:ring-2 focus:ring-teal-300 px-4"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="name">Message</label>
                </div>
                <div>
                  <textarea
                    name="message"
                    id="msg"
                    cols="30"
                    rows="3"
                    className="w-full ring-1 ring-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-teal-300 px-4 py-3"
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
      </div>
    </section>
  );
};

export default Contact;
