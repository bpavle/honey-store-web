import React, { useState, useContext } from "react";
import styles from "./MyProfile.module.css";
import Button from "./Common/Button";
import { updateUser, getUserById } from "../api/usersServices";
import { UserContext } from "./Contexts/UserContext";
import { useTranslation } from "react-i18next";
const MyProfile = () => {
  const { t, i18n } = useTranslation();

  let [user, setUser] = useContext(UserContext);
  console.log(user);
  console.log(getUserById(user.id));
  const changeInfo = () => {
    let updatedUser = {
      role: user.role,
      name: document.getElementById("name").value
        ? document.getElementById("name").value
        : user.name,
      surname: document.getElementById("surname").value
        ? document.getElementById("name").value
        : user.surname,
      phone: document.getElementById("phone").value
        ? document.getElementById("name").value
        : user.phone,
      address: document.getElementById("address").value
        ? document.getElementById("name").value
        : user.address,
      email: document.getElementById("email").value
        ? document.getElementById("name").value
        : user.email,
      password: document.getElementById("password").value,
      "confirm-password": document.getElementById("confirm-password").value,
    };
    updatedUser.password === updatedUser["confirm-password"]
      ? updateUser({ id: user.id, ...updatedUser }) &&
        setUser({ ...getUserById(user.id), isLoggedIn: true })
      : alert("Passwords do not match");
  };
  return (
    <div className={styles.MyProfile}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>{t("Name")}</td>
            <td>
              {" "}
              <input placeholder={user.name} id="name" type="text"></input>
            </td>
          </tr>
          <tr>
            <td>{t("Surname")}</td>
            <td>
              {" "}
              <input
                placeholder={user.surname}
                id="surname"
                type="text"
              ></input>
            </td>
          </tr>
          <tr>
            <td>{t("Phone")}</td>
            <td>
              {" "}
              <input placeholder={user.phone} id="phone" type="text"></input>
            </td>
          </tr>
          <tr>
            <td>{t("Address")}</td>
            <td>
              {" "}
              <input
                placeholder={user.address}
                id="address"
                type="text"
              ></input>
            </td>
          </tr>
          <tr>
            <td>{t("Email")}</td>
            <td>
              {" "}
              <input placeholder={user.email} id="email" type="text"></input>
            </td>
          </tr>
          <tr>
            <td>{t("Password")}</td>
            <td>
              {" "}
              <input
                placeholder={user.password}
                id="password"
                type="password"
              ></input>
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
              <Button onClick={changeInfo}>{t("Save")}</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyProfile;
