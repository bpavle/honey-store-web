import React, { useState, useEffect ,useContext} from "react";

import styles from "./ProductDetails.module.css";
import Button from "./Common/Button";
import { CartContext } from "./CartContext";
const ProductDetails = ({ id,label, image, price, info }) => {
  let [cart,setCart] = useContext(CartContext);
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

  const addToCart = () => {
    const product = {id: id,
      image: image,
      label: label,
      info: info,
      price: price,
      currency: "din",
      amount: amount,}
    setCart(curr => [...curr,product]);
  }

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
              <Button onClick={addToCart}>Add to Cart</Button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;
