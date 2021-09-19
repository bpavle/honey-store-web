import React, { useState, useEffect, useContext } from "react";
import styles from "./Employees.module.css";
import { EmployeesContext } from "./EmployeesContext";
const Employees = () => {
  let [employees, setEmployees] = useContext(EmployeesContext);

  console.log(employees);
  return (
    <div className={styles.Employees}>
      <table className={styles.table}>
        <tr>
          <th>Ime</th>
          <th>Prezime</th>
          <th>Telefon</th>
          <th>Adresa</th>
          <th>Korisnicko ime</th>
          <th>Obrisi</th>
        </tr>
        {employees.map((employee) => {
          return (
            <tr key={employee.username}>
              <td>{employee.name}</td>
              <td>{employee.surname}</td>
              <td>{employee.phone}</td>
              <td>{employee.address}</td>
              <td>{employee.username}</td>
              <td
                onClick={() => {
                  setEmployees(
                    employees.filter((e) => employee.username != e.username)
                  );
                }}
              >
                O
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Employees;
