import React, { useContext, useState, setState } from "react";
import styles from "./Login.module.css";
import { Link, Redirect, useHistory } from "react-router-dom";
import Button from "./Common/Button";
import loginUser from "../api/loginUser";
import { UserContext } from "./Contexts/UserContext";
const Login = () => {
  let [message, setMessage] = useState();
  let [user, setUser] = useContext(UserContext);
  const history = useHistory();
  const login = () => {
    let usr = loginUser(
      document.getElementById("email").value,
      document.getElementById("password").value
    );
    console.log(usr);
    if (!usr) {
      setMessage("Wrong email or password");
    } else {
      console.log(`User logged in: ${usr}`);
      setUser({ ...usr, isLoggedIn: true });
      history.push("/home");
    }
  };
  return (
    <div className={styles.Login}>
      <p>{message}</p>
      <table className={styles.table}>
        <tr>
          <td>
            <label htmlFor="email">Email</label>
          </td>
          <td>
            <input type="text" id="email" />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="password">Password</label>
          </td>
          <td>
            <input type="text" id="password" />
          </td>
        </tr>
        <tr>
          <td colspan="2" style={{ textAlign: "center" }}>
            {" "}
            No account? <Link to="Registration">Register here</Link>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <Button onClick={login}>Login</Button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Login;
