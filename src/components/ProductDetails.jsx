import React, { useState } from "react";

import styles from "./ProductDetails.module.css";
const ProductDetails = ({ label, image, price, info }) => {
  let [amount, setAmount] = useState(1);
  const onClickHandler = (e) => {
    e.stopPropagation();
  };
  return (
    <div className={styles.container} onClick={onClickHandler}>
      <div className={styles.left}>
        <img src={image} />
      </div>
      <div className={styles.right}>
        <table className={styles.table}>
          <h3>{label}</h3>

          <tr>
            <td>
              <p>{info}</p>
            </td>
          </tr>
          <tr>
            <td>
              <bold>{price} din</bold>
            </td>
          </tr>
          <tr>
            Amount
            <input
              type="number"
              style={{ width: "30px", fontSize: 18 }}
              defaultValue={amount}
            />
          </tr>
          <button>Add to basket</button>
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;
