import React from "react";
import { Link } from "react-router-dom";

import styles from "./Menu.module.css";
//TODO: Move menuItems to separate file as object
//example:
// export const routes = {
// home: {
// route: '/',
// label: "Home"
// }
// login: {
// route: 'login',
// label: "Login"
// }
// }
const menuItems = [
  "Home",
  "About-us",
  "Orders",
  "My-profile",
  "Employees",
  "Contact",
  "Login",
  "add-employee"
];
const Menu = (props) => {
  return (
    <div className={styles.Menu}>
      {menuItems.map((menuItem) => (
        <div className={styles.menuButton} key={menuItem}>
          <Link to={menuItem} className={styles.menuButtonText}>
            {" "}
            {menuItem}{" "}
          </Link>
        </div>
      ))}
      <Link to={"Cart"} className={styles.menuButtonTextRight}>
        Cart
      </Link>
    </div>
  );
};

export default Menu;
