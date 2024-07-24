import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import About from "../components/About.jsx";
import Experience from "../components/Experience.jsx";
import Project from "../components/Project.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

import AddExperience from "./AddExperience.jsx";
import AddProject from "./AddProject.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";

const Home = ({ showAddExperience, showAddProject }) => {
  const [showModalExperience, setShowModalExperience] =
    useState(showAddExperience);
  const [showModalProject, setShowModalProject] = useState(showAddProject);

  const handleCloseModal = () => {
    setShowModalExperience(false);
    setShowModalProject(false);
  };

  useEffect(() => {
    if (showModalExperience || showModalProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModalExperience, showModalProject]);

  return (
    <>
      <Header />
      <AnimatedSection>
        <About />
      </AnimatedSection>
      {showModalExperience && <AddExperience onClose={handleCloseModal} />}
      {showModalProject && <AddProjects onClose={handleCloseModal} />}
      <AnimatedSection>
        <Experience />
      </AnimatedSection>
      <AnimatedSection>
        <Project />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </>
  );
};

export default Home;
