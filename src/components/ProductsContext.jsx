import React, { useState } from "react";

export const ProductsContext = React.createContext();

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductsContext.Provider>
  );
};
