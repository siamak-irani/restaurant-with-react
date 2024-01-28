import React from "react";

import classes from "./BestCate.module.css";
import chelo from "../../../files/images/chelo-kabab.PNG";
import fast_food from "../../../files/images/hamburger.jpg";
import polo from "../../../files/images/sabzi-polo.jpg";
import { ReactComponent as ArrowBack } from "../../../files/icons/arrow_back.svg";

const BestCate = () => {
  return (
    <div className={classes["best-cate"]}>
      <div className={classes["best-cate--title"]}>
        <h1>محبوب ترین دسته بندی ها</h1>
        <p>
          این ها تعدادی از محبوب ترین دسته بندی های ماست. اگر میخواهید میتوانید
          از اینجا سفارش دهید.
        </p>
      </div>
      <div className={classes["categories"]}>
        <div className={classes["category"]}>
          <div className={classes["image"]}>
            <img src={chelo} alt="چلو"></img>
          </div>
          <h1>چلو</h1>
          <a href="#">
            <div className={classes["text"]}>سفارش دهید</div>
            <ArrowBack className={classes["arrow-back"]} />
          </a>
        </div>
        <div className={classes["category"]}>
          <div className={classes["image"]}>
            <img src={fast_food} alt="فست فود"></img>
          </div>
          <h1>فست فود</h1>
          <a href="#">
            <div className={classes["text"]}>سفارش دهید</div>
            <ArrowBack className={classes["arrow-back"]} />
          </a>
        </div>
        <div className={classes["category"]}>
          <div className={classes["image"]}>
            <img src={polo} alt="پلو"></img>
          </div>
          <h1>پلو</h1>
          <a href="#">
            <div className={classes["text"]}>سفارش دهید</div>
            <ArrowBack className={classes["arrow-back"]} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BestCate;
