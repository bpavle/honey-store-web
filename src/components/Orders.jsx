import React from "react";
import styles from "./Orders.module.css";
const Orders = () => {
  return (
    <div className={styles.Orders}>
      <table>
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
        <tr>
          <td>33182020</td>
          <td>Pera</td>
          <td>Peric</td>
          <td>0641234567</td>
          <td>Goricka 82 a</td>
          <td>ppera99</td>
          <td>D</td>
          <td>O</td>
        </tr>
      </table>
    </div>
  );
};

export default Orders;
