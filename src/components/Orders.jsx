import React, { useState, useEffect } from "react";
import styles from "./Orders.module.css";
import styled from "styled-components";
import { getOrders } from "../api/usersServices";
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
              <tr key={order.user.id}>
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
                  O
                </td>
                <td
                  //reject order
                  onClick={() => {
                    setOrders(
                      orders.filter((e) => order.username != e.username)
                    );
                  }}
                >
                  O
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
