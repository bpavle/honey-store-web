import React, { useState, useEffect, useContext } from "react";
import styles from "./Cart.module.css";
import Button from "./Common/Button";
import { CartContext } from "./Contexts/CartContext";
import { OrderContext } from "./Contexts/OrderContext";
import { UserContext } from "./Contexts/UserContext";
import { createOrder } from "../api/usersServices";
const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  let [total, setTotal] = useState(0);
  let [user, setUser] = useContext(UserContext);

  useEffect(() => {
    let tot = 0;
    cart.forEach((product) => {
      tot += product.amount * product.price;
    });
    setTotal(tot);
  });

  const updateAmount = (product, newAmount) => {
    setCart(
      cart.map((p) => (p.id == product.id ? { ...p, amount: newAmount } : p))
    );
  };

  const order = () => {
    createOrder({ user: user, cart: cart });
  };
  {
    if (total == 0) {
      return <h1 className={styles.Cart}>Sorry, cart is empty</h1>;
    }
  }
  return (
    <div className={styles.Cart}>
      {cart.map((product) => {
        const onChangeHandler = (e) => {
          updateAmount(product, e.target.value);
        };

        return (
          <div key={product.id}>
            <div style={{ display: "flex" }}>
              <img className={styles.img} src={product.image} alt="" />
              <div>
                <p>{product.label}</p>
                <p>
                  {product.price}
                  {product.currency}
                </p>
                <p>
                  Amount:
                  <input
                    type="number"
                    style={{
                      width: "30px",
                      fontSize: 18,
                      borderRadius: "10px",
                      marginLeft: "1em",
                    }}
                    defaultValue={product.amount}
                    onChange={onChangeHandler}
                  />{" "}
                  = {product.amount * product.price}
                  {product.currency}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <div className={styles.bottom}>
        <div className={styles.line}></div>
        <p style={{ float: "left" }}>Total =</p>
        <p
          style={{
            float: "right",
            marginRight: "1em",
            color: "red",
            fontWeight: "bold",
          }}
        >
          {total}
        </p>
        <Button onClick={order}>Order</Button>
      </div>
    </div>
  );
};

export default Cart;
