import { IconContext } from "react-icons/lib";
import { HiUserCircle } from "react-icons/hi";
import { useContext } from "react";
import Link from "next/link";
import { Context } from "../../../Context/Context";

export default function MyAccountButton() {

  const context = useContext(Context);
  console.log(context.user)
  return (
    <div className='w-44 rounded cursor-pointer border-2 border-black text-black ease-in-out duration-500 h-10 gap-1 flex items-center justify-center hover:bg-white hover:text-black'>
      <IconContext.Provider value={{ size: '2rem' }}>
        <div className='text-inherit'>
          <HiUserCircle />
        </div>
      </IconContext.Provider>
      <Link href="/myAccount">
        <p className='text-inherit font-bold text-lg '></p>
      </Link>
    </div>
  )
}
