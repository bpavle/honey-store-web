import React, { useEffect, useState, useContext } from "react";
import styles from "./Products.module.css";
import Product from "./Product";
import { getProducts } from "../api/productServices.js";
import AddProductBtn from "./AddProductBtn";
import { ProductsContext } from "./Contexts/ProductsContext";
import { ClickContext } from "./Contexts/ClickContext";
const Products = () => {
  let [products, setProducts] = useContext(ProductsContext);
  let [clicked, setClicked] = useContext(ClickContext);
  // useEffect(() => {
  //   setProducts(getProducts());
  // });
  const onClickHandler = () => {
    console.log("Outside click");
    setClicked(false); //show details
  };
  let table_data = products.map(function (product) {
    return (
      <td key={product.id}>
        <Product
          key={product.key}
          label={product.label}
          image={product.image}
          id={product.id}
          price={product.price}
          info={product.info}
          //clicked={clicked}
          currency={product.currency}
        />
      </td>
    );
  });
  const createTable = (elements, number_of_columns) => {
    let data = [];
    let rows = [];
    for (let i = 0; i < elements.length; i++) {
      data.push(elements[i]);

      if ((i + 1) % number_of_columns == 0 || i + 1 == elements.length) {
        let row = <tr key={i}>{data}</tr>;
        data = [];
        rows.push(row);
      }
    }
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  };
  const table = createTable(table_data, 6);
  return (
    <div className={styles.container} onClick={onClickHandler}>
      {table}
      <AddProductBtn></AddProductBtn>
    </div>
  );
};
export default Products;
