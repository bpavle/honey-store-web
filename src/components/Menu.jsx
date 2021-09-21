import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Contexts/UserContext";
import styles from "./Menu.module.css";
const Menu = ({ MenuItems }) => {
  const [user, setUser] = useContext(UserContext);

  return (
    <div className={styles.Menu}>
      {Object.keys(MenuItems).map(function (menuItem) {
        if (MenuItems[menuItem].roles.includes(user.role))
          return (
            <div className={styles.menuButton} key={menuItem}>
              <Link
                to={MenuItems[menuItem].path}
                className={styles.menuButtonText}
              >
                {" "}
                {MenuItems[menuItem].label}{" "}
              </Link>
            </div>
          );
      })}
      {/* <Link to={"Cart"} className={styles.menuButtonTextRight}>
        Cart
      </Link> */}
    </div>
  );
};

export default Menu;
