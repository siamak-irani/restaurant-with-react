import React, { useContext } from "react";
import CustomLink from "./CustomLink";
import Button from "../assests/Button";

import classes from "./FoodItem.module.css";
import stars from "../files/images/stars.png";
import OrdersContext from "../store/orders-context";

const FoodItem = (props) => {
  const ordersCtx = useContext(OrdersContext);
  const addOrderHandler = () => {
    const foodItem = {
      id: props.id,
      title: props.title,
      src: props.src,
      score: props.score,
      price: props.price,
    };
    ordersCtx.onAddOrder(foodItem);
  };

  const removeOrderHandler = () => {
    ordersCtx.onRemoveOrder(props.id);
  };

  let btnValue = null;
  switch (props.btnAction) {
    case "delete":
      btnValue = "حذف";
      break;
    case "order":
      btnValue = "سفارش";
      break;
  }
  return (
    <div className={`${classes["food-item"]} ${classes[props.className]}`}>
      <div className={classes["item-image"]}>
        <img src={props.src}></img>
      </div>
      <h1 className={classes["item-title"]}>{props.title}</h1>
      <div className={classes["score"]}>
        <span>({props.score.count})</span>

        <img src={stars}></img>
      </div>
      <div className={classes["price-order-box"]}>
        <div className={classes["price"]}>
          {props.price} <span>تومان</span>
        </div>
        <Button
          onClick={
            props.btnAction === "order" ? addOrderHandler : removeOrderHandler
          }
        >
          {btnValue}
        </Button>
      </div>
    </div>
  );
};

export default FoodItem;
