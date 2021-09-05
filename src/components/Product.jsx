import React from "react";
import styles from "./Product.module.css";
const Product = (props) => {
  const onClickHandler = () => {
    console.log("Clicked" + props.id);
  };
  return (
    <div className={styles.container} onClick={onClickHandler}>
      <img src={props.image} alt="picture placeholder" />
      <div className={styles.label}>{props.label}</div>
    </div>
  );
};

export default Product;
