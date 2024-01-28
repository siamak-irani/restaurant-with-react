import React, { useEffect, useState } from "react";

import classes from "./Categories.module.css";
// import chelo_jujeh from "../../files/images/categories/iranian-foods/chelo-jujeh.PNG";
// import chelo_kabab from "../../files/images/categories/iranian-foods/chelo-kabab.PNG";
// import chelo_morgh from "../../files/images/categories/iranian-foods/chelo-morgh.PNG";
// import geymeh from "../../files/images/categories/iranian-foods/geymeh.PNG";
// import ghormeh_sabzi from "../../files/images/categories/iranian-foods/ghormeh-sabzi.PNG";
import FoodItem from "../../assests/FoodItem";
import MoreLink from "./MoreLink";

import { FOODS } from "../../database/data";

const Categories = () => {
  const [notification, setNotification] = useState([]);
  const [timeoutsId, setTimeoutsId] = useState([]);

  const removeNotif = (id) => {
    setNotification((prev) => prev.filter((notif) => id !== notif.id));
  };

  const addNotif = (msg) => {
    const id = Math.floor(Math.random() * 1000000);
    setNotification((prev) => [{ msg, id }, ...prev]);

    const timeoutId = setTimeout(() => {
      removeNotif(id);
    }, 2000);
    setTimeoutsId((prev) => [...prev, timeoutId]);
  };

  useEffect(() => {
    return () => {
      timeoutsId.forEach((id) => clearTimeout(id));
    };
  }, []);

  return (
    <div className={classes["categories"]}>
      <div className={`${classes["notification"]}`} style={{position:"absolute", left:"1rem"}}>
        {notification.map((n, index) => {
          return (
            <div
              style={{
                fontSize:"14px",
                background: "green",
                color: "white",
                borderRadius: "5px",
                width: "fit-content",
                padding: "3px 5px",
                margin: "3px 0",
              }}
              key={index}
            >
              اضافه شد
            </div>
          );
        })}
      </div>

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
                    addNotif={addNotif}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
