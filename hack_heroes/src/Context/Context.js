import React, { useState, useEffect } from "react";
import { auth } from '../../firebase';
import { onAuthStateChanged } from "firebase/auth";



export const Context = React.createContext();


export default function ContextProvider({ children }) {

  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    });

    return unsubscribe
  }, []);

 

  const initialValues = {
    user,
  }

  return <Context.Provider value={initialValues}> {children} </Context.Provider>
}
