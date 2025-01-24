import React from "react";

const StepOne = ({ formData, handleChange }) => {
  return (
    <div className="bg-black p-8 rounded-lg shadow-lg w-full mx-auto">
      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-white font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border-b border-white bg-transparent text-white focus:outline-none focus:ring-0"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-1">Designation</label>
            <input
              type="text"
              placeholder="Enter your designation"
              className="w-full px-4 py-2 border-b border-white bg-transparent text-white focus:outline-none focus:ring-0"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-white font-medium mb-1">Phone</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border-b border-white bg-transparent text-white focus:outline-none focus:ring-0"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border-b border-white bg-transparent text-white focus:outline-none focus:ring-0"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label className="block text-white font-medium mb-1">Address</label>
          <textarea
            placeholder="Enter your address"
            className="w-full px-4 py-2 border-b border-white bg-transparent text-white focus:outline-none focus:ring-0"
            name="address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label className="block text-white font-medium mb-1">Objective</label>
          <textarea
            placeholder="Enter your objective"
            className="w-full px-4 py-2 border-b border-white bg-transparent text-white focus:outline-none focus:ring-0"
            name="objective"
            value={formData.objective}
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
