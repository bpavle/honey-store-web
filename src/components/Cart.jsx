import React, { useState, useEffect,useContext } from "react";
import styles from "./Cart.module.css";
import Button from "./Common/Button";
import {CartContext} from "./CartContext"
const Cart = () => {
  const [cart,setCart] = useContext(CartContext)
  let [total, setTotal] = useState(0);
  let [products, setProducts] = useState(cart)

  useEffect(() => {
    let tot = 0;
    products.forEach((product) => {
      tot += product.amount * product.price;
    });
    setTotal(tot);
  });

  return (
    <div className={styles.Cart}>
      {products.map((product) => {
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
                    onChange={(e) => {
                      setProducts(
                        products.map((p) =>
                          p.id == product.id
                            ? { ...p, amount: e.target.value }
                            : p
                        )
                      );
                    }}
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
