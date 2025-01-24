import React, { useState } from "react";

const Education = ({ formData, handleChange }) => {
  const [educationList, setEducationList] = useState(formData.education || [
    { title: "", organization: "", year: "" }
  ]);

  // Handle input change for each education entry
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedEducationList = [...educationList];
    updatedEducationList[index][name] = value;
    setEducationList(updatedEducationList);
    handleChange({ target: { name: "education", value: updatedEducationList } });
  };

  // Add a new education field
  const addMoreEducation = () => {
    setEducationList([...educationList, { title: "", organization: "", year: "" }]);
  };

  // Remove an education entry
  const removeEducation = (index) => {
    const updatedEducationList = [...educationList];
    updatedEducationList.splice(index, 1);
    setEducationList(updatedEducationList);
    handleChange({ target: { name: "education", value: updatedEducationList } });
  };

  return (
    <div className="bg-black p-8 rounded-lg shadow-lg w-full mx-auto">
      <h2 className="text-white text-2xl font-bold mb-6">Education</h2>

      {educationList.map((education, index) => (
        <div key={index} className="space-y-6 mb-4 border-b border-gray-600 pb-4">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-medium mb-1">Title</label>
              <input
                type="text"
                placeholder="Enter your education title"
                className="w-full px-4 py-2 border-b border-white bg-transparent text-white focus:outline-none focus:ring-0"
                name="title"
                value={education.title}
                onChange={(e) => handleInputChange(index, e)}
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-1">Organization</label>
              <input
                type="text"
                placeholder="Enter organization name"
                className="w-full px-4 py-2 border-b border-white bg-transparent text-white focus:outline-none focus:ring-0"
                name="organization"
                value={education.organization}
                onChange={(e) => handleInputChange(index, e)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-medium mb-1">Year</label>
              <input
                type="text"
                placeholder="Enter year"
                className="w-full px-4 py-2 border-b border-white bg-transparent text-white focus:outline-none focus:ring-0"
                name="year"
                value={education.year}
                onChange={(e) => handleInputChange(index, e)}
              />
            </div>
            <div className="flex items-end">
              {educationList.length > 1 && (
                <button
                  type="button"
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition"
                  onClick={() => removeEducation(index)}
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition"
        onClick={addMoreEducation}
      >
        + Add More Education
      </button>
    </div>
  );
};

export default Education;
