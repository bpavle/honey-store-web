import React, { useState } from "react";
export const ClickContext = React.createContext();

export const ClickProvider = (props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <ClickContext.Provider value={[clicked, setClicked]}>
      {props.children}
    </ClickContext.Provider>
  );
};
