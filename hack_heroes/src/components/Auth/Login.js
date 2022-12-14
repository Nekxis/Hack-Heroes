import Link from "next/link"
import { useContext, useState } from "react"
import { Context } from "../../Context/Context";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase';
import { db } from '../../../firebase';
import { setDoc, doc } from 'firebase/firestore';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

const Login =  () => {

    const [error, setError] = useState(false)
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [open, setOpen] = useState(false)

    const context = useContext(Context)
    const router = useRouter()
    const submitHandler = async (e) => {
        e.preventDefault()

            try{
                const user = await signInWithEmailAndPassword(
                    auth,
                    loginEmail,
                    loginPassword
                )
                router.push('/')
            }catch (error){
                setError(true)
                return
            }

       }
       const toggle = () => {
           setOpen(!open)
        }

    return(
        < div className="flex flex-col  h-screen w-full">
          <button onClick={ () => { router.push('/') }} className="w-28 h-14 drop-shadow-xl text-white px-6 py-4 m-4 bg-graphite rounded-lg hover:bg-lite-graphite focus:bg-super-lite-graphite">Powrót</button>
            <div className="h-full bg-white flex flex-col justify-center lg:mb-10 sm:mb-0">
                <form onSubmit={submitHandler} className="xxl:w-96 xxl:h-144  md:max-w-sm sm:max-w-xs drop-shadow-2xl mx-auto bg-whiteGray border-gray-400 solid border-2 p-20 sm:p-14 px-20 rounded-lg ">
                    <h2 className="text-black font-normal text-center text-4xl">Zaloguj się</h2>
                    <div className="flex flex-col  text-gray-400 py-6 xxl:py-12">
                        <label className={'font-bold'}>Email</label>
                        <input onChange={(e)=>{setLoginEmail(e.target.value)}} className={`rounded-lg text-black bg-gray-300 mt-2 outline-none p-2 border-solid border-2  ${error ? 'border-red-600' : 'border-gray-400 focus:border-gray-300'}`}/>
                    </div>
                    <div className="flex flex-col text-gray-400 py-4 relative">
                        <label className={'font-bold'}>Hasło</label>
                        <input onChange={(e)=>{setLoginPassword(e.target.value)}} className={`rounded-lg text-black bg-gray-300 mt-2 outline-none p-2 border-solid border-2  ${error ? 'border-red-600' : 'border-gray-400 focus:border-gray-300'}`}
                        type={(open===false)?'password':'text'}>
                        </input>
                        <div className="absolute right-2 text-xl bottom-7">

                            {(open===false)?<AiFillEye onClick={toggle}/>:<AiFillEyeInvisible onClick={toggle}/>}
                        </div>
                    </div>
                    <Link href='/auth/register'>
                    <h1 className="cursor-pointer text-center hover:drop-shadow-md">Nie mam jeszcze konta</h1>
                    </Link>
                    <Link href='/auth/resetPassword'>
                    <h1 className="cursor-pointer mt-6 text-center hover:drop-shadow-md">Zresetuj hasło</h1>
                    </Link>
                    <div className="w-full flex flex-col items-center">
                      <button className="w-1/2 justify-center drop-shadow-xl m-auto content-center text-white xxl:mt-4 mt-6 py-3 bg-graphite rounded-lg hover:bg-lite-graphite focus:bg-super-lite-graphite">Zaloguj</button>
                    </div>
                </form>
            </div>
        </div>
    )
 }
 export default Login
