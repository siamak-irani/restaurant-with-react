import React, { useCallback, useContext } from "react";

import classes from "./MyOrders.module.css";
import OrdersContext from "../../store/orders-context";
import FoodItem from "../../assests/FoodItem";
import { useLocation } from "react-router-dom";

const MyOrders = () => {
  const ordersCtx = useContext(OrdersContext);
  const my_orders = ordersCtx.orders;


  return (
    <div className={classes["my-orders"]}>
      {my_orders.length === 0 && (
        <p>لیست شما خالی است. از بخش منو میتوانید غذا خود را سفارش دهید!</p>
      )}
      {my_orders.map((order) => {
        return (
          <FoodItem
            id={order.id}
            key={order.title}
            title={order.title}
            src={order.src}
            score={order.score}
            price={order.price}
            btnAction="delete"
            quantity={order.quantity || null}
          />
          
        );
      })}
    </div>
  );
};

export default MyOrders;
