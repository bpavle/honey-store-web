import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { UserContext } from "./Contexts/UserContext";
import { CartContext } from "./Contexts/CartContext";

const Logout = () => {
  const history = useHistory();
  let [user, setUser] = useContext(UserContext);
  let [cart, setCart] = useContext(CartContext);

  useEffect(() => {
    history.push("/home");
  });

  console.log("Running logout");

  setUser({ role: "ROLE_VISITOR", isLoggedIn: false });
  setCart([]);
  return <div>test</div>;
};

export default Logout;
