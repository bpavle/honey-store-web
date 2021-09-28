import React, { useState } from "react";
import styles from "./OrderDetails.module.css";
import Button from "./Common/Button";
import { getOrders, deleteOrder } from "../api/usersServices";

const OrderDetails = (props) => {
  let [order, setOrder] = useState(
    getOrders().find((o) => o.id === props.orderId)
  );
  const send = () => {
    alert(`Order ${order.id} resolved`);
  };
  const onClickHandler = (e) => {
    e.stopPropagation();
  };
  return (
    <div className={styles.container} onClick={onClickHandler}>
      <div className={styles.left}>{order.id}</div>
      <div className={styles.right}>
        <table className={styles.table}>
          <tbody>
            <tr id={styles.product_name} colSpan="4"></tr>
            <tr>
              <td colSpan="4">
                <p></p>
              </td>
            </tr>
            <tr>
              <td>
                <b> din</b>
              </td>
            </tr>
            <tr>
              <td>Amount</td>
              <td>
                <input
                  type="number"
                  style={{ width: "30px", fontSize: 18 }}
                  defaultValue={1}
                />
              </td>
              <td></td>
              <td>
                <Button onClick={send}>Send</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetails;
