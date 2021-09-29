import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Contexts/UserContext";
import styles from "./Menu.module.css";
import { useTranslation } from "react-i18next";
import flag_rs from "../assets/flag-rs.png";
import flag_en from "../assets/flag-en.png";

const Menu = ({ MenuItems }) => {
  let [flag, setFlag] = useState(flag_rs);
  const [user, setUser] = useContext(UserContext);
  let { t, i18n } = useTranslation();
  return (
    <div className={styles.Menu}>
      {Object.keys(MenuItems).map(function (menuItem) {
        if (MenuItems[menuItem].roles.includes(user.role))
          return (
            <div
              className={
                MenuItems[menuItem].right
                  ? styles.menuButtonRight
                  : styles.menuButton
              }
              key={menuItem}
            >
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
      <img
        src={flag}
        className={styles.image_button}
        onClick={() => {
          if (flag == flag_en) {
            setFlag(flag_rs);
            i18n.changeLanguage("rs");
          } else {
            setFlag(flag_en);
            i18n.changeLanguage("en");
          }
        }}
      ></img>
    </div>
  );
};

export default Menu;
