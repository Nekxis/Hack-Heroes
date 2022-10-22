import { Context } from "../../../Context/Context"
import { useContext } from "react";
import { getAuth, deleteUser } from "firebase/auth";
import { auth } from "../../../../firebase";
import { useRouter } from "next/router";


export default function DataTab ({email, userName}) {
  const context = useContext(Context)
  const router = useRouter();
  const deleteUserHandler = () => { 
    deleteUser(context.user)
    router.push('/')
  }
  
  console.log(userName);
  return (
    <div className={'w-5/6 h-full flex flex-col justify-around self-start'}>
      <div className={'flex p-5 flex-col'}>
        <p className={'text-xl'}>Nazwa Użytkownika:</p>
        <p className={'text-2xl'}>{userName}</p>
      </div>
      <div className={'flex border-t-2 border-gray-400 p-5 flex-col'}>
        <p className={'text-xl'}>Email:</p>
        <p className={'text-2xl'}>{email}</p>
      </div>
      <div className={'flex border-t-2 border-gray-400 p-5 flex-col'}>
        <button className="w-36 mx-auto justify-center sefl-start drop-shadow-xl content-center text-white mt-5  py-3 bg-graphite rounded-lg hover:bg-lite-graphite focus:bg-super-lite-graphite">Zmień Hasło</button>
        <button  onClick={deleteUserHandler} className="w-36 mx-auto justify-center sefl-start drop-shadow-xl content-center text-white mt-5  py-3 rounded-lg bg-red-600 hover:bg-red-500 focus:bg-red700">Usuń konto</button>
      </div>
    </div>
  )
}
