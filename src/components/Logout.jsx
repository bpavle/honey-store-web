import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { UserContext } from "./Contexts/UserContext";
const Logout = () => {
  const history = useHistory();
  let [user, setUser] = useContext(UserContext);

  useEffect(() => {
    history.push("/home");
  });

  console.log("Running logout");

  setUser({ role: "ROLE_VISITOR", isLoggedIn: false });

  return <div>test</div>;
};

export default Logout;
