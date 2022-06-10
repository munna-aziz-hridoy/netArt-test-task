import React from "react";
import awardTrophy from "../../asserts/1.png";
import awardImage from "../../asserts/2.png";

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner-image">
        <img src={awardTrophy} alt="" />
      </div>
      <div className="banner-description">
        <h2 className="banner-title">
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h2>
        <ul className="banner-list">
          <li>
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li>
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
        </ul>
        <div className="banner-description-image">
          <img src={awardImage} alt="" />
        </div>
        <p className="banner-details">
          Government of India has awarded the{" "}
          <span className="hight-light">
            "National Energy Conservation Award 2018"
          </span>
          . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
          the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj
          Kumar Singh, Honorable Minister of State.
        </p>
      </div>
    </section>
  );
};

export default Banner;
