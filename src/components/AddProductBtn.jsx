import React, { useState, useContext } from "react";
import styles from "./AddProductBtn.module.css";
import AddProduct from "./AddProduct";
import { UserContext } from "./Contexts/UserContext";
const AddProductBtn = (props) => {
  let [user, setUser] = useContext(UserContext);
  let [isClicked, setIsClicked] = useState(props.clicked);
  const onClickHandler = (e) => {
    e.stopPropagation();
    console.log("Clicked component with id:" + props.id);
    setIsClicked(true);
  };
  const clear = () => {
    setIsClicked(false);
  };
  if (user.role === "ROLE_ADMIN" || user.role === "ROLE_SELLER") {
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
  } else return null;
};

export default AddProductBtn;
