import React from "react";
import "./Home.css";
import logo from "../asserts/logo.png";

import Banner from "./Banner/Banner";
import BodySection from "./BodySection/BodySection";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <>
      <header>
        <nav className="nab-bar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </nav>
      </header>
      <main>
        <body>
          <Banner />
          <BodySection />
        </body>
      </main>
      <Footer />
    </>
  );
};

export default Home;
