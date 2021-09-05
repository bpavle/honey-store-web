import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import Product from "./Product";
import tegla from "./../images/tegla.png";
import { getProducts } from "./../api/getProducts.js";
const Products = () => {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(getProducts());
    // console.log("Products" + JSON.stringify(products));
  });
  let table_data = products.map(function (product) {
    return (
      <td>
        <Product label={product.label} image={product.image} />
      </td>
    );
  });
  const createTable = (elements, number_of_columns) => {
    let data = [];
    let rows = [];
    for (let i = 0; i < elements.length; i++) {
      data.push(elements[i]);

      if ((i + 1) % number_of_columns == 0 || i + 1 == elements.length) {
        let row = <tr>{data}</tr>;
        data = [];
        rows.push(row);
      }
    }
    return <table>{rows}</table>;
  };
  const table = createTable(table_data, 3);
  return <div className={styles.container}>{table}</div>;
};
export default Products;
