import React, { useState, useEffect, useContext } from "react";
import styles from "./Employees.module.css";
import { EmployeesContext } from "./Contexts/EmployeesContext";
import { deleteUser } from "../api/usersServices";
const Employees = () => {
  let [employees, setEmployees] = useContext(EmployeesContext);

  console.log(employees);
  return (
    <div className={styles.Employees}>
      <table className={styles.table}>
        <tbody>
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
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.surname}</td>
                <td>{employee.phone}</td>
                <td>{employee.address}</td>
                <td>{employee.email}</td>
                <td
                  onClick={() => {
                    deleteUser(employee)
                      ? setEmployees(
                          employees.filter((e) => e.id != employee.id)
                        ) //ZASTO SE OVA KOMPONENTA NE RENDERUJE KAD JOJ JE PROMENJEN STEJT OVAKO setOrders(getOrders())
                      : alert("Something went wrong with deleting employee");
                    // console.log(users);
                  }}
                >
                  O
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
