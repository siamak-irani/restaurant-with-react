import React from "react";
import OurServices from "./OurServices";

import classes from "./Intro.module.css";
import { ReactComponent as ShoppingBag } from "../../../files/icons/shopping_bag.svg";
import jujeh from "../../../files/images/jooj.png";

const Intro = () => {
  return (
    <div className={classes["intro"]}>
      <div className={classes["intro--title"]}>
        <div className={classes["textarea"]}>
          <h1>بهترین غذا های ایرانی و خارجی در غذاکو در دسترس است!</h1>
          <h2>هر موقع هوس کنید، تنها یک کلیک با انواع غذاها فاصله دارید</h2>
          <a href="#" className={classes["buy-now"]}>
            <div className={classes["img"]}>
              <ShoppingBag className={classes["shoping-bag"]} />
            </div>
            <div className={"text"}>سفارش دهید</div>
          </a>
        </div>
        <div className={classes["images"]}>
          <img src={jujeh}></img>
        </div>
      </div>
      <OurServices />
    </div>
  );
};

export default Intro;
