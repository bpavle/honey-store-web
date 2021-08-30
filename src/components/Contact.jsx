import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <div className={styles.left}>
        <h2>Pisite nam</h2>
        <label>Your email</label>
        <input type="text" hint="email"></input>
        <input type="text"></input>
        <button>Posalji</button>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Contact;
