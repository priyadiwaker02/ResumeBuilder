import React, {useState} from "react";
import "/ResumeTemplate.css";
import "./Templates.css";
import girl1 from '../assets/girl1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Template2 = ({formData}) => {

  
  return (
    
      <div className="resume max-w-2xl mx-auto bg-white p-8 shadow-lg">
        {/* Header */}
        <div className="header flex items-center border-b pb-6 px-8">
          <div className="image">
            <img
              src={girl1}
              alt="Profil"
            />
          </div>
          <div className="basicDetail">

            <h1 className="text-3xl font-bold leading-3"> {formData.name || "OLIVIA WILSON"}</h1>
            <p className="text-gray-600 text-xl tracking-widest">{formData.designation || 'Graphics Designer'}</p>

            <div className="gap-4 mt-4 text-gray-600">
              <div className="flex gap-2">
                <div className="flex items-center gap-2">
                <FontAwesomeIcon className="icon" icon={faPhone} />
                  <p>{formData.phone || "+123-456-7890"}</p>
                </div>
                <div className="flex items-center gap-2">
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                  <p>{formData.email || "hello@reallygreatsite.com"}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
              <FontAwesomeIcon className="icon" icon={faLocationDot} />
                <p>{formData.address || "Delhi, India"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-12 gap-8 mt-6">
          {/* Left Column */}
          <div className="left col-span-4">
            <h2 className="text-lg font-bold uppercase text-gray-700">Education</h2>
            <ul className="mt-4 text-gray-600 space-y-3">
              
            {formData.education && formData.education.length > 0 ? (
              formData.education.map((edu, index) => (
                <li key={index}>
                  <p className="font-semibold">{edu.title || "Bachelor of Design"}</p>
                  <p>{edu.organization || "Wardiere University"}</p>
                  <p>{edu.year || "2006 - 2008"}</p>
                </li>
              ))
            ) : (
              <li>
                <p className="font-semibold">Bachelor of Design</p>
                <p>Wardiere University</p>
                <p>2006 - 2008</p>
              </li>
            )}
            </ul>

            <h2 className="text-lg font-bold uppercase text-gray-700 mt-8">Expertise</h2>
            <ul className="mt-4 text-gray-600 space-y-2 px-2">
              <li className="list-disc">Management Skills</li>
              <li className="list-disc">Digital Marketing</li>
              <li className="list-disc">Negotiation</li>
              <li className="list-disc">Critical Thinking</li>
              <li className="list-disc">Communication Skills</li>
            </ul>

            <h2 className="text-lg font-bold uppercase text-gray-700 mt-8">Language</h2>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li>English</li>
              <li>Spanish</li>
              <li>French</li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="col-span-8">
            <h2 className="text-lg font-bold uppercase text-gray-700">Objective</h2>
            <p className="text-gray-600 mt-4">
             {formData.objective ||" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            </p>

            <h2 className="text-lg font-bold uppercase text-gray-700 mt-8">Work Experience</h2>
            <ul className="mt-4 text-gray-600 space-y-6">
              <li>
                <div className="flex justify-between">
                  <p className="font-semibold">Ginyard International Co.</p>
                  <p className="text-sm text-gray-800 font-bold">2020 - 2023</p>
                </div>
                <p className="text-sm">Product Design Manager</p>
                <ul className="list-disc pl-5">
                  <li className="list-disc">Worked with the wider development team.</li>
                  <li className="list-disc">Managed website design, content, and SEO marketing.</li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between">
                  <p className="font-semibold">Arowwai Industries</p>
                  <p className="text-sm text-gray-800 font-bold">2019 - 2020</p>
                </div>
                <p className="text-sm">Product Design Manager</p>
                <ul className="list-disc pl-5">
                  <li className="list-disc">Worked with the wider development team.</li>
                  <li className="list-disc">Managed website design, content, and SEO marketing.</li>
                </ul>
              </li>
            </ul>

            <h2 className="text-lg font-bold uppercase text-gray-700 mt-8">References</h2>
            <div className="grid grid-cols-2 gap-4 mt-4 text-gray-600">
              <div>
                <p className="font-semibold">Bailey Dupont</p>
                <p>Wardiere Inc. / CEO</p>
                <p>Phone: 123-456-7890</p>
                <p>Email: hello@reallygreatsite.com</p>
              </div>
              <div>
                <p className="font-semibold">Harumi Kobayashi</p>
                <p>Wardiere Inc. / CEO</p>
                <p>Phone: 123-456-7890</p>
                <p>Email: hello@reallygreatsite.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Template2;
