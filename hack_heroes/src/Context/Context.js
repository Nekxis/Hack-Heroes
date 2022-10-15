import React, {useState} from "react";

export const Context = React.createContext();

export default function ContextProvider ({children}) {

  const [button, setButton] = useState(true);
  const initialValues = {
    button,
    setButton,
  }

  return <Context.Provider value={initialValues}> {children} </Context.Provider>
}
