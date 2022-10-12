const Register = () => { 
    return(
        < div className="grid grid-cols-1 sm:grid-cols-1 h-screen w-full"> 
            <div className="bg-White flex flex-col justify-center" >
                <form className="max-w-[400] w-1/3 mx-auto bg-gray p-14 px-20 rounded-lg ">
                    <h2 className="text-4x1 dark:text-black font-semibold text-center py-6 text-5xl">Register</h2>
                    <div className="flex flex-col text-black  py-4">
                        <label>Username</label>
                        <input className="rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2  border-black focus:border-gray" type="email"/>
                    </div>
                    <div className="flex flex-col text-black  py-4">
                        <label>Email</label>
                        <input className="rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2 border-black focus:border-gray" type="email"/>
                    </div>
                    <div className="flex flex-col text-black py-4">
                        <label>Password</label>
                        <input className="rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2 border-black focus:border-gray" type="text"/>
                    </div>
                    <div className="flex flex-col text-black py-4">
                        <label>Repeat password</label>
                        <input className="rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2 border-black focus:border-gray" type="text"/>
                    </div>
                    <div className="w-full flex flex-col items-center">
                    <button className="w-1/2 justify-center m-auto content-center text-white my-8 py-3 bg-black rounded-lg">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
 }
 export default Register
