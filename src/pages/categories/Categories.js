import React from "react";

import classes from "./Categories.module.css";
// import chelo_jujeh from "../../files/images/categories/iranian-foods/chelo-jujeh.PNG";
// import chelo_kabab from "../../files/images/categories/iranian-foods/chelo-kabab.PNG";
// import chelo_morgh from "../../files/images/categories/iranian-foods/chelo-morgh.PNG";
// import geymeh from "../../files/images/categories/iranian-foods/geymeh.PNG";
// import ghormeh_sabzi from "../../files/images/categories/iranian-foods/ghormeh-sabzi.PNG";
import FoodItem from "../../assests/FoodItem";
import MoreLink from "./MoreLink";

import { FOODS } from "../../database/data";
// const FOODS = [
//   [
//     {
//       header: "غذاهای ایرانی",
//       class: "iranian-foods",
//       path: "iranian-foods",
//     },
//     {
//       title: "چلو جوجه کباب",
//       src: chelo_jujeh,
//       score: {
//         count: "344",
//         num: "4.5",
//       },
//       price: "120000",
//     },
//     {
//       title: "چلو کباب",
//       src: chelo_kabab,
//       score: {
//         count: "875",
//         num: "4.6",
//       },
//       price: "125000",
//     },
//     {
//       title: "چلو قیمه",
//       src: geymeh,
//       score: {
//         count: "465",
//         num: "4.3",
//       },
//       price: "114000",
//     },
//     {
//       title: "چلو مرغ",
//       src: chelo_morgh,
//       score: {
//         count: "234",
//         num: "4.7",
//       },
//       price: "134000",
//     },
//     {
//       title: "قورمه سبزی",
//       src: ghormeh_sabzi,
//       score: {
//         count: "676",
//         num: "4.9",
//       },
//       price: "129000",
//     },
//   ],
// ];

const Categories = () => {
  return (
    <div className={classes["categories"]}>
      {FOODS.map((category) => {
        return (
          <div
            key={category[0].class}
            className={`${classes["category"]} ${classes[category[0].class]}`}
          >
            <h1>{category[0].header}</h1>
            <div className={`${classes["items"]}`}>
              {category.slice(1, 5).map((food) => {
                return (
                  <FoodItem
                    id={food.title}
                    key={food.title}
                    className="category-row"
                    title={food.title}
                    src={food.src}
                    score={food.score}
                    price={food.price}
                    btnAction="order"
                  />
                );
              })}
              <MoreLink to={category[0].path} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
