import React, { useState, useEffect, useContext } from "react";
import styles from "./Cart.module.css";
import Button from "./Common/Button";
import { CartContext } from "./CartContext";
const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  let [total, setTotal] = useState(0);

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
        <Button>Order</Button>
      </div>
    </div>
  );
};

export default Cart;
