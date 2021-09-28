import React, { useState } from "react";

export const OrderContext = React.createContext();

export const OrderProvider = (props) => {
  const [order, setCart] = useState([]);
  return (
    <OrderContext.Provider value={[order, setCart]}>
      {props.children}
    </OrderContext.Provider>
  );
};
