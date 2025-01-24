import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // To get the selected template
import ResumeTemplate from "./Template1";
import ResumeTemplate2 from "./Template2";
import ResumeTemplate3 from "./Template3";
import MultistepForm from "./MultistepForm";

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
    year: ""
  });

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

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {/* Left Section - Form */}
      <div className="w-[80%] shadow-lg rounded-lg">
        {/* <StepOne formData={formData} handleChange={handleChange} /> */}
        <MultistepForm formData={formData} handleChange={handleChange} />
      </div>

      {/* Right Section - Resume Preview */}
      <div className="flex flex-col justify-center items-center h-[90vh]">
        <div className="transform scale-[0.4] w-fit">{renderTemplate()}</div>
      </div>
    </div>
  );
};

export default ResumeBuilderPage;
