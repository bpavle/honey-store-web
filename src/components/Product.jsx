import React, { useState, useEffect, useContext } from "react";
import styles from "./Product.module.css";
import ProductDetails from "./ProductDetails";
import { ClickContext } from "./Contexts/ClickContext";
const Product = (props) => {
  let [clicked, setClicked] = useContext(ClickContext);
  let [isClicked, setIsClicked] = useState(clicked);
  // console.log([isClicked, setIsClicked]);
  const onClickHandler = (e) => {
    e.stopPropagation();
    console.log("Clicked component with id:" + props.id);
    setIsClicked(true); //show details
  };
  const clear = () => {
    setIsClicked(false); //show details
  };
  return (
    <>
      {isClicked && (
        <div className={styles.clear} onClick={clear}>
          <ProductDetails func={setIsClicked} {...props}></ProductDetails>
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
export default Product;
