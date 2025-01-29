import React, { useState } from "react";

const Projects = ({ formData, handleChange }) => {
  const [projectList, setProjectList] = useState(
    formData.projects || [{ title: "", description: [""], link: "" }]
  );

  // Handle input change for each project entry
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedProjectList = [...projectList];
    if (name === "description") {
      // Update the description array for the project
      updatedProjectList[index].description[parseInt(event.target.dataset.descindex)] = value;
    } else {
      updatedProjectList[index][name] = value;
    }
    setProjectList(updatedProjectList);
    handleChange({ target: { name: "projects", value: updatedProjectList } });
  };

  // Add a new project field
  const addMoreProject = () => {
    setProjectList([...projectList, { title: "", description: [""], link: "" }]);
  };

  // Remove a project entry
  const removeProject = (index) => {
    const updatedProjectList = [...projectList];
    updatedProjectList.splice(index, 1);
    setProjectList(updatedProjectList);
    handleChange({ target: { name: "projects", value: updatedProjectList } });
  };

  // Add more description fields
  const addMoreDescription = (projectIndex) => {
    const updatedProjectList = [...projectList];
    updatedProjectList[projectIndex].description.push("");
    setProjectList(updatedProjectList);
    handleChange({ target: { name: "projects", value: updatedProjectList } });
  };

  // Remove a description field
  const removeDescription = (projectIndex, descIndex) => {
    const updatedProjectList = [...projectList];
    updatedProjectList[projectIndex].description.splice(descIndex, 1);
    setProjectList(updatedProjectList);
    handleChange({ target: { name: "projects", value: updatedProjectList } });
  };

  return (
    <div className="bg-black p-8 rounded-lg shadow-lg w-full mx-auto h-[70vh] overflow-y-scroll custom-scrollbar">
      <h2 className="text-white text-2xl font-bold mb-6">Projects</h2>

      {projectList.map((project, index) => (
        <div key={index} className="space-y-6 mb-4 border-b border-gray-600 pb-4">
          {/* Title/Heading */}
          <div>
            <label className="block text-white font-medium mb-1">Title/Heading</label>
            <input
              type="text"
              placeholder="Enter project title"
              className="w-full px-4 py-2 border-b border-white bg-transparent text-white focus:outline-none focus:ring-0"
              name="title"
              value={project.title}
              onChange={(e) => handleInputChange(index, e)}
            />
          </div>

          {/* Descriptions */}
          <div>
            <label className="block text-white font-medium mb-1">Description</label>
            {project.description.map((desc, descIndex) => (
              <div key={descIndex} className="flex items-center space-x-2 mb-2">
                <textarea
                  placeholder="Enter project description"
                  className="w-full px-4 py-2 border-b border-white bg-transparent text-white focus:outline-none focus:ring-0"
                  name="description"
                  rows="3"
                  value={desc}
                  data-descindex={descIndex}
                  onChange={(e) => handleInputChange(index, e)}
                />
                {project.description.length > 1 && (
                  <button
                    type="button"
                    className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-800 transition"
                    onClick={() => removeDescription(index, descIndex)}
                  >
                    -
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

          {/* Link */}
          <div>
            <label className="block text-white font-medium mb-1">Project Link</label>
            <input
              type="text"
              placeholder="Enter project link"
              className="w-full px-4 py-2 border-b border-white bg-transparent text-white focus:outline-none focus:ring-0"
              name="link"
              value={project.link}
              onChange={(e) => handleInputChange(index, e)}
            />
          </div>

          <div className="flex items-end justify-end">
            {projectList.length > 1 && (
              <button
                type="button"
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition"
                onClick={() => removeProject(index)}
              >
                Remove Project
              </button>
            )}
          </div>
        </div>
      ))}

      <button
        type="button"
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition"
        onClick={addMoreProject}
      >
        + Add More Project
      </button>
    </div>
  );
};

export default Projects;
