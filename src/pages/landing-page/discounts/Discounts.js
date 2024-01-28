import React from "react";

import image1 from "../../../files/images/discount/1.PNG";
import image2 from "../../../files/images/discount/2.PNG";
import image3 from "../../../files/images/discount/3.PNG";

import classes from "./Discounts.module.css";

const Discounts = () => {
  return (
    <div className={classes["discounts-wrapper"]}>
      <img className={`${classes["discount"]} ${classes["image1"]}`} src={image1}></img>
      <img className={`${classes["discount"]} ${classes["image2"]}`} src={image2}></img>
      <img className={`${classes["discount"]} ${classes["image3"]}`} src={image3}></img>
    </div>
  );
};

export default Discounts;
