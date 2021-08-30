import React from "react";
import styles from "./Employees.module.css";
const Employees = () => {
  return (
    <div className={styles.Employees}>
      <table>
        <tr>
          <th>Ime</th>
          <th>Prezime</th>
          <th>Telefon</th>
          <th>Adresa</th>
          <th>Korisnicko ime</th>
          <th>Obrisi</th>
        </tr>
        <tr>
          <td>Pera</td>
          <td>Peric</td>
          <td>0641234567</td>
          <td>Goricka 82 a</td>
          <td>ppera99</td>
          <td>O</td>
        </tr>
      </table>
    </div>
  );
};

export default Employees;
