import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className={styles.Login}>
      <form action="">
        <table>
          <tr>
            <td>
              <label htmlFor="username">Username</label>
            </td>
            <td>
              <input type="text" id="username" />
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
              <button type="submit">Login</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default Login;
