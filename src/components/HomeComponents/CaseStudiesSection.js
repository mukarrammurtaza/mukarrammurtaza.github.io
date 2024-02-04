import SwiftImg from "../../assets/SwiftImg.JPG";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const CaseStudiesSection = () => {
  // Array of objects representing data for each csCarasolItem
  const caseStudiesData = [
    {
      imageUrl: SwiftImg,
      itemText: "HRMS",
      itemCompany: "Swift Delivery",
      link: "/Work/SwiftDelivery",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      itemText: "PROMO PAGE",
      itemCompany: "Polestar",
      link: "/Work/SwiftDelivery",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      itemText: "PROMO PAGE",
      itemCompany: "Polestar",
      link: "/Work/SwiftDelivery",
    },
  ];

  const [csRef, csInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const carasolItem = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="section sectionCaseStudies">
      <aside className="csAside">
        <p>
          1 <span className="setGreen">&mdash;</span> 5 &nbsp;
        </p>
        <h2>Case Studies</h2>
      </aside>
      <div className="csCarasol" ref={csRef}>
        {caseStudiesData.map((item, index) => (
          <motion.div
            key={index}
            className="csCarasolItem"
            variants={carasolItem}
            initial="hidden"
            animate={csInView ? "visible" : "hidden"}
          >
            {/* <Link to={item.link} className='csImgContainer'>
                <img src={item.imageUrl} alt={item.itemCompany} />
              </Link> */}
            <Link
              to={item.link}
              className="csImgContainer colorlessLink"
              aria-label={item.itemText}
              title={item.itemText}
            >
              <img src={item.imageUrl} alt={item.itemText} />
              <span className="linkOverlay">
              <p>READ MORE</p>
              </span>
              <svg
                className="linkArrow"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </Link>
            <div className="itemInfo">
              <p className="fadeItemText">{item.itemText}</p>
              <h3 className="itemCompany">{item.itemCompany}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesSection;
