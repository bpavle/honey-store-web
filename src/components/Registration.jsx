import React from "react";
import styles from "./Registration.module.css";
import Button from "./Common/Button";
import { useHistory } from "react-router-dom";
import { addUser } from "../api/usersServices";
import { useTranslation } from "react-i18next";
const Registration = () => {
  const { t, i18n } = useTranslation();

  const history = useHistory();
  const registerUser = () => {
    let newUser = {
      role: "ROLE_CUSTOMER",
      name: document.getElementById("name").value,
      surname: document.getElementById("surname").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      "confirm-password": document.getElementById("confirm-password").value,
    };
    for (const field in newUser) {
      if (!newUser[field]) {
        alert("Please enter all information");
        return;
      }
    }
    newUser.password === newUser["confirm-password"]
      ? addUser(newUser)
      : alert("Passwords do not match");
    history.push("/login");
    alert("You have successfully registered to our store. Now you can log in");
  };
  return (
    <div className={styles.Registration}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>{t("Name")}</td>
            <td>
              {" "}
              <input id="name" type="text"></input>
            </td>
          </tr>
          <tr>
            <td>{t("Surname")}</td>
            <td>
              {" "}
              <input id="surname" type="text"></input>
            </td>
          </tr>
          <tr>
            <td>{t("Phone")}</td>
            <td>
              {" "}
              <input id="phone" type="text"></input>
            </td>
          </tr>
          <tr>
            <td>{t("Address")}</td>
            <td>
              {" "}
              <input id="address" type="text"></input>
            </td>
          </tr>
          <tr>
            <td>{t("Email")}</td>
            <td>
              {" "}
              <input id="email" type="text"></input>
            </td>
          </tr>
          <tr>
            <td>{t("Password")}</td>
            <td>
              {" "}
              <input id="password" type="password"></input>
            </td>
          </tr>
          <tr>
            <td>{t("Confirm password")}</td>
            <td>
              {" "}
              <input id="confirm-password" type="password"></input>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <Button onClick={registerUser}>{t("Register")}</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Registration;
