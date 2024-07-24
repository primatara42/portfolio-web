import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
import { useNavigate } from "react-router-dom";

const AddExperience = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [startExperience, setStartExperience] = useState("");
  const [endExperience, setEndExperience] = useState("");
  const [type, setType] = useState("");
  const [isCurrent, setIsCurrent] = useState(false);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const formatDate = (date) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const [year, month] = date.split("-");
    return `${monthNames[parseInt(month, 10) - 1]} ${year}`;
  };

  useEffect(() => {
    if (isCurrent) {
      setTime(`${formatDate(startExperience)} - Now`);
    } else {
      setTime(`${formatDate(startExperience)} - ${formatDate(endExperience)}`);
    }
  }, [startExperience, endExperience, isCurrent]);

  const handleCheckboxChange = () => {
    setIsCurrent(!isCurrent);
    if (!isCurrent) {
      setEndExperience("Now");
    } else {
      setEndExperience("");
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-container" || e.target.id === "button-cancel") {
      e.preventDefault();
      onClose();
      navigate("/");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imageRef = ref(storage, `images/experiences/${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      await addDoc(collection(db, "experiences"), {
        title: title,
        name: name,
        time: time,
        type: type,
        imgUrl: imageUrl,
      });
      alert("Experience added successfully!");
      onClose();
      navigate("/");
    } catch (error) {
      alert(`Error adding document: ${error}`);
    }
  };

  function stillWork() {
    if (document.getElementById("checkbox-end-experience") === true) {
      document.getElementById("end-experience").disable = true;
    } else {
      document.getElementById("end-experience").disable = false;
    }
  }

  return (
    <div
      id="modal-container"
      onClick={handleOutsideClick}
      className="fixed z-50 inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center"
    >
      <div className="bg-secondary rounded-lg p-5 shadow-lg w-[36rem] h-full overflow-scroll">
        <h2 className="text-Heading-2 text-center font-bold mb-5">
          Add New Experience
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-Paragraph font-medium text-primary">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-2 w-full border-primary border-2 border-opacity-25 text-Paragraph rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-Paragraph font-medium text-primary">
              Company Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 w-full border-primary border-2 border-opacity-25 text-Paragraph rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-Paragraph font-medium text-primary">
              Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-1 p-2 w-full border-primary border-2 border-opacity-25 text-Paragraph rounded-md"
              required
            >
              <option value="" disabled>
                Please Select
              </option>
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Internship</option>
              <option>Freelance</option>
              <option>Community</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-Paragraph font-medium text-primary">
              Start Date
            </label>
            <input
              type="month"
              onChange={(e) => {
                setStartExperience(e.target.value);
                console.log(typeof e.target.value);
              }}
              className="mt-1 p-2 w-full border-primary border-2 border-opacity-25 text-Paragraph rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-Paragraph font-medium text-primary">
              End Date
            </label>

            <input
              id="end-experience"
              type="month"
              value={(() => {
                if (isCurrent) {
                  return "now";
                } else {
                  return endExperience;
                }
              })()}
              onChange={(e) => setEndExperience(e.target.value)}
              disable={isCurrent}
              className={`mt-1 p-2 w-full border-primary border-2 border-opacity-25 text-Paragraph rounded-md ${
                isCurrent ? "bg-gray-200" : ""
              }`}
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              id="current-experience"
              type="checkbox"
              checked={isCurrent}
              onChange={handleCheckboxChange}
              className="mr-3 w-5 h-5"
            />
            <label
              htmlFor="current-experience"
              onChange={stillWork}
              className="text-sm font-medium text-primary"
            >
              I am currently involved in this role.
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-Paragraph font-medium text-primary">
              Image
            </label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="mt-1 w-full text-Paragraph"
              required
            />
          </div>
          <div className="flex justify-end text-secondary">
            <button
              id="button-cancel"
              type="button"
              onClick={handleOutsideClick}
              className="mr-2 bg-primary px-4 py-2 rounded-md transition hover:bg-gray-700 duration-150 ease-in-out"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-sky-500 px-4 py-2 rounded-md transition hover:bg-sky-800 duration-150 ease-in-out"
            >
              Add Experience
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExperience;
