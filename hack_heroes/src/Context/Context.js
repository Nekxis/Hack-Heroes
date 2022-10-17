import React, { useState, useEffect } from "react";
import { auth } from '../../firebase';
import { onAuthStateChanged } from "firebase/auth";
import { db } from "../../firebase";
import { doc, getDoc } from 'firebase/firestore';


export const Context = React.createContext();


export default function ContextProvider({ children }) {

  const [user, setUser] = useState({});
  const [userName, setUserName] = useState();
  const [button, setButton] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    });

    return unsubscribe
  }, []);

  console.log(user);

  const initialValues = {
    button,
    setButton,
    user,
  }

  return <Context.Provider value={initialValues}> {children} </Context.Provider>
}
