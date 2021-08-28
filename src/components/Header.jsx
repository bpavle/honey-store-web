import React from "react";
import styles from "./Header.module.css";
const Header = (props) => {
  return (
    <div className={styles.Header}>
      <div className={styles.Left}>Medenjaci</div>
      <div className={styles.Right}>
        <p>Контакт Пере Велимировића 8</p>
        <p>E пошта: medenjaci@gmail.com </p>
        <p>тел: 0641234568</p>
      </div>
    </div>
  );
};

export default Header;
