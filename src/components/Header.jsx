import React, { useContext } from "react";
import styles from "./Header.module.css";
import { UserContext } from "./Contexts/UserContext";
const Header = (props) => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div className={styles.Header}>
      <div className={styles.Left}>Medenjaci</div>
      <div className={styles.Right}>
        <p>Контакт Пере Велимировића 8</p>
        <p>E пошта: medenjaci@gmail.com </p>
        <p>тел: 0641234568</p>
        {user.role}
      </div>
    </div>
  );
};

export default Header;
