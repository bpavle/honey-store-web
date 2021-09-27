import React, { useState, useEffect } from "react";
import styles from "./Orders.module.css";
import styled from "styled-components";
import btn_approve from "../assets/btn_approve.png";
import btn_reject from "../assets/btn_reject.png";

import { getOrders, deleteOrder } from "../api/usersServices";
const Orders = () => {
  let [orders, setOrders] = useState(getOrders());
  return (
    <div className={styles.Orders}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>ID porudzbine</th>
            <th>Ime</th>
            <th>Prezime</th>
            <th>Telefon</th>
            <th>Adresa</th>
            <th>Korisnicko ime</th>
            <th>Odobri</th>
            <th>Odbij</th>
          </tr>
          {orders.map((order) => {
            return (
              <tr key={order.id}>
                <td>{order.user.id}</td>
                <td>{order.user.name}</td>
                <td>{order.user.surname}</td>
                <td>{order.user.phone}</td>
                <td>{order.user.address}</td>
                <td>{order.user.email}</td>
                <td
                  onClick={() => {
                    console.log(
                      `TO BE IMPLEMENTED. Approving order:${order.id}`
                    );
                  }}
                >
                  <img
                    className={styles.image_button}
                    src={btn_approve}
                    alt="approve"
                  />
                </td>
                <td
                  //reject order
                  onClick={() => {
                    deleteOrder(order)
                      ? setOrders(orders.filter((e) => e.id != order.id)) //ZASTO SE OVA KOMPONENTA NE RENDERUJE KAD JOJ JE PROMENJEN STEJT OVAKO setOrders(getOrders())
                      : alert("Something went wrong with deleting order");
                    console.log(orders);
                  }}
                >
                  <img
                    className={styles.image_button}
                    src={btn_reject}
                    alt="approve"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
