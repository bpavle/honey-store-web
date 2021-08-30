import React from "react";
import styles from "./Contact.module.css";
const mapStyle = {};
const Contact = () => {
  return (
    <div className={styles.Contact}>
      <div className={styles.left}>
        <h2>Pisite nam</h2>
        <form>
          <label for="email">Your email</label>
          <br></br>
          <input type="text" placeholder="email" id="email"></input>
          <br></br>
          <label for="textarea">Content</label>
          <br></br>
          <textarea id="textarea" type="text"></textarea>
          <button>Posalji</button>
        </form>
      </div>
      <div className={styles.right}>
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
