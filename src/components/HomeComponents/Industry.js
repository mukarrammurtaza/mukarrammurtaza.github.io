import React from "react";
import { motion } from "framer-motion";
import "./../../styles/carasoul.css";




const Industry = () => {
    // Array of objects representing data for each list item
    const industriesData = [
      {
        name: "Healthcare",
        description:
          "Improving patient care and wellness through innovative solutions.",
      },
      {
        name: "Finance",
        description:
          "Managing finances and investments to secure a stable financial future.",
      },
      {
        name: "Education",
        description:
          "Fostering a learning environment for students and educators.",
      },
      {
        name: "Real Estate",
        description: "Navigating the complexities of the real estate industry.",
      },
      {
        name: "Manufacturing",
        description:
          "Optimizing production processes and ensuring product quality.",
      },
      {
        name: "Transportation",
        description:
          "Efficiently transporting goods and people across various routes.",
      },
      {
        name: "Logistics",
        description: "Coordinating the movement of goods through supply chains.",
      },
      {
        name: "Media",
        description:
          "Engaging audiences through creative and impactful media content.",
      },
      {
        name: "Entertainment",
        description:
          "Entertaining and captivating audiences with diverse entertainment experiences.",
      },
    ];
  
    return (
        <div className="inCarasol">
          <h1>Industry</h1>
          <div className="carasoulMarqueeContainer">
            <div className="carasoulContainer">
              <ul className="inList noListStyle">
                {industriesData.map((industry, index) => (
                  <li key={index} className="inCard">
                    {svgContent}
                    <h2>{industry.name}</h2>
                    {industry.description}
                  </li>
                ))}
              </ul>
              <ul className="inList noListStyle">
                {industriesData.map((industry, index) => (
                  <li key={index} className="inCard">
                    {svgContent}
                    <h2>{industry.name}</h2>
                    {industry.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    );
  };

  
export default Industry;


const svgContent = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
    </svg>
  );