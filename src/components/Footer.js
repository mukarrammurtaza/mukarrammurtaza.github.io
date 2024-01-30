import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CrootiveLogo from "./HeaderComponents/CrootiveLogo";

const Footer = () => {
  const [year] = React.useState(new Date().getFullYear());
  const [Ref, InView] = useInView({
    triggerOnce: false,
  });
  const sectionVariants = {
    hidden: { opacity: 0, y : 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.footer className="footer"
    variants={sectionVariants}
    initial="hidden"
    animate={InView ? "visible" : "hidden"}
    ref={Ref}
    >
      <section className="footerTop">
        <div className="footerDet">
            <CrootiveLogo />
          <ul className="footerLiItems noListStyle">
            
          <li>
            <Link to="mailto:crootive@gmail.com?" className="colorlessLink">
                <i className="fa-brands fa-google"></i>&nbsp;&nbsp; Email
              
            </Link>
            </li>
              <li>
            <Link
              to={"https://www.linkedin.com/company/crootive-co/about/"}
              className="colorlessLink"
            >
                <i className="fa-brands fa-square-facebook"></i>&nbsp;&nbsp;
                Linkedin
            </Link>
              </li>
              <li>
            <Link
              to={
                "https://www.instagram.com/crootive?igshid=MzRlODBiNWFlZA%3D%3D"
              }
              className="colorlessLink"
            >
                <i className="fa-brands fa-instagram"></i>&nbsp;&nbsp; Instagram
            </Link>
              </li>
              <li>
            <Link to={"https://api.whatsapp.com"} className="colorlessLink">
                <i className="fa-brands fa-whatsapp"></i>&nbsp;&nbsp; Whatsapp
            </Link>
              </li>
          </ul>
        </div>
        <div className="footerDet">
          <h3>Help & Information</h3>
          <ul className="footerLiItems noListStyle">
            <li>Track Project</li>
            <li>Contact Support</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="footerDet">
          <h3>More From Crootive</h3>
          <ul className="footerLiItems noListStyle">
            <li>Edit Your Files</li>
            <li>Generate Covers</li>
            <li>Get a Quote</li>
          </ul>
        </div>
      </section>

      <section className="footerBottom">
        <p className="copyrightText">
          Copyright &copy; {year} Crootive. All rights resevred
        </p>
        <span className="rulesLinks">
          <Link to={"/TermsAndConditions"} className="colorlessLink">
            Terms & Conditions
          </Link>
          |
          <Link to={"/PrivacyAndPolicy"} className="colorlessLink">
            Privacy & Policy
          </Link>
        </span>
      </section>
    </motion.footer>
  );
};

export default Footer;
