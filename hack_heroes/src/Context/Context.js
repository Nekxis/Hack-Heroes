import React, { useState, useEffect } from "react";
import { auth } from '../../firebase';
import { onAuthStateChanged } from "firebase/auth";

export const Context = React.createContext();

export default function ContextProvider({ children }) {

  const [user, setUser] = useState({});


  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    });
  }, []);

  console.log(user.email);

  const [button, setButton] = useState(true);
  const initialValues = {
    button,
    setButton,
    user
  }

  return <Context.Provider value={initialValues}> {children} </Context.Provider>
}
