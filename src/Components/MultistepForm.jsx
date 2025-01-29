import React, { useState } from "react";
import StepOne from "./Steps/StepOne";
import Education from "./Steps/Education";
import Skills from "./Steps/Skills";
import Sidebar from "./Sidebar";
import Experience from "./Steps/Experience";
import Projects from "./Steps/Projects";

const MultistepForm = ({ formData, handleChange }) => {
  const [step, setStep] = useState(1);

  const steps = ["Basic Details", "Education", "Skills", "Experience", "Projects"];

  const nextStep = () => {
    setStep((prevStep) => (prevStep < steps.length ? prevStep + 1 : prevStep));
  };

  const prevStep = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };
 
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <StepOne formData={formData} handleChange={handleChange} />;
      case 2:
        return <Education formData={formData} handleChange={handleChange} />;
      case 3:
        return <Skills formData={formData} handleChange={handleChange} />;
      case 4:
        return <Experience formData={formData} handleChange={handleChange}/>;
      case 5:
        return <Projects formData={formData} handleChange={handleChange} />;
      default:
        return <div className="p-5">Unknown Step</div>;
    }
  };

  return (
    <div className="flex h-screen">
      <aside className="sidebar w-1/4">
       <Sidebar currentStep={step}/>
       
      </aside>
      <main className=" p-2 ml-20 w-[44rem]">
        
        <div className="p-4 rounded-lg shadow-md">{renderStepContent()}</div>
        <div className="flex gap-4 mt-6 justify-end">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={nextStep}
            disabled={step === steps.length}
            className="px-6 py-3 bg-orange-500 text-white rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default MultistepForm;
