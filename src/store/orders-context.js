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
    let exsitingOrder = orders.find((order) => order.id === newOrder.id);
    if (!exsitingOrder) {
      setOrders((prev) => {
        return [...prev, { ...newOrder, quantity: 1 }];
      });
    } else {
      exsitingOrder.quantity++;
      // setOrders((prevOrders) => {
      //   return [...prevOrders, newOrder];
      // });
    }
    setOrdersNumber(orders.length);
  };

  const removeOrderHandler = (id) => {
    setOrders((prev) => {
      const oldOrders = [...prev];

      
      const exsitingOrder = oldOrders.find((order) => order.id === id);
      const otherOrders = oldOrders.filter((order) => order.id !== id);

      if (exsitingOrder.quantity === 1)
        return oldOrders.filter((order) => order.id !== id);
      //here
      else exsitingOrder.quantity--;

      return oldOrders;
    });

    // const newOrders = orders.filter((obj) => {
    //   return obj.id !== id;
    // });
    // setOrders(newOrders);

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
