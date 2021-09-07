import React, { useState, useEffect } from "react";
import styles from "./Product.module.css";
import ProductDetails from "./ProductDetails";
const Product = (props) => {
  let [isClicked, setIsClicked] = useState(props.clicked);
  const onClickHandler = (e) => {
    e.stopPropagation();
    console.log("Clicked component with id:" + props.id);
    setIsClicked(true);
  };
  const clear = () => {
    setIsClicked(false);
  };
  return (
    <>
      {isClicked && (
        <div className={styles.clear} onClick={clear}>
          <ProductDetails {...props}></ProductDetails>
        </div>
      )}
      <div className={styles.container} onClick={onClickHandler}>
        <img src={props.image} alt="picture placeholder" />
        <div className={styles.label}>{props.label}</div>
        <div className={styles.price}>
          <b>
            {props.price} {props.currency}
          </b>
        </div>
      </div>
    </>
  );
};
// const clickOutsideConfig = {
//   handleClickOutside: () => Product.handleClickOutside,
// };
export default Product;
