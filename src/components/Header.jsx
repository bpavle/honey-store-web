import React, { useContext } from "react";
import styles from "./Header.module.css";
import { UserContext } from "./Contexts/UserContext";
import { useTranslation } from "react-i18next";
const Header = (props) => {
  const { t, i18n } = useTranslation();
  const [user, setUser] = useContext(UserContext);
  return (
    <div className={styles.Header}>
      <div className={styles.Left}>{t("Honey cookies")}</div>
      <div className={styles.Right}>
        <p>{t("Contact")} Пере Велимировића 8</p>
        <p>{t("Email")}: medenjaci@gmail.com </p>
        <p>{t("Phone")}: 0641234568</p>
      </div>
    </div>
  );
};

export default Header;
