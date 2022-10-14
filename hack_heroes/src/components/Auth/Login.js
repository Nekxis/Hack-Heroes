import  Link  from "next/link"

const Login = () => {
    return(
        < div className="grid grid-cols-1 sm:grid-cols-1 h-screen w-full">
            <div className="bg-white flex flex-col justify-center">
            <form className="md:w-96 sm:w-80 sm:h-128 drop-shadow-2xl mx-auto bg-whiteGray border-gray-400 solid border-2 p-20 sm:p-10 px-20 rounded-lg">
                    <h2 className="text-black font-normal text-center text-4xl">Zaloguj się</h2>
                    <div className="flex flex-col  text-gray-400 py-8">
                        <label className={'font-bold'}>Email</label>
                        <input className="rounded-lg text-black bg-gray-300 mt-2 outline-none p-2 border-solid border-2  border-gray-400 focus:border-gray-300" type="email"/>
                    </div>
                    <div className="flex flex-col text-gray-400 py-4">
                        <label className={'font-bold'}>Hasło</label>
                        <input className="rounded-lg text-black bg-gray-300 mt-2 outline-none p-2 border-solid border-2  border-gray-400 focus:border-gray-300" type="text"/>
                    </div>
                    <Link href='/auth/register'>
                    <h1 className="cursor-pointer text-center mt-5 hover:drop-shadow-md">Nie mam jeszcze konta</h1>
                    </Link>
                    <div className="w-full flex flex-col items-center">
                      <button className="w-1/2 justify-center drop-shadow-xl m-auto content-center text-white mt-10 py-3 bg-graphite rounded-lg hover:bg-lite-graphite focus:bg-super-lite-graphite">Zaloguj</button>
                    </div>
                </form>
            </div>
        </div>
    )
 }
 export default Login
