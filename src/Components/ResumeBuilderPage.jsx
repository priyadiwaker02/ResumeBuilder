import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // To get the selected template
import ResumeTemplate from "./Template1";
import ResumeTemplate2 from "./Template2";
import ResumeTemplate3 from "./Template3";
import MultistepForm from "./MultistepForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const ResumeBuilderPage = () => {
  const location = useLocation();
  const selectedTemplate = location.state?.template || "template1";

  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    phone: '',
    email: '',
    address: '',
    objective: '',
    title: "",
    organization: "",
    year: "",
    skills: '',
    language: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  // Choose template component dynamically
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "template2":
        return <ResumeTemplate2 formData={formData} />;
      case "template3":
        return <ResumeTemplate3 formData={formData} />;
      default:
        return <ResumeTemplate />;
    }
  };

  // Open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };



  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {/* Left Section - Form */}
      <div className="w-[80%] shadow-lg rounded-lg">
        {/* <StepOne formData={formData} handleChange={handleChange} /> */}
        <MultistepForm formData={formData} handleChange={handleChange} />
      </div>

      {/* Right Section - Resume Preview */}
      <div className="flex flex-col justify-center items-center h-[90vh] w-[24rem]">
        <div className="transform scale-[0.4] w-fit">
          {renderTemplate()}
          {/* Preview Button */}
        <div className="flex justify-center items-center mt-[10vh] gap-[12rem]">
        <button
            onClick={openModal}
            className="bg-orange-600 text-white px-2 py-2 rounded-lg hover:bg-orange-800 transition transform scale-[2.5]"
          >
            Preview Resume
          </button>

          <button
            onClick={openModal}
            className="bg-orange-600 text-white px-2 py-2 rounded-lg hover:bg-orange-800 transition transform scale-[2.5]"
          >
            Download
          </button>
        </div>

        </div>


      </div>

      {/* Modal for Resume Preview */}
      {isModalOpen && (

        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-40 overflow-y-scroll"
          onClick={closeModal}
        >

          {/* Modal Content */}
          <div
            className="relative p-8 rounded-lg shadow-lg max-w-4xl w-full mt-[20rem]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-[10rem] text-red-600 text-4xl font-bold"
            >
              &times;
            </button>

            {/* Resume Template at Original Size */}
            <div className="transform scale-[1] w-fit">{renderTemplate()}</div>

            {/* Additional Close Button */}

          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeBuilderPage;
