import React, { useState, useEffect } from "react";
import styles from "./Orders.module.css";
import styled from "styled-components";

import btn_approve from "../assets/btn_approve.png";
import btn_reject from "../assets/btn_reject.png";
import icon_filter from "../assets/icon_filter.png";
import { getOrders, deleteOrder } from "../api/usersServices";
import OrderDetails from "./OrderDetails";
import { useHistory } from "react-router-dom";
const Orders = () => {
  let [orders, setOrders] = useState(
    getOrders().filter((order) => order.status == "unresolved")
  );
  let [filter, setFilter] = useState("unresolved");
  let [isClicked, setIsClicked] = useState(false);
  let [showExtraFilter, setShowExtraFilter] = useState(false);
  let history = useHistory();
  let clickedOrderId;

  const clear = () => {
    setIsClicked(false); //show details
  };
  useEffect(() => {
    orders = getOrders();
  });
  return (
    <>
      {/* {isClicked && (
        <div className={styles.clear} onClick={clear}>
          <OrderDetails
            func={setIsClicked}
            orderId={clickedOrderId}
            orders
          ></OrderDetails>
        </div>
      )} */}
      <div className={styles.Orders}>
        <div
          style={{ verticalAlign: "middle" }}
          onClick={() => {
            setShowExtraFilter(!showExtraFilter);
          }}
        >
          <img className={styles.image_button} src={icon_filter}></img>
        </div>
        {showExtraFilter && (
          <div
            className="t"
            onClick={() => {
              setShowExtraFilter(!showExtraFilter);
            }}
          >
            <select
              value={filter}
              name="status"
              id="status"
              onChange={(e) => {
                setFilter(e.target.value);
                if (e.target.value != "all") {
                  setFilter(e.target.value);
                  setOrders(
                    orders.filter((order) => order.status == e.target.value)
                  );
                } else {
                  setOrders(getOrders()); //TODO: change this
                }
              }}
            >
              <option value="resolved">Resolved</option>
              <option value="unresolved">Unresolved</option>
              <option value="all">All</option>
            </select>
          </div>
        )}
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>ID porudzbine</th>
              <th>Ime</th>
              <th>Prezime</th>
              <th>Telefon</th>
              <th>Adresa</th>
              <th>Email</th>
              <th>Status</th>
              {filter == "unresolved" && <th>Odobri</th>}
              {filter == "unresolved" && <th>Odbij</th>}
            </tr>
            {orders.map((order) => {
              return (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.user.name}</td>
                  <td>{order.user.surname}</td>
                  <td>{order.user.phone}</td>
                  <td>{order.user.address}</td>
                  <td>{order.user.email}</td>
                  <td>{order.status}</td>
                  {filter == "unresolved" && (
                    <td
                      onClick={(e) => {
                        alert(`Order with order id ${order.id} is approved`);
                        order.status = "resolved";
                        history.push("/orders");
                      }}
                    >
                      <img
                        className={styles.image_button}
                        src={btn_approve}
                        alt="approve"
                      />
                    </td>
                  )}
                  {filter == "unresolved" && (
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
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
