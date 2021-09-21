import React, { useContext, useEffect } from "react";
import { UserContext } from "./../components/Contexts/UserContext";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ component, roles, ...rest }) => {
  console.log(`Private route for ${rest.path} Roles :${roles}`);
  let [user, setUser] = useContext(UserContext);
  const isAuthenticated = user.isLoggedIn;
  return (
    <Route
      {...rest}
      render={() => {
        return isAuthenticated && roles.includes(user.role) ? (
          <Route component={component} />
        ) : (
          <h1>Sorry, you are not authorized to do this</h1>
        );
      }}
    />
  );
};

export default PrivateRoute;
