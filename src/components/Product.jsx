import React, { useState, useEffect } from "react";
import styles from "./Product.module.css";
import ProductDetails from "./ProductDetails";
const Product = (props) => {
  let [isClicked, setIsClicked] = useState(false);
  const onClickHandler = () => {
    console.log("Clicked component with id:" + props.id);
    setIsClicked(true);
  };
  const clear = () => {
    setIsClicked(false);
  };
  if (isClicked) {
    return (
      <>
        <div className={styles.clear} onClick={clear}>
          <ProductDetails></ProductDetails>
        </div>
        <div className={styles.container} onClick={onClickHandler}>
          <img src={props.image} alt="picture placeholder" />
          <div className={styles.label}>{props.label}</div>
          <div className={styles.price}>{props.price}</div>
        </div>
      </>
    );
  }

  return (
    <div className={styles.container} onClick={onClickHandler}>
      <img src={props.image} alt="picture placeholder" />
      <div className={styles.label}>{props.label}</div>
      <div className={styles.price}>{props.price}</div>
    </div>
  );
};

export default Product;
