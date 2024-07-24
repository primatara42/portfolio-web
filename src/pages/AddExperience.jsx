import React from "react";

const AddExperience = () => {
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
              className="mt-1 p-2 w-full border-bg-primary border-2 border-opacity-25 text-Paragraph rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-Paragraph font-medium text-primary">
              Company Name
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border-bg-primary border-2 border-opacity-25 text-Paragraph rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-Paragraph font-medium text-primary">
              Type
            </label>
            <select
              className="mt-1 p-2 w-full border-bg-primary border-2 border-opacity-25 text-Paragraph rounded-md"
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
              disable
              className="mt-1 p-2 w-full border-primary border-2 border-opacity-25 text-Paragraph rounded-md"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              id="current-experience"
              type="checkbox"
              className="mr-3 w-5 h-5 text-text-red bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="current-experience"
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
              className="mt-1 w-full text-Paragraph"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              id="button-cancel"
              type="button"
              className="mr-2 bg-gray-500 text-white px-4 py-2 rounded-md transition hover:bg-gray-700 duration-150 ease-in-out"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-sky-500 text-white px-4 py-2 rounded-md transition hover:bg-sky-800 duration-150 ease-in-out"
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
