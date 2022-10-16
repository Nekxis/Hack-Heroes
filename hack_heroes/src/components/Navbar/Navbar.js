import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import MyAccountButton from "./Buttons/MyAccountButton";
import LoginButton from "./Buttons/LoginButton";
import { Context } from "../../Context/Context";
import Link from 'next/link';
import { useState, useContext } from 'react'
import { useRouter } from 'next/router';
import { HiUserCircle } from 'react-icons/hi';

export default function Navbar() {

    const context = useContext(Context)
    const [query, setQuery] = useState('');
    const router = useRouter();
    const searchHandler = () => {
        router.push('/search/' + query)
    };


    return (
        <nav className='sticky top-0 right-0 w-full z-10 bg-navbar-background backdrop-blur-navbar-blur md:h-14 h-20'>
            <div className='hidden h-full gap-14 w-full md:flex items-center justify-center'>
                <div className='hidden bg-black w-40 h-10 rounded text-white font-bold lg:flex justify-center items-center text-2xl'>LOGO</div>

                <div className={`w-6/10 h-10 bg-white rounded-l flex items-center `}>
                    <input onChange={(event) => setQuery(event.target.value)} className='w-full  p-1.5 h-full outline-none text-lg bg-transparent placeholder:text-black ' type='text' placeholder='Czego dziś szukasz...' />
                    <IconContext.Provider value={{ size: '2rem' }}>
                        <div onClick={searchHandler} className='cursor-pointer h-10 w-1/10 text-white bg-black flex duration-300 ease-in-out justify-center items-center rounded-r hover:text-black hover:bg-darkWhite'>
                            <AiOutlineSearch />
                        </div>
                    </IconContext.Provider>
                </div>
                <div className='w-36 rounded cursor-pointer border-2 border-black text-black ease-in-out duration-500 h-10 gap-1 flex items-center justify-center hover:bg-white hover:text-black'>
                    <IconContext.Provider value={{ size: '2rem' }}>
                        <div className='text-inherit pr-2'>
                            <HiUserCircle />
                        </div>
                    </IconContext.Provider>
                    <Link href={`${context.user ? `/${context?.user?.uid}` : `/auth/login` }`}>
                        <p className='text-inherit font-bold text-lg '>My account</p>
                    </Link>
                </div>



                {/* {context.button && <LoginButton userName={context.user.email} />}
                {!context.button && <MyAccountButton />} */}
            </div>

            {/* Mobile version */}
            <div className='flex md:hidden py-3 w-full justify-center items-center h-full'>
                <input className='w-8/10 rounded-l outline-none text-lg p-2 placeholder:text-black' type='text' placeholder='Czego dziś szukasz...' />
                <IconContext.Provider value={{ size: '1.5rem' }}>
                    <div className='cursor-pointer flex items-center justify-center bg-black px-3 py-2 rounded-r text-white' style={{ height: '44px' }}>
                        <AiOutlineSearch />
                    </div>
                </IconContext.Provider>
            </div>
            {/* End of mobile version */}

        </nav>
    )
}
