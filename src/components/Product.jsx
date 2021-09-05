import React from "react";
import styles from "./Product.module.css";
const Product = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.image} alt="picture placeholder" />
      <div className={styles.label}>{props.label}</div>
    </div>
  );
};

export default Product;
