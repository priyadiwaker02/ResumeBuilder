import React, { useState } from "react";

const ResumePreview = ({ renderTemplate }) => {
  // State to handle the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Right Section - Resume Preview */}
      <div className="flex flex-col justify-center items-center h-[90vh]">
        {/* Preview Button */}
        <button
          onClick={openModal}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition mb-4"
        >
          Preview Resume
        </button>

        {/* Render Resume Template */}
        <div className="transform scale-[0.4] w-fit">{renderTemplate()}</div>
      </div>

      {/* Modal for Resume Preview */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div
            className="relative bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-red-600 text-2xl font-bold"
            >
              &times;
            </button>

            {/* Resume Template at Original Size */}
            <div className="transform scale-[1] w-fit">{renderTemplate()}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePreview;
