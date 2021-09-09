import React, { useState } from "react";
import styles from "./AddProductBtn.module.css";
import AddProduct from "./AddProduct";
const AddProductBtn = (props) => {
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
          <AddProduct />
        </div>
      )}
      <button className={styles.button} onClick={onClickHandler}>
        +
      </button>
    </>
  );
};

export default AddProductBtn;
