import React, { useContext } from "react";
import styles from "./AddEmployee.module.css";
import Button from "./Common/Button";

import { addUser, getUsersByRole } from "../api/usersServices";
import { EmployeesContext } from "./Contexts/EmployeesContext";
const AddEmployee = () => {
  let [employees, setEmployees] = useContext(EmployeesContext);
  const addEmployee = () => {
    let newEmployee = {
      role: "ROLE_SELLER",
      name: document.getElementById("name").value,
      surname: document.getElementById("surname").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      "confirm-password": document.getElementById("confirm-password").value,
    };
    newEmployee.password === newEmployee["confirm-password"]
      ? addUser(newEmployee) && setEmployees(getUsersByRole("ROLE_SELLER"))
      : alert("Passwords do not match");
  };
  return (
    <div className={styles.AddEmployee}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>Ime</td>
            <td>
              {" "}
              <input id="name" type="text"></input>
            </td>
          </tr>
          <tr>
            <td>Prezime</td>
            <td>
              {" "}
              <input id="surname" type="text"></input>
            </td>
          </tr>
          <tr>
            <td>Kontakt telefon</td>
            <td>
              {" "}
              <input id="phone" type="text"></input>
            </td>
          </tr>
          <tr>
            <td>Adresa</td>
            <td>
              {" "}
              <input id="address" type="text"></input>
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              {" "}
              <input id="email" type="text"></input>
            </td>
          </tr>
          <tr>
            <td>Lozinka</td>
            <td>
              {" "}
              <input id="password" type="password"></input>
            </td>
          </tr>
          <tr>
            <td>Ponovi lozinku</td>
            <td>
              {" "}
              <input id="confirm-password" type="password"></input>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <Button onClick={addEmployee}>Add Employee</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AddEmployee;
