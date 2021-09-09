import React from "react";
import styles from "./Contact.module.css";
import Button from "./Common/Button";
const mapStyle = {};
const Contact = () => {
  return (
    <div className={styles.Contact}>
      <div className={styles.left}>
        <form>
          <table>
            <h2>Pisite nam</h2>
            <tr>
              <td>
                <label for="email">Your email</label>
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder="email" id="email"></input>
              </td>
            </tr>
            <tr>
              <td>
                <label for="textarea">Content</label>
              </td>
            </tr>
            <tr>
              <td>
                <textarea id="textarea" type="text"></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <Button>Posalji</Button>
              </td>
            </tr>
          </table>
        </form>
      </div>
      <div className={styles.right}>
        <p>
          Контакт Пере Велимировића 8 <br />E пошта: medenjaci@gmail.com <br />
          тел: 0641234568
        </p>
        <div
          class="mapouter"
          style={{
            position: "relative",
            textAlign: "right",
            height: "500px",
            width: "100%",
          }}
        >
          <div
            class="gmap_canvas"
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
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
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
