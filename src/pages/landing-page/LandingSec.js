import React from "react";
import Intro from "./intro-section/Intro";
import HeaderBar from "./header-bar/HeaderBar";

import classes from "./LandingSec.module.css";
import BestCate from "./best-categories/BestCate";
import BestMenu from "./best-menu/BestMenu";
import Discounts from "./discounts/Discounts";
import Footer from "./footer/Footer";

const LandingSec = () => {
  return (
      <section className={classes["landing-sec"]}>
        {/* <HeaderBar /> */}
        <Intro />
        <BestCate />
        <BestMenu />
        <Discounts />
        {/* <Footer /> */}
      </section>
  );
};

export default LandingSec;
