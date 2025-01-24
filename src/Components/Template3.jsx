import React from "react";
import "/ResumeTemplate.css";

const Template3 = () => {
  return (
    <div className="resume-container">
      <h1>Template3</h1>
      <div className="left-section">
        <div className="profile-pic"></div>
        <h1>Lorna Alvarado</h1>
        <h2>Marketing Manager</h2>

        <div className="contact">
          <h3>Contact</h3>
          <p>📞 +123-456-7890</p>
          <p>✉️ hello@reallygreatsite.com</p>
          <p>📍 123 Anywhere St., Any City, ST 12345</p>
        </div>

        <div className="about">
          <h3>About Me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li>Management Skills</li>
            <li>Creativity</li>
            <li>Digital Marketing</li>
            <li>Negotiation</li>
            <li>Critical Thinking</li>
            <li>Leadership</li>
          </ul>
        </div>
      </div>

      <div className="right-section">
        <div className="education">
          <h3>Education</h3>
          <div className="education-item">
            <h4>Bachelor of Business Management</h4>
            <p>Borcelle University (2016 - 2020)</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet sem nec risus egestas accumsan.
            </p>
          </div>
          <div className="education-item">
            <h4>Bachelor of Business Management</h4>
            <p>Borcelle University (2020 - 2023)</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet sem nec risus egestas accumsan.
            </p>
          </div>
        </div>

        <div className="experience">
          <h3>Experience</h3>
          <div className="experience-item">
            <h4>Product Design Manager</h4>
            <p>Arowwai Industries (2016 - 2020)</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet sem nec risus egestas accumsan.
            </p>
          </div>
          <div className="experience-item">
            <h4>Marketing Manager</h4>
            <p>Arowwai Industries (2019 - 2020)</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet sem nec risus egestas accumsan.
            </p>
          </div>
        </div>

        <div className="references">
          <h3>References</h3>
          <div className="reference-item">
            <p><strong>Harumi Kobayashi</strong></p>
            <p>Wardiere Inc. / CEO</p>
            <p>Phone: 123-456-7890</p>
            <p>Email: hello@reallygreatsite.com</p>
          </div>
          <div className="reference-item">
            <p><strong>Bailey Dupont</strong></p>
            <p>Wardiere Inc. / CEO</p>
            <p>Phone: 123-456-7890</p>
            <p>Email: hello@reallygreatsite.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template3;
