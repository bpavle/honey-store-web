import React, { useState } from "react";
import { getUsersByRole } from "../../api/usersServices";
export const EmployeesContext = React.createContext();

export const EmployeesProvider = (props) => {
  const [employees, setEmployees] = useState(getUsersByRole("ROLE_SELLER"));
  return (
    <EmployeesContext.Provider value={[employees, setEmployees]}>
      {props.children}
    </EmployeesContext.Provider>
  );
};
