import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import Button from "./Common/Button";
import { CartContext } from "./Contexts/CartContext";
import { UserContext } from "./Contexts/UserContext";
const ProductDetails = ({ id, label, image, price, info, func }) => {
  let [user, setUser] = useContext(UserContext);
  let [cart, setCart] = useContext(CartContext);
  let [amount, setAmount] = useState(1);
  let [total, setTotal] = useState(amount * price);
  let history = useHistory();
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
    if (!user.isLoggedIn) {
      alert("You must be logged in to shop");

      history.push("/login");
    }
    const product = {
      id: id,
      image: image,
      label: label,
      info: info,
      price: price,
      currency: "din",
      amount: amount,
    };
    setCart((curr) => [...curr, product]); // CHECK PRODUCT ID IF IT ALREADY EXIST, JUST INCREMENT, DONT ADD SAME PRODUCT
    func(false);
  };

  return (
    <div className={styles.container} onClick={onClickHandler}>
      <div className={styles.left}>
        <img src={image} />
      </div>
      <div className={styles.right}>
        <table className={styles.table}>
          <tbody>
            <tr id={styles.product_name} colSpan="4">
              {label}
            </tr>
            <tr>
              <td colSpan="4">
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;
