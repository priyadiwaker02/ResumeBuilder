import React, { useState } from "react";
import StepOne from "./Steps/StepOne";
import Education from "./Steps/Education";

const MultistepForm = ({ formData, handleChange }) => {
  const [step, setStep] = useState(1);

  const steps = ["Basic Details", "Education", "Skills", "Experience"];

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
        return <div className="p-5">Skills Form</div>;
      case 4:
        return <div className="p-5">Experience Form</div>;
      default:
        return <div className="p-5">Unknown Step</div>;
    }
  };

  return (
    <div className="flex h-screen">
      <aside className="sidebar w-1/4  shadow-md p-6">
        <ul>
          {steps.map((item, index) => (
            <li
              key={index}
              className={`py-4 px-6 rounded-lg mb-4 cursor-pointer text-lg font-medium transition-all ${step === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
              onClick={() => setStep(index + 1)}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>
      <main className=" p-2">
        
        <div className="p-4 rounded-lg shadow-md">{renderStepContent()}</div>
        <div className="flex justify-between mt-6">
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
            className="px-6 py-3 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default MultistepForm;
