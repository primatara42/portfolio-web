import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
import { useNavigate } from "react-router-dom";

const AddProject = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [documentation, setDocumentation] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imageRef = ref(storage, `images/projects/${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      await addDoc(collection(db, "projects"), {
        title: title,
        documentation: documentation,
        imgUrl: imageUrl,
      });
      alert("Projects added successfully!");
      onClose();
      navigate("/");
    } catch (error) {
      alert(`Error adding document: ${error}`);
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-container" || e.target.id === "button-cancel") {
      e.preventDefault();
      onClose();
      navigate("/");
    }
  };
  return (
    <>
      <div
        id="modal-container"
        onClick={handleOutsideClick}
        className="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 flex items-center justify-center"
      >
        <div className = "bg-secondary rounded-lg p-5 shadow-lg w-[36rem] animate-fadeIn">
          <h2 className="text-Heading-2 text-center font-bold mb-5">
            Add New Project
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-Paragraph font-medium text-primary">
                Title
              </label>
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 p-2 w-full border-primary border-2 border-opacity-25 text-Paragraph rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-Paragraph font-medium text-primary">
                Documentation Link
              </label>
              <input
                type="text"
                value={documentation}
                onChange={(e) => setDocumentation(e.target.value)}
                className="mt-1 p-2 w-full border-primary border-2 border-opacity-25 text-Paragraph rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-Paragraph font-medium text-primary">
                Image
              </label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="mt-1 w-full text-Paragraph"
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
                Add Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProject;
