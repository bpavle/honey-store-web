import React, { useState, useEffect } from "react";

import styles from "./ProductDetails.module.css";
const ProductDetails = ({ label, image, price, info }) => {
  let [amount, setAmount] = useState(1);
  let [total, setTotal] = useState(amount * price);
  const onClickHandler = (e) => {
    e.stopPropagation();
  };
  const onChangeHandler = (e) => {
    console.log(e);
    setAmount(e.target.value);
  };
  useEffect(() => {
    setTotal(amount * price);
  });

  return (
    <div className={styles.container} onClick={onClickHandler}>
      <div className={styles.left}>
        <img src={image} />
      </div>
      <div className={styles.right}>
        <table className={styles.table}>
          <h3>{label}</h3>

          <tr>
            <td colspan="4">
              <p>{info}</p>
            </td>
          </tr>
          <tr>
            <td>
              <b>{price} din</b>
            </td>
          </tr>
          <tr>
            <td>Amount</td>
            <td>
              <input
                type="number"
                style={{ width: "30px", fontSize: 18 }}
                defaultValue={amount}
                onChange={onChangeHandler}
              />
            </td>
            <td>= {total}</td>
            <td>
              <button className={styles.button}>Add to basket</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;
