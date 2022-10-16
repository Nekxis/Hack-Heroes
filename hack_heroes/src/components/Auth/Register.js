import  Link  from "next/link";
import { useState,useEffect, useContext } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { auth } from "../../../firebase";
import {doc, setDoc} from "firebase/firestore"
import { db } from "../../../firebase";
import { Context } from "../../Context/Context";

const Register = () => {

  const [password ,setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')
  const [errorPassword, setErrorPassword] = useState(false)
  const [registerEmail, setRegisterEmail] = useState('')
  const [userName, setUserName] = useState('')


  const context = useContext(Context)

  const setPasswordHandler = (e) => { 
    setPassword(e.target.value)
  }
  const setPasswordAgainHandler = (e) => { 
    setPasswordAgain(e.target.value)
   }

  const submitHandler = (e) => { 
    e.preventDefault()
   if(password!==passwordAgain){
     setErrorPassword(true)
     return
   }else{
     context.register(registerEmail, passwordAgain, userName)
   }
   }



  return(
    < div className="grid grid-cols-1 sm:grid-cols-1 h-screen w-full">
      <div className="bg-white flex flex-col justify-center">
        <form onSubmit={submitHandler} className="md:w-96 sm:w-80 sm:h-160 drop-shadow-2xl mx-auto bg-whiteGray border-gray-400 solid border-2 p-20 sm:p-10 px-20 rounded-lg">
          <h2 className="text-black font-normal text-center text-4xl">Zarejestruj</h2>
          <div className="flex flex-col text-gray-400 py-4">
            <label className={'font-bold'}>Nazwa użytkownika</label>
            <input onChange={(e) => {setUserName(e.target.value)}} className="rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2  border-gray-400 focus:border-gray-300" type="text"/>
          </div>
          <div className="flex flex-col  text-gray-400 py-4">
            <label className={'font-bold'}>Email</label>
            <input onChange={(e) => {setRegisterEmail(e.target.value)}} className="rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2  border-gray-400 focus:border-gray-300" type="email"/>
          </div>
          <div className="flex flex-col text-gray-400 py-4">
            <label className={'font-bold'}>Hasło</label>
            <input value={password} className="rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2  border-gray-400 focus:border-gray-300" onChange={setPasswordHandler} type="password"/>
          </div>
          <div className="flex flex-col text-gray-400 py-4">
            <label className={'font-bold'}>Powtórz hasło</label>
            <input value={passwordAgain} className={`rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2 ${errorPassword ? 'border-red-600' : 'border-gray-400 focus:border-gray-300'}`} onChange={setPasswordAgainHandler} type="password"/>
          </div>
          <Link href='/auth/login'>
            <p className="cursor-pointer text-center hover:drop-shadow-md">Mam juz konto</p>
          </Link>
          <div className="w-full flex flex-col items-center">
            <button className="w-1/2 justify-center drop-shadow-xl m-auto content-center text-white mt-5  py-3 bg-graphite rounded-lg hover:bg-lite-graphite focus:bg-super-lite-graphite">Zarejestruj</button>
          </div>
        </form>
      </div>
    </div>
  )
 }
 export default Register

