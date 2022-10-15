import React from "react";
import { useState,useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { auth } from "../../firebase";
import {doc, setDoc} from "firebase/firestore"
import { db } from "../../firebase";

export const Context = React.createContext();

export default function ContextProvider ({children}) {

  const [user, setUser] = useState({})

  const register = async (email, password, userName) => { 
    try{
    const user = await createUserWithEmailAndPassword(auth, email, password)
    console.log(user.user.uid);
    const addUser = await setDoc(doc(db, 'users', user.user.uid), {
      userName: userName
    })
    }catch (error) {
      console.log(error.message);
    }
   }


   useEffect(() => {
     onAuthStateChanged(auth, (currentUser) => {
     setUser(currentUser)
    })},[])


console.log(user);

  const [button, setButton] = useState(true);
  const initialValues = {
    user,
    register,
    button,
    setButton,
  }

  return <Context.Provider value={initialValues}> {children} </Context.Provider>
}
