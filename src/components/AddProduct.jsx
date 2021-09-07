import React from "react";
import styles from "./AddProduct.module.css";
const AddProduct = () => {
  const onClickHandler = () => {
    //show form
    console.log("Clicked on AddProduct");
  };
  return (
    <button className={styles.button} onClick={onClickHandler}>
      +
    </button>
  );
};

export default AddProduct;
