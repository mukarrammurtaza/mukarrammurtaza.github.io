import React from "react";
import { Link } from "react-router-dom";
import CrootiveLogo from "./HeaderComponents/CrootiveLogo";

const Footer = () => {
  const [year] = React.useState(new Date().getFullYear());

  return (
    <footer className="footer">
      <section className="footerTop">
        <div className="footerDet">
          <Link to={"/"} className="colorlessLink">
            <CrootiveLogo />
          </Link>
          <ul className="footerLiItems noListStyle">
            <Link to="mailto:crootive@gmail.com?" className="colorlessLink">
              <li>
                <i className="fa-brands fa-google"></i>&nbsp;&nbsp; Email
              </li>
            </Link>
            <Link
              to={"https://www.linkedin.com/company/crootive-co/about/"}
              className="colorlessLink"
            >
              <li>
                <i className="fa-brands fa-square-facebook"></i>&nbsp;&nbsp;
                Linkedin
              </li>
            </Link>
            <Link
              to={
                "https://www.instagram.com/crootive?igshid=MzRlODBiNWFlZA%3D%3D"
              }
              className="colorlessLink"
            >
              <li>
                <i className="fa-brands fa-instagram"></i>&nbsp;&nbsp; Instagram
              </li>
            </Link>
            <Link to={"https://api.whatsapp.com"} className="colorlessLink">
              <li>
                <i className="fa-brands fa-whatsapp"></i>&nbsp;&nbsp; Whatsapp
              </li>
            </Link>
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
    </footer>
  );
};

export default Footer;
