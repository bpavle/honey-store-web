import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { UserContext } from "./Contexts/UserContext";
const Logout = () => {
  const history = useHistory();
  let [user, setUser] = useContext(UserContext);
  console.log("Running logout");

  setUser({ role: "ROLE_VISITOR", isLoggedIn: false });
  history.push("/home");
  return <div>test</div>;
};

export default Logout;
