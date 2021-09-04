import React from "react";
import styles from "./Products.module.css";
const Product = (props) => {
  return (
    <div className={styles.product}>
      <img src={props.image} alt="picture placeholder" />
      <div className={styles.label}>{props.label}</div>
    </div>
  );
};

export default Product;
