import { useRouter } from "next/router";
import { useContext, useState } from "react"
import { Context } from "../../Context/Context";
import { auth } from "../../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const ResetPassword = () => { 
    const context = useContext(Context)
    const router = useRouter()
    const [email, setEmail] = useState('')
    

    const changePasswordHandler = () => {
        sendPasswordResetEmail(auth, email)
        router.push('/auth/login')
      }
    return(
    < div className="grid grid-cols-1 sm:grid-cols-1 h-screen w-full">
             <button onClick={ () => { router.push('/auth/login') }} className="fixed drop-shadow-xl text-white px-6 py-4 m-4 bg-graphite rounded-lg hover:bg-lite-graphite focus:bg-super-lite-graphite">Powrót</button>
            <div className="bg-white flex flex-col justify-center">
                <form className="xxl:w-96 xxl:h-1/3  md:max-w-sm sm:max-w-xs drop-shadow-2xl mx-auto bg-whiteGray border-gray-400 solid border-2 p-20 sm:p-14 px-20 rounded-lg">
                    <h2 className="text-black font-normal text-center text-2xl">Wyślij link do zresetowania hasła na twoje konto email (sprawdź folder spam)</h2>
                    <div className="flex flex-col  text-gray-400 py-6 xxl:py-12">
                        <label className={'font-bold'}>Email</label>
                        <input onChange={(e)=>setEmail(e.target.value)} className={`rounded-lg text-black bg-gray-300 mt-2 outline-none p-2 border-solid border-2 `}/>
                    </div>
                        <div className="absolute right-2 text-xl bottom-7">
                        
                    </div>
                    <div className="w-full flex flex-col items-center">
                      <button onClick={changePasswordHandler} className="w-1/2 justify-center drop-shadow-xl m-auto content-center text-white xxl:mt-4 mt-6 py-3 bg-graphite rounded-lg hover:bg-lite-graphite focus:bg-super-lite-graphite">Wyślij</button>
                    </div>
                </form>
            </div>
        </div>
    )
 }

 export default ResetPassword