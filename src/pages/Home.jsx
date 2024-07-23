import React from "react";
import Header from "../components/Header.jsx";
import About from "../components/About.jsx";
import Experience from "../components/Experience.jsx";
import Project from "../components/Project.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
