import React from "react";

const Sidebar = ({ currentStep }) => {
  const steps = [
    { number: 1, label: "Heading" },
    { number: 2, label: "Education" },
    { number: 3, label: "Skills" },
    { number: 4, label: "Experience" },
    { number: 5, label: "Projects" },
  ];

  return (
    <div className=" text-white w-72 h-screen px-6 py-10 font-sans">
      <h1 className="text-xl font-bold mb-8 text-purple-400 flex items-center">
        <span className="inline-block w-6 h-6 bg-gradient-to-r from-pink-500 to-orange-400 rounded-md mr-2"></span>
        Resume Builder
      </h1>
      <ul className="space-y-6">
        {steps.map((step) => (
          <li key={step.number} className="flex items-center">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[12px] font-bold ${
                currentStep === step.number
                  ? "bg-orange-500 text-white"
                  : "border-2 border-gray-400 text-gray-400"
              }`}
            >
              {step.number}
            </div>
            <span
              className={`ml-4 text-[14px] ${
                currentStep === step.number ? "text-white font-bold" : "text-gray-400"
              }`}
            >
              {step.label}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <div className="text-sm font-semibold text-gray-300 mb-2">RESUME COMPLETENESS:</div>
        <div className="bg-gray-400 h-2 rounded-full">
          <div
            className="bg-orange-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          ></div>
        </div>
        <div className="text-right text-white text-sm mt-1 font-semibold">
          {Math.round((currentStep / steps.length) * 100)}%
        </div>
      </div>
      <div className="mt-20 text-sm space-y-2">
        <a href="#" className="text-orange-400 font-semibold hover:underline">Terms & Conditions</a>
        <a href="#" className="block text-white hover:underline">Privacy Policy</a>
        <a href="#" className="block text-white hover:underline">Accessibility</a>
        <a href="#" className="block text-white hover:underline">Contact Us</a>
      </div>
      <p className="mt-12 text-gray-400 text-xs">© 2025, Bold Limited. All rights reserved.</p>
    </div>
  );
};

export default Sidebar;
