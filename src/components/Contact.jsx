import React from "react";
import contactImageBackground from "../assets/images/contactImageBackground.png";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact bg-bg-primary text-text-primary pt-40 pb-32 px-5"
    >
      <h1 className="text-5xl text-center sm:text-4xl font-semibold mb-10">
        Contact Me
      </h1>
      <p className="text-lg p-5 mb-5 sm:text-base">
        If you're interested in collaborating, have any questions, feel free to
        reach out! I'm always open to discussing new projects, creative ideas,
        or opportunities to be part of your vision. You can contact me via email
        at primatara42@gmail.com or connect with me through my social media
        profiles. Let's build something amazing together!
      </p>
      <div className="flex justify-between px-10 gap-x-10">
        <div className=" w-[500px] md:w-[250px] sm:hidden">
          <img src={contactImageBackground} alt="" />
        </div>
        <form action="" className="w-1/2 md:w-[80%] sm:w-full">
          <div className="name_input_container my-10 ">
            <label htmlFor="" className="my-3">
              Your Name
            </label>
            <input
              type="text"
              id="name_input"
              className="text-text-primary block w-full border-b-text-primary border-b-2 outline-none bg-bg-primary"
              required
            />
          </div>
          <div className="email_input_container my-5">
            <label htmlFor="" className="my-3">
              Email
            </label>
            <input
              type="email"
              id="email_input"
              className="text-text-primary block w-full border-b-text-primary border-b-2 outline-none bg-bg-primary"

             
              required
            />
          </div>
          <div className="message_input_container my-10">
            <label htmlFor="" className="my-3">
              Message
            </label>
            <textarea
              name=""
              id="message_input"
              className="text-text-primary block w-full h-32 border-b-text-primary border-b-2 outline-none bg-bg-primary md:h-20"
            
              
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="block text-xl bg-text-red w-fit p-3 rounded-lg m-auto text-text-primary font-semibold sm:text-lg justify-self-end-end hover:bg-text-red-hover duration-100 ease-in"
            >
              Send your Message!
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
