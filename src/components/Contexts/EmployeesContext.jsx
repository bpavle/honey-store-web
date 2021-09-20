import React, {useState} from 'react';

export const EmployeesContext = React.createContext();

export const EmployeesProvider = (props) =>{
    const [employees, setEmployees] = useState([{
        name: "Pera",
        surname: "Peric",
        phone: "0641234567",
        address: "Goricka 82 a",
        username: "ppera99",
      },
      {
        name: "Mika",
        surname: "Peric",
        phone: "0641234567",
        address: "Goricka 82 a",
        username: "mmika44",
      },
      {
        name: "Zika",
        surname: "Zikic",
        phone: "064123413",
        address: "Valjevska 17",
        username: "zivac",
      },]);
    return (
        <EmployeesContext.Provider value={[employees,setEmployees]}>
            {props.children}
        </EmployeesContext.Provider>
    )
}