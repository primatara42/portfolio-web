import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import About from "../components/About.jsx";
import Experience from "../components/Experience.jsx";
import Project from "../components/Project.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

import AddExperience from "./AddExperience.jsx";
import AddProject from "./AddProject.jsx";

const Home = ({showAddExperience, showAddProject}) => {
  const [showModalExperience, setShowModalExperience] = useState(showAddExperience);
  const [showModalProject, setShowModalProject] = useState(showAddProject);

  const handleCloseModal = () => {
    setShowModalExperience(false);
    setShowModalProject(false);
  };

  useEffect(() => {
    if (showModalExperience || showModalProject) {
      // Menambahkan kelas ke body untuk mencegah scroll
      document.body.style.overflow = "hidden";
    } else {
      // Menghapus kelas dari body untuk mengembalikan scroll
      document.body.style.overflow = "unset";
    }

    // Cleanup function untuk mengembalikan overflow saat komponen unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModalExperience, showModalProject]);

  return (
    <>
      <Header />

      <About />

      {showModalExperience && <AddExperience onClose={handleCloseModal} />}
      {showModalProject && <AddProject onClose={handleCloseModal} />}

      <Experience />

      <Project />

      <Contact />

      <Footer />
    </>
  );
};

export default Home;
