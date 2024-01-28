import React, { useEffect, useState } from "react";

import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {

  return (
    <nav className={classes["nav"]}>
      <ul>
        <li>
          <Link to="/">خانه</Link>
        </li>
        <li>
          <Link to="/orders">سفارش شما</Link>
        </li>
        <li>
          <a href="#">خدمات</a>
        </li>
        <li>
          <Link to="categories">منو</Link>
        </li>
        <li>
          <a href="#">درباره ما</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
