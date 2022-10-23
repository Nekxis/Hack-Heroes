import Link from "next/link"
import { useContext, useState } from "react"
import { Context } from "../../Context/Context";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase';
import { db } from '../../../firebase';
import { setDoc, doc } from 'firebase/firestore';

const Register = () => {

  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [error, setError] = useState(false);

  const setPasswordHandler = (e) => {
    setPassword(e.target.value)
  }
  const setPasswordAgainHandler = (e) => {
    setPasswordAgain(e.target.value)
  }
  const context = useContext(Context)
  const router = useRouter();


  const submitHandler = async (e) => {
    e.preventDefault()
    if (password !== passwordAgain) {
      setError(true)
      return
    }
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, passwordAgain)
      const addUser = await setDoc(doc(db, 'users', user.user.uid), {
        userName: userName
      })
      router.push('/');

    } catch (error) {
      console.log(error.message);
    }

  }



  return (
    <div className="flex flex-col h-screen w-full">
      <button onClick={ () => { router.push('/') }} className="w-28 h-14 drop-shadow-xl text-white px-6 py-4 m-4 bg-graphite rounded-lg hover:bg-lite-graphite focus:bg-super-lite-graphite">Powrót</button>
      <div className="h-full bg-white flex flex-col justify-center">
        <form onSubmit={submitHandler} className="xxl:w-96 md:w-90 sm:w-80 xxl:h-1/2 sm:h-160 drop-shadow-2xl mx-auto bg-whiteGray border-gray-400 solid border-2 p-20 sm:p-10 px-20 rounded-lg">
          <h2 className="text-black font-normal text-center text-4xl">Zarejestruj</h2>
          <div className="flex flex-col text-black pb-4 pt-6">
            <label className={'font-bold'}>Nazwa użytkownika</label>
            <input onChange={(event) => setUserName(event.target.value) } className="rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2  border-gray-400 focus:border-gray-300" type="text" />
          </div>
          <div className="flex flex-col  text-black py-4">
            <label className={'font-bold'}>Email</label>
            <input onChange={(event) => setRegisterEmail(event.target.value) } className="rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2  border-gray-400 focus:border-gray-300" type="email" />
          </div>
          <div className="flex flex-col text-black py-4">
            <label className={'font-bold'}>Hasło</label>
            <input value={password} className="rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2  border-gray-400 focus:border-gray-300" onChange={setPasswordHandler} type="password" />
          </div>
          <div className="flex flex-col text-black py-4">
            <label className={'font-bold'}>Powtórz hasło</label>
            <input value={passwordAgain} className={`rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2 ${error ? 'border-red-600' : 'border-gray-400 focus:border-gray-300'}`} onChange={setPasswordAgainHandler} type="password" />
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
