import React, { useState, useEffect } from "react";

const Skills = ({ FormData = {}, handleChange }) => {
  // Initialize state with existing data or empty arrays
  const [skillsList, setSkillsList] = useState(FormData.skills || [{ skill: "" }]);
  const [languagesList, setLanguagesList] = useState(FormData.languages || [{ language: "" }]);

  // Handle input change for skills
  const handleSkillChange = (index, event) => {
    const { name, value } = event.target;
    const updatedSkillsList = [...skillsList];
    updatedSkillsList[index][name] = value;
    setSkillsList(updatedSkillsList);
    handleChange({ target: { name: "skills", value: updatedSkillsList } });
  };

  // Handle input change for languages
  const handleLanguageChange = (index, event) => {
    const { name, value } = event.target;
    const updatedLanguagesList = [...languagesList];
    updatedLanguagesList[index][name] = value;
    setLanguagesList(updatedLanguagesList);
    handleChange({ target: { name: "languages", value: updatedLanguagesList } });
  };

  // Add a new skill entry
  const addMoreSkills = () => {
    setSkillsList([...skillsList, { skill: "" }]);
  };

  // Add a new language entry
  const addMoreLanguages = () => {
    setLanguagesList([...languagesList, { language: "" }]);
  };

  // Remove a skill entry
  const removeSkill = (index) => {
    const updatedSkillsList = [...skillsList];
    updatedSkillsList.splice(index, 1);
    setSkillsList(updatedSkillsList);
    handleChange({ target: { name: "skills", value: updatedSkillsList } });
  };

  // Remove a language entry
  const removeLanguage = (index) => {
    const updatedLanguagesList = [...languagesList];
    updatedLanguagesList.splice(index, 1);
    setLanguagesList(updatedLanguagesList);
    handleChange({ target: { name: "languages", value: updatedLanguagesList } });
  };

  return (
    <div className="bg-black p-8 rounded-lg shadow-lg w-full mx-auto h-[70vh] overflow-y-scroll custom-scrollbar">
      <h2 className="text-white text-2xl font-bold mb-6">Skills & Languages</h2>
      
      <div className="flex gap-10">
        {/* Skills Section */}
        <div className="mb-6">
          <h3 className="text-white text-xl font-bold mb-4">Skills</h3>
          {skillsList.map((skill, index) => (
            <div key={index} className="space-y-4 mb-4 border-b border-gray-600 pb-4">
              <div className="grid grid-cols-1 gap-6">
                {/* Skill Input */}
                <div>
                  <label className="block text-white font-medium mb-1">Skill</label>
                  <input
                    type="text"
                    placeholder="Enter your skill"
                    className="w-full px-4 py-2 border-b border-white bg-transparent text-white focus:outline-none focus:ring-0"
                    name="skill"
                    value={skill.skill}
                    onChange={(e) => handleSkillChange(index, e)}
                  />
                </div>
              </div>

              {/* Remove Skill Button */}
              {skillsList.length > 1 && (
                <button
                  type="button"
                  className="mt-2 text-red-500 hover:text-red-700"
                  onClick={() => removeSkill(index)}
                >
                  Remove Skill
                </button>
              )}
            </div>
          ))}
          {/* Add More Skills Button */}
          <button
            type="button"
            className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition"
            onClick={addMoreSkills}
          >
            + Add More Skills
          </button>
        </div>

        {/* Languages Section */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Languages</h3>
          {languagesList.map((language, index) => (
            <div key={index} className="space-y-4 mb-4 border-b border-gray-600 pb-4">
              <div className="grid grid-cols-1 gap-6">
                {/* Language Input */}
                <div>
                  <label className="block text-white font-medium mb-1">Language</label>
                  <input
                    type="text"
                    placeholder="Enter the language"
                    className="w-full px-4 py-2 border-b border-white bg-transparent text-white focus:outline-none focus:ring-0"
                    name="language"
                    value={language.language}
                    onChange={(e) => handleLanguageChange(index, e)}
                  />
                </div>
              </div>

              {/* Remove Language Button */}
              {languagesList.length > 1 && (
                <button
                  type="button"
                  className="mt-2 text-red-500 hover:text-red-700"
                  onClick={() => removeLanguage(index)}
                >
                  Remove Language
                </button>
              )}
            </div>
          ))}
          {/* Add More Languages Button */}
          <button
            type="button"
            className="mt-6 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
            onClick={addMoreLanguages}
          >
            + Add More Languages
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
