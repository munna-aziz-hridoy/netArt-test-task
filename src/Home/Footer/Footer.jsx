import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faGlobe } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <h2 className="footer-title">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h2>
        <p className="footer-description-text">
          CHEMICALS & PROCESS
          <span className="devider"></span> POWER{" "}
          <span className="devider"></span> WATER & WASTE WATER{" "}
          <span className="devider"></span> OILS & GAS{" "}
          <span className="devider"></span> PHARMA{" "}
          <span className="devider"></span> SUGARS & DISTILLERIES{" "}
          <span className="devider"></span> PAPER & PULP{" "}
          <span className="devider"></span> MARINE & DEFENCE{" "}
          <span className="devider"></span> METAL & MINING{" "}
          <span className="devider"></span> FOOD & BEVERAGE{" "}
          <span className="devider"></span> PETROCHEMICAL & REFINERIES{" "}
          <span className="devider"></span> SOLAR{" "}
          <span className="devider"></span> BUILDING{" "}
          <span className="devider"></span> HVAC{" "}
          <span className="devider"></span> FIRE FIGHTING{" "}
          <span className="devider"></span> AGRICULTURE & RESIDENTIAL
        </p>
      </div>
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-social">
            <div className="footer-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <p className="footer-social-text">
              toll free <span>1800 200 1234</span>
            </p>
          </div>
          <div className="footer-social">
            <div className="footer-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <p className="footer-social-text">www.facebook.com/cripums</p>
          </div>
          <div className="footer-social">
            <div className="footer-icon">
              <FontAwesomeIcon icon={faGlobe} />
            </div>
            <p className="footer-social-text">www.cripums.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
