import React, { useState, useEffect } from "react";
import styles from "./Basket.module.css";
import tegla from "../images/tegla.png";
import medenjaci from "../images/medenjaci.png";
const Basket = () => {
  let [total, setTotal] = useState(0);
  let [products, setProducts] = useState([
    {
      id: 1,
      image: tegla,
      label: "Neki tekst",
      info: "Neki duzi info o ovom proizvodu koji se vidi kada se klikne",
      price: 100,
      currency: "din",
      amount: 1,
    },
    {
      id: 2,
      image: medenjaci,
      label: "Neki tekst",
      info: "Neki duzi info o ovom proizvodu koji se vidi kada se klikne",
      price: 100,
      currency: "din",
      amount: 1,
    },
  ]);
  useEffect(() => {
    let tot = 0;
    products.forEach((product) => {
      tot += product.amount * product.price;
    });
    setTotal(tot);
  });

  return (
    <div className={styles.Basket}>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <div style={{ display: "flex" }}>
              <img src={product.image} alt="" />
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
                    style={{ width: "30px", fontSize: 18 }}
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
      <div className={styles.line}></div>
      <div>
        Total ={" "}
        <p style={{ float: "right", color: "red", fontWeight: "bold" }}>
          {total}
        </p>
      </div>
    </div>
  );
};

export default Basket;
