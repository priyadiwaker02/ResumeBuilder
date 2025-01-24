// Sidebar.js
import React from "react";

const Sidebar = ({ currentStep }) => {
  const steps = [
    { number: 1, label: "Heading" },
    { number: 2, label: "Work history" },
    { number: 3, label: "Education" },
    { number: 4, label: "Skills" },
    { number: 5, label: "Summary" },
    { number: 6, label: "Finalize" },
  ];

  return (
    <div className="bg-blue-900 text-white w-64 h-screen px-6 py-8">
      <h1 className="text-2xl font-bold mb-8">Resume Builder</h1>
      <ul className="space-y-4">
        {steps.map((step) => (
          <li key={step.number} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep >= step.number
                  ? "bg-orange-500"
                  : "border-2 border-gray-300"
              } text-white`}
            >
              {step.number}
            </div>
            <span
              className={`ml-4 ${
                currentStep >= step.number ? "text-orange-500" : "text-gray-300"
              }`}
            >
              {step.label}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <div className="text-sm text-gray-300">RESUME COMPLETENESS:</div>
        <div className="bg-gray-300 h-2 rounded mt-2">
          <div
            className="bg-orange-500 h-2 rounded"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
