import React from "react";
import HeaderBar from "./landing-page/header-bar/HeaderBar";
import { Outlet } from "react-router-dom";
import Footer from "./landing-page/footer/Footer";

import classes from "./Root.module.css";

const Root = () => {
  return (
    <div className={classes["root"]}>
      <HeaderBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
