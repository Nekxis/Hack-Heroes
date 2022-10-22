import { Context } from "../../../Context/Context"
import { useContext } from "react";
import { getAuth, deleteUser, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../../firebase";
import { useRouter } from "next/router";


export default function DataTab ({email, userName, orders}) {
  const context = useContext(Context)
  const router = useRouter();
  const deleteUserHandler = async () => { 
    if (orders[0]) {
      alert ('Usun wszystkie zlecenia!')
      return
    }
   await deleteUser(context.user)
   router.push('/')
  }
  const changePasswordHandler = () => {
    console.log(context.user.email);
    sendPasswordResetEmail(auth, context.user.email)
    alert('Twój link do zresetowania hasła został wysłany na twój email (sprawdź folder spam)')
    router.push('/auth/login')
  }
  
  return (
    <div className={'w-5/6 h-full flex flex-col justify-around self-start'}>
      <div className={'flex p-5 flex-col'}>
        <p className={'text-xl'}>Nazwa Użytkownika:</p>
        <p className={'text-2xl sm:text-lg'}>{userName}</p>
      </div>
      <div className={'flex border-t-2 border-gray-400 p-5 flex-col'}>
        <p className={'text-xl'}>Email:</p>
        <p className={'text-2xl sm:text-lg'}>{email}</p>
      </div>
      <div className={'flex border-t-2 border-gray-400 p-5 flex-col'}>
        <button  onClick={changePasswordHandler} className="w-36 mx-auto justify-center sefl-start drop-shadow-xl content-center text-white mt-5  py-3 bg-graphite rounded-lg hover:bg-lite-graphite focus:bg-super-lite-graphite">Zmień Hasło</button>
        <button  onClick={deleteUserHandler} className="w-36 mx-auto justify-center sefl-start drop-shadow-xl content-center text-white mt-5  py-3 rounded-lg bg-red-600 hover:bg-red-500 focus:bg-red700">Usuń konto</button>
      </div>
      
    </div>
  )
}
