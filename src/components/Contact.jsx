import React from "react";
import styles from "./Contact.module.css";
import Button from "./Common/Button";
import { useTranslation } from "react-i18next";
const mapStyle = {};
const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.Contact}>
      <div className={styles.left}>
        <form>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>
                  {" "}
                  <h2>{t("Contact us")}</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="email">Your email</label>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" placeholder="email" id="email"></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="textarea">{t("Content")}</label>
                </td>
              </tr>
              <tr>
                <td>
                  <textarea id="textarea" type="text"></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <Button>{t("Send")}</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <div className={styles.right}>
        <p>
          {t("Contact")} Пере Велимировића 8 <br />
          {t("Email")}: medenjaci@gmail.com <br />
          {"тел"}: 0641234568
        </p>
        <div
          className="mapouter"
          style={{
            position: "relative",
            textAlign: "right",
            height: "47vh",
            width: "100%",
          }}
        >
          <div
            className="gmap_canvas"
            style={{
              overflow: "hidden",
              background: "none!important",
              height: "100%",

              width: "100%",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=pere%20velimirovica%208&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
            <a href="https://getasearch.com/nordvpn-coupon/"></a>
            <br />
            <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
