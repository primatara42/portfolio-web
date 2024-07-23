import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 flex bg-bg-primary text-text-primary justify-between items-center p-7 md:flex-col md:gap-y-5">
      <h1 className="font-ShareTech text-5xl sm:text-4xl hover:cursor-pointer">
        Prima<span className="text-text-red">putra</span>
        <span className="text-text-primary">.</span>
      </h1>
      <ul className="flex gap-10 text-xl sm:text-lg sm:w-full sm:justify-between sm:gap-4">
        <Link
        to="about"
          smooth={true}
          duration={500}
          className="text-white cursor-pointer"
        >
          <li className="hover:scale-110 ease-in duration-75">About</li>
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          className="text-white cursor-pointer"
        >
          <li className="hover:scale-110 ease-in duration-75">Experience</li>
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="text-white cursor-pointer"
        >
          {" "}
          <li className="hover:scale-110 ease-in duration-75">Projects</li>
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="text-white cursor-pointer"
        >
          {" "}
          <li className="hover:scale-110 ease-in duration-75">Contact</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
