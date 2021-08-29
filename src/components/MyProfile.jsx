import React from "react";
import styles from "./MyProfile.module.css";
const MyProfile = () => {
  return (
    <div className={styles.MyProfile}>
      <table>
        <tr>
          <td>Ime</td>
          <td>
            {" "}
            <input type="text"></input>
          </td>
        </tr>
        <tr>
          <td>Prezime</td>
          <td>
            {" "}
            <input type="text"></input>
          </td>
        </tr>
        <tr>
          <td>Kontakt telefon</td>
          <td>
            {" "}
            <input type="text"></input>
          </td>
        </tr>
        <tr>
          <td>Adresa</td>
          <td>
            {" "}
            <input type="text"></input>
          </td>
        </tr>
        <tr>
          <td>Korisnicko ime</td>
          <td>
            {" "}
            <input type="text"></input>
          </td>
        </tr>
        <tr>
          <td>Lozinka</td>
          <td>
            {" "}
            <input type="password"></input>
          </td>
        </tr>
        <tr>
          <td>Ponovi lozinku</td>
          <td>
            {" "}
            <input type="password"></input>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <button>Sacuvaj</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default MyProfile;
