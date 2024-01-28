import React from "react";

import classes from "./OurServices.module.css";
import { ReactComponent as LocalShiping } from "../../../files/icons/local_shipping.svg";
import { ReactComponent as Cached } from "../../../files/icons/cached.svg";
import { ReactComponent as FreeDelivery } from "../../../files/icons/free-delivery.svg";

const OurServices = () => {
  return (
    <div className={classes["our-services"]}>
      <div className={classes["service"]}>
        <div className={classes["logo"]}>
          <LocalShiping />
        </div>
        <div className={classes["textarea"]}>
          <h1>تحویل سریع</h1>
          <p>غذای شما در 1 یا 2 ساعت به شما تحویل داده خواهد شد.</p>
        </div>
      </div>
      <div className={classes["service"]}>
        <div className={classes["logo"]}>
          <Cached />
        </div>
        <div className={classes["textarea"]}>
          <h1>غذای تازه</h1>
          <p>
            غذای شما 100% تازه به شما تحویل داده خواهد شد. ما غذای مانده تحویل
            نمیدهیم.
          </p>
        </div>
      </div>
      <div className={classes["service"]}>
        <div className={classes["logo"]}>
          <FreeDelivery />
        </div>
        <div className={classes["textarea"]}>
          <h1>تحویل رایگان</h1>
          <p>
            غذای شما کاملا رایگان تحویل داده خواهد شد. بدون هیچ هزینه ای. فقط
            سفارش دهید و لذت ببرید.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
