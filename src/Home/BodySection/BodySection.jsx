import React from "react";
import electroicImg from "../../asserts/3.png";

const BodySection = () => {
  return (
    <section className="body-section">
      <p className="body-title">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <div className="body-image">
        <img src={electroicImg} alt="" />
      </div>
      <p className="body-footer">
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
      <div className="red-line"></div>
    </section>
  );
};

export default BodySection;
