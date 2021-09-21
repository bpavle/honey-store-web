import React, { useContext, useEffect } from "react";
import { login } from "./roles";
import { UserContext } from "./../components/Contexts/UserContext";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ element, roles, ...rest }) => {
  useEffect(() => {
    console.log(roles);
    console.log(element);
  });
  const isAuthenticated = true; //TODO
  let [user, setUser] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={() => {
        return isAuthenticated && roles.includes(user.role) ? (
          <Route component={element} />
        ) : (
          // element
          //<Route {...rest}>{console.log(rest)}</Route>
          <h1>Sorry, you are not authorized to do this</h1>
        );
      }}
    />
  );
};

export default PrivateRoute;
