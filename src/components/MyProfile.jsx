import React from "react";
import styles from "./MyProfile.module.css";
import Button from "./Common/Button";
const MyProfile = () => {
  return (
    <div className={styles.MyProfile}>
      <table className={styles.table}>
        <tbody>
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
            <td colSpan="2">
              <Button>Sacuvaj</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyProfile;
