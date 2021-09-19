import React, { useState, useEffect ,useContext} from "react";
import styles from "./Employees.module.css";
import { EmployeesContext } from "./EmployeesContext";
const Employees = () => {
  let [employees, setEmployees] = useContext(EmployeesContext);// this will be used after adding employee functionality is finished
  // let [employees, setEmployees] = useState([
  //   {
  //     name: "Pera",
  //     surname: "Peric",
  //     phone: "0641234567",
  //     address: "Goricka 82 a",
  //     username: "ppera99",
  //   },
  //   {
  //     name: "Mika",
  //     surname: "Peric",
  //     phone: "0641234567",
  //     address: "Goricka 82 a",
  //     username: "mmika44",
  //   },
  //   {
  //     name: "Zika",
  //     surname: "Zikic",
  //     phone: "064123413",
  //     address: "Valjevska 17",
  //     username: "zivac",
  //   },
  // ]);

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
