import React from "react";

import classes from "./CustomLink.module.css";
import { Link } from "react-router-dom";

const CustomLink = (props) => {
  return (
    <div className={classes["link-wrapper"]}>
      <Link
        to={props.to}
        className={`${classes["link"]} ${classes[props.className]}`}
      >
        {props.children}
      </Link>
    </div>
  );
};

export default CustomLink;

