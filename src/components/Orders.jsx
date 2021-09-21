import React, { useState, useEffect } from "react";
import styles from "./Orders.module.css";
import styled from "styled-components";
const Orders = () => {
  let [orders, setOrders] = useState([
    {
      id: "33182020",
      name: "Pera",
      surname: "Peric",
      phone: "0641234567",
      address: "Goricka 82 a",
      username: "ppera99",
    },
  ]);
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
              <tr key={order.username}>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.surname}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>{order.username}</td>
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
