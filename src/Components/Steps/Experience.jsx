import React, { useState } from "react";

const Experience = ({ formData, handleChange }) => {
  const [experienceList, setExperienceList] = useState(formData.experience || [
    { role: "",company:'', description: [""], year: "" }
  ]);

  // Handle input change for each experience entry
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedExperienceList = [...experienceList];
    updatedExperienceList[index][name] = value;
    setExperienceList(updatedExperienceList);
    handleChange({ target: { name: "experience", value: updatedExperienceList } });
  };

  // Handle change for list items within description
  const handleDescriptionChange = (expIndex, descIndex, event) => {
    const updatedExperienceList = [...experienceList];
    updatedExperienceList[expIndex].description[descIndex] = event.target.value;
    setExperienceList(updatedExperienceList);
    handleChange({ target: { name: "experience", value: updatedExperienceList } });
  };

  // Add a new experience field
  const addMoreExperience = () => {
    setExperienceList([...experienceList, { role: "",company:"", description: [""], year: "" }]);
  };

  // Add a new description item
  const addMoreDescription = (index) => {
    const updatedExperienceList = [...experienceList];
    updatedExperienceList[index].description.push("");
    setExperienceList(updatedExperienceList);
    handleChange({ target: { name: "experience", value: updatedExperienceList } });
  };

  // Remove an experience entry
  const removeExperience = (index) => {
    const updatedExperienceList = [...experienceList];
    updatedExperienceList.splice(index, 1);
    setExperienceList(updatedExperienceList);
    handleChange({ target: { name: "experience", value: updatedExperienceList } });
  };

  // Remove a description entry
  const removeDescription = (expIndex, descIndex) => {
    const updatedExperienceList = [...experienceList];
    updatedExperienceList[expIndex].description.splice(descIndex, 1);
    setExperienceList(updatedExperienceList);
    handleChange({ target: { name: "experience", value: updatedExperienceList } });
  };

  return (
    <div className="bg-black p-8 rounded-lg shadow-lg w-full mx-auto h-[70vh] overflow-y-scroll custom-scrollbar">
      <h2 className="text-white text-2xl font-bold mb-6">Experience</h2>

      {experienceList.map((experience, index) => (
        <div key={index} className="space-y-6 mb-4 border-b border-gray-600 pb-4">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-medium mb-1">Role</label>
              <input
                type="text"
                placeholder="Enter your job role"
                className="w-full px-4 py-2 border-b border-white bg-transparent text-white focus:outline-none focus:ring-0"
                name="role"
                value={experience.role}
                onChange={(e) => handleInputChange(index, e)}
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-1">Company</label>
              <input
                type="text"
                placeholder="Enter your job role"
                className="w-full px-4 py-2 border-b border-white bg-transparent text-white focus:outline-none focus:ring-0"
                name="company"
                value={experience.company}
                onChange={(e) => handleInputChange(index, e)}
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-1">Year</label>
              <input
                type="text"
                placeholder="Enter year"
                className="w-full px-4 py-2 border-b border-white bg-transparent text-white focus:outline-none focus:ring-0"
                name="year"
                value={experience.year}
                onChange={(e) => handleInputChange(index, e)}
              />
            </div>
          </div>

          {/* Description Section */}
          <div>
            <label className="block text-white font-medium mb-1">Description</label>
            {experience.description.map((desc, descIndex) => (
              <div key={descIndex} className="flex items-center gap-4 mb-2">
                <input
                  type="text"
                  placeholder="Enter description"
                  className="w-full px-4 py-2 border-b border-white bg-transparent text-white focus:outline-none focus:ring-0"
                  value={desc}
                  onChange={(e) => handleDescriptionChange(index, descIndex, e)}
                />
                {experience.description.length > 1 && (
                  <button
                    type="button"
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition"
                    onClick={() => removeDescription(index, descIndex)}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
              onClick={() => addMoreDescription(index)}
            >
              + Add More Description
            </button>
          </div>

          <div className="flex items-end justify-end">
            {experienceList.length > 1 && (
              <button
                type="button"
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition"
                onClick={() => removeExperience(index)}
              >
                Remove Experience
              </button>
            )}
          </div>
        </div>
      ))}

      <button
        type="button"
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition"
        onClick={addMoreExperience}
      >
        + Add More Experience
      </button>
    </div>
  );
};

export default Experience;
