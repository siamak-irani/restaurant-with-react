import React, { useState } from "react";

const OrdersContext = React.createContext({
  ordersNum: 0,
  orders: [],
  addOrderHandler: (newOrder) => {},
  removeOrderHandler: (id) => {},
});

export const OrdersContextProvider = (props) => {
  const [ordersNumber, setOrdersNumber] = useState(0);
  const [orders, setOrders] = useState([]);

  const addOrderHandler = (newOrder) => {
    setOrders((prevOrders) => {
      return [...prevOrders, newOrder];
    });
    setOrdersNumber(orders.length);
  };

  const removeOrderHandler = (id) => {
    const newOrders = orders.filter((obj) => {
      return obj.id !== id;
    });
    setOrders(newOrders);
    setOrdersNumber(orders.length);
  };

  return (
    <OrdersContext.Provider
      value={{
        ordersNum: ordersNumber,
        orders: orders,
        onAddOrder: addOrderHandler,
        onRemoveOrder: removeOrderHandler,
      }}
    >
      {props.children}
    </OrdersContext.Provider>
  );
};

export default OrdersContext;
