import React from "react";

const Template1 = ({ formData }) => {
  return (
    <div>
      <h1>Template 1</h1>
      <h1>{formData.name || "Your Name"}</h1>
      <p>{formData.email || "your.email@example.com"}</p>
      <p>{formData.phone || "123-456-7890"}</p>
      <p>{formData.address || "Your Address"}</p>

      <h2>Skills</h2>
      <p>{formData.skills || "Your skills will appear here..."}</p>

      <h2>Education</h2>
      <p>{formData.education || "Your education details..."}</p>

      <h2>Experience</h2>
      <p>{formData.experience || "Your work experience..."}</p>
    </div>
  );
};

export default Template1;
