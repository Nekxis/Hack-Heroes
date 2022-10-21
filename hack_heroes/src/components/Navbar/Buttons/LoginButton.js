import {IconContext} from "react-icons/lib";
import {HiUserCircle} from "react-icons/hi";
import Link from "next/link";

export default function LoginButton () {
  return(
<Link href={'/auth/login'}>
      <div className='w-36 rounded cursor-pointer border-2 border-black text-black ease-in-out duration-500 h-10 gap-1 flex items-center justify-center hover:bg-white hover:text-black'>
        <IconContext.Provider value={{ size: '2rem' }}>
          <div className='text-inherit pr-2'>
            <HiUserCircle />
          </div>
        </IconContext.Provider>
          <p className='text-inherit font-bold text-lg '>Login</p>
      </div>
      </Link>
  )
}
