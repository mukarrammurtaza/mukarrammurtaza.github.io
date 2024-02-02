import React from 'react'
import { motion } from 'framer-motion';
import DynamicHtmlCreator from './../components/OurWorkComponents/DynamicHtmlCreator';
import '../styles/Home.css';
import { useParams } from 'react-router-dom';

const OurWork = () => {

  const params = useParams();
  console.log(params.case)

  const htmlBeforeImages = [
    ["h2", "Overview", "sdHead"],
    [ "br" ],
    ["p", "Any task that can be automated should be automated, and that is exactly our objective.", "sdObjective"],
    [ "br" ],
    [ "p", "Failing to implement automation in your business leads to poor performance and results. Before working with us, the client used Excel, Google sheets and manual filing to store all of their HR data.", "sdDetails" ],
    [ "p", "Although this was manageable in the beginning, it became more difficult with time. As the company grew, the chances of errors and mistakes increased with the growing paperwork. Which is why our client approached us.", "sdDetails"  ],
    [ "p", "They needed a custom-built HR software that fulfilled their needs and was within their budget. After the initial meeting, the development plan was shared with the client.", "sdDetails"  ],
    [ "br" ],
    ["p", "The development plan was as follows:"],
    [ "br" ],
    ["ul", [
      ["li", "Scope of Work Contract and Non-Disclosure Agreement"],
      ["li", "Requirement Engineering"],
      ["li", "Concept Design (UXUI)"],
      ["li", "Back End Development"],
      ["li", "Front End Development"],
      ["li", "Testing"],
      ["li", "Launch"]
    ], "sdList"],
  ];
  const htmlAfterImages = [
    ["h2", "Results", "sdHead"],
    [ "br" ],
    ["p", "Shifting from manual work to automation always brings positive results as it reduces human error, increases productivity and makes everyday tasks efficient. And this was the case with our client.", "sdDetails" ],
    [ "br" ],
    [ "p", "After gathering data from them, the following results were found:" ],
    [ "br" ],
    ["ul", [
      ["li", "Efficiency Increased by 40% "],
      ["li", "Staff productivity Increased by 35%"],
      ["li", "Paper Usage decreased by 65%"],
    ], "sdList"]
  ];

  return (
    <motion.main className='owContent' 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <h1 className='owHeader'>Case Study: HRMS For {params.case}</h1>
    <DynamicHtmlCreator elements={htmlBeforeImages} />
    <div className='owImages'>
      <img src="https://images.pexels.com/photos/117729/pexels-photo-117729.jpeg?auto=compress&cs=tinysrgb&w=600" alt="alt" />
      <img src="https://images.pexels.com/photos/117729/pexels-photo-117729.jpeg?auto=compress&cs=tinysrgb&w=600" alt="alt" />
    </div>
    <DynamicHtmlCreator elements={htmlAfterImages} />
    </motion.main>
  )
}

export default OurWork