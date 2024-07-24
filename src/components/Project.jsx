import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectList = querySnapshot.docs.map((doc) => doc.data());
      console.log(projectList);
      setProjects(projectList);
    };

    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
      className="projects bg-primary text-secondary pt-36 pb-32 px-10"
    >
      <h1 className="text-5xl text-center sm:text-4xl font-semibold mb-10">
        Projects
      </h1>
      <p className="text-lg mb-5 sm:text-lg text-center sm:my-5">
        These are some of the results of projects that I have carried out, where
        this project includes several skills that I use
      </p>
      <div className="card_container flex flex-wrap justify-center gap-20">
      {projects.map((project, index) => (
        <div className="card w-72 bg-secondary rounded-xl">
          <div
            className="image_container rounded-xl rounded-b-none w-full h-44 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.imgUrl})` }}
          ></div>
          <div className="desc_container text-primary my-5 p-5">
            <h2 className="text-center text-xl font-semibold md:text-lg px-5 mb-5">
              {project.title}
            </h2>
            <p className="p-3 mb-5"></p>
            <a
              href={project.documentation}
              className="block text-xl bg-button w-fit p-3 rounded-lg m-auto text-secondary font-semibold sm:text-lg justify-self-end-end hover:bg-button-hover duration-100 ease-in"
              target="_blank"
            >
              See Documentation
            </a>
          </div>
        </div>
      ))}
      </div>
      
    </section>
  );
};

export default Project;
