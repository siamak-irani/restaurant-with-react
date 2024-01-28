import React from "react";

import classes from "./BestMenu.module.css";
import CustomLink from "../../../assests/CustomLink";
import FoodItem from "../../../assests/FoodItem";

import i1 from "../../../files/images/popular-menu-items/ghormeh-sabzi.PNG";
import i2 from "../../../files/images/popular-menu-items/jujeh-kabab.PNG";
import i3 from "../../../files/images/popular-menu-items/pizza.PNG";
import i4 from "../../../files/images/popular-menu-items/zereshkpolo.jpg";
import i5 from "../../../files/images/popular-menu-items/pasta.PNG";
import i6 from "../../../files/images/popular-menu-items/chelokabab.PNG";

const ITEMS = [
  {
    title: "قورمه سبزی",
    image: i1,
    score: {
      count: 543,
      num: 4.9,
    },
    price: "110000",
  },
  {
    title: "جوجه کباب",
    image: i2,
    score: {
      count: 34,
      num: 4.7,
    },
    price: "115000",
  },
  {
    title: "پیتزا مخلوط",
    image: i3,
    score: {
      count: 129,
      num: 4.9,
    },
    price: "150000",
  },
  {
    title: "زرشک پلو با مرغ",
    image: i4,
    score: {
      count: 231,
      num: 4.8,
    },
    price: "110000",
  },
  {
    title: "ماکارونی",
    image: i5,
    score: {
      count: 456,
      num: 4.5,
    },
    price: "70000",
  },
  {
    title: "چلو کباب",
    image: i6,
    score: {
      count: 234,
      num: 4.4,
    },
    price: "125000",
  },
];

const BestMenu = () => {
  return (
    <div className={classes["best-menu"]}>
      <div className={classes["best-menu--title"]}>
        <div className={classes["textarea"]}>
          <h1>محبوب ترین غذا های منو ما</h1>
          <p>
            این ها محبوب ترین غذا ها در منو های ما هستند. هر کدام را دوست دارید
            سفارش دهید.
          </p>
        </div>
        <CustomLink className="see-all">دیدن همه</CustomLink>
      </div>
      <div className={classes["popular-menu"]}>
        {ITEMS.map((item) => {
          return (
            <FoodItem
            id={item.title}
              key={item.title}
              title={item.title}
              src={item.image}
              score={item.score}
              price={item.price}
              btnAction="order"
            />

          );
        })}
      </div>
    </div>
  );
};

export default BestMenu;
