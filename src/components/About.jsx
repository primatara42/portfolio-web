// Halaman ini akan menampilkan Jumbotron
import React from "react";
import mySelfImage from "../assets/images/myself.png";

const About = () => {
  return (
    <section
      id="about"
      className="jumbotron pt-5  bg-bg-primary text-text-primary bg-wave-pattern bg-cover md:bg-none md:pt-32 animate-fadeIn"
      
    >
      <div className="jumbotron_content flex justify-between mt-32 mb-40 mx-16 md:flex-col md:mx-10 md:my-10 md:text-center">
        <div className="jumbotron-text w-[65%] md:w-full">
          <div className="jumbotron_header text-5xl sm:text-4xl">
            <h1 className="my-5 font-semibold sm:my-2">
              Hello Everyone<span className="text-text-red font-bold">!</span>
            </h1>
            <h1 className="font-semibold">I'm Prima Putra Agusantara</h1>
            <div className="bg-blop-pattern bg-cover flex justify-center my-5 -md:hidden">
              <img src={mySelfImage} alt="" className="w-64" />
            </div>
          </div>
          <p className="text-lg my-5 sm:text-base">
            I am currently an undergraduate student in Computer Systems at
            Universitas Sriwijaya, with interests in Web Development, Machine
            Learning, Robotics, and UI/UX Design. I am passionate about
            continuous learning and exploration, believing it enables me to
            contribute positively to myself and others.
          </p>
            <a className="block text-2xl bg-text-red w-fit p-3 rounded-lg font-semibold md:mx-auto md:my-10 sm:text-xl hover:scale-110 ease-in duration-100">
              Let's Connect!
            </a>
        </div>
        <div className="jumbotron_image md:bg-blop-pattern md:bg-cover md:rounded-full md:mx-auto md:hidden">
          <img src={mySelfImage} alt="" className="md:w-64" />
        </div>
      </div>
    </section>
  );
};

export default About;
