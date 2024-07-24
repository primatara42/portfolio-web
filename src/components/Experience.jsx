import React, { useEffect, useState } from "react";

// Import Package Firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

// Import Icons From react-icons
import { FaRegBuilding } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      const querySnapshot = await getDocs(collection(db, "experiences"));
      const experienceList = querySnapshot.docs.map((doc) => doc.data());
      setExperiences(experienceList);
    };

    fetchExperiences();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="experience bg-primary text-secondary pt-36 pb-32 px-10"
      >
        <h1 className="text-5xl text-center sm:text-4xl font-semibold mb-10">
          My Experience
        </h1>
        <p className="text-lg mb-5 sm:text-lg text-center sm:my-5">
          The following are some of the experiences I have, both work experience
          and experience in an organization
        </p>

        <div className="card_container flex flex-wrap gap-20 justify-center">
          {experiences.map((experience, index) => (
            <div className="card w-80 bg-secondary text-primary rounded-md hover:scale-110 ease-in duration-75 cursor-pointer">
              <div className="title_image w-36 h-36 pb-5 mx-auto text-center  flex flex-col justify-center">
                <img src={experience.imgUrl} alt="" className="w-full" />
              </div>
              <h2 className="text-center text-xl font-semibold md:text-lg px-5 mb-5">
                {experience.title}
              </h2>
              <div className="desc ml-3 mb-5 text-base sm:text-sm">
                <div className="departement flex gap-3 items-center md:text-sm">
                  <FaRegBuilding />
                  <p>{experience.name}</p>
                </div>
                <div className="time flex gap-3 items-center ">
                  <FaRegClock />
                  <p>{experience.time}</p>
                </div>
                <div className="work-type flex gap-3 items-center ">
                  <FaBriefcase />
                  <p>{experience.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
