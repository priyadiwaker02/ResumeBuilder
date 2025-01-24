// WorkHistoryForm.js
import React, { useState } from "react";

const WorkHistoryForm = ({ onNext }) => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    employer: "",
    location: "",
    remote: false,
    startDate: { month: "", year: "" },
    endDate: { month: "", year: "" },
    currentlyWorking: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Tell us about your most recent job</h2>
      <p className="text-gray-500 mb-8">We’ll start there and work backward.</p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-bold mb-2">JOB TITLE *</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="e.g. Retail Sales Associate"
            className="w-full border-gray-300 border rounded px-4 py-2"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-bold mb-2">LOCATION</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. New Delhi, India"
              className="w-full border-gray-300 border rounded px-4 py-2"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-bold mb-2">EMPLOYER *</label>
            <input
              type="text"
              name="employer"
              value={formData.employer}
              onChange={handleChange}
              placeholder="e.g. H&M"
              className="w-full border-gray-300 border rounded px-4 py-2"
            />
          </div>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="remote"
            checked={formData.remote}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-sm">Remote</label>
        </div>

        <div className="flex gap-4">
          <div>
            <label className="block text-sm font-bold mb-2">START DATE</label>
            <div className="flex gap-2">
              <select
                name="startDateMonth"
                value={formData.startDate.month}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    startDate: { ...formData.startDate, month: e.target.value },
                  })
                }
                className="border-gray-300 border rounded px-2 py-2"
              >
                <option value="">Month</option>
                {/* Add month options */}
              </select>
              <select
                name="startDateYear"
                value={formData.startDate.year}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    startDate: { ...formData.startDate, year: e.target.value },
                  })
                }
                className="border-gray-300 border rounded px-2 py-2"
              >
                <option value="">Year</option>
                {/* Add year options */}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">END DATE</label>
            <div className="flex gap-2">
              <select
                name="endDateMonth"
                value={formData.endDate.month}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    endDate: { ...formData.endDate, month: e.target.value },
                  })
                }
                className="border-gray-300 border rounded px-2 py-2"
              >
                <option value="">Month</option>
                {/* Add month options */}
              </select>
              <select
                name="endDateYear"
                value={formData.endDate.year}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    endDate: { ...formData.endDate, year: e.target.value },
                  })
                }
                className="border-gray-300 border rounded px-2 py-2"
              >
                <option value="">Year</option>
                {/* Add year options */}
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="currentlyWorking"
            checked={formData.currentlyWorking}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-sm">I currently work here</label>
        </div>
      </form>

      <div className="flex justify-between mt-8">
        <button className="text-blue-600 font-bold">Go Back</button>
        <div>
          <button
            className="text-blue-600 font-bold border border-blue-600 rounded px-4 py-2 mr-4"
          >
            Preview
          </button>
          <button
            onClick={onNext}
            className="bg-red-500 text-white font-bold rounded px-6 py-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkHistoryForm;
