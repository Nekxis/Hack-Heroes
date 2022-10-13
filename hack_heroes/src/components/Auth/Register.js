const Register = () => {
  return(
    < div className="grid grid-cols-1 sm:grid-cols-1 h-screen w-full">
      <div className="bg-white flex flex-col justify-center">
        <form className="md:w-96 sm:w-80 sm:h-160 drop-shadow-2xl mx-auto bg-whiteGray border-black border-2 p-20 sm:p-10 px-20 rounded-lg">
          <h2 className="text-black font-normal text-center text-4xl">Register</h2>
          <div className="flex flex-col text-gray-400 py-4">
            <label className={'font-bold'}>Username</label>
            <input className="rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2  border-gray-400 focus:border-gray-300" type="text"/>
          </div>
          <div className="flex flex-col  text-gray-400 py-4">
            <label className={'font-bold'}>Email</label>
            <input className="rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2  border-gray-400 focus:border-gray-300" type="email"/>
          </div>
          <div className="flex flex-col text-gray-400 py-4">
            <label className={'font-bold'}>Password</label>
            <input className="rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2  border-gray-400 focus:border-gray-300" type="text"/>
          </div>
          <div className="flex flex-col text-gray-400 py-4">
            <label className={'font-bold'}>Repeat Password</label>
            <input className="rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2  border-gray-400 focus:border-gray-300" type="text"/>
          </div>
          <div className="w-full flex flex-col items-center">
            <button className="w-1/2 justify-center drop-shadow-xl m-auto content-center text-white mt-8  py-3 bg-graphite rounded-lg hover:bg-lite-graphite focus:bg-super-lite-graphite">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
 }
 export default Register
