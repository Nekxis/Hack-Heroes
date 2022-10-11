import logo from '../../../assets/images/logo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiUserCircle } from 'react-icons/hi';
import { IconContext } from 'react-icons/lib';

export default function Navbar() {

    return (
        <nav className='sticky top-0 right-0 w-full bg-navbar-background backdrop-blur-navbar-blur md:h-14 h-20'>
            <div className='hidden h-full gap-14 w-full md:flex items-center justify-center'>
                <div className=' bg-black w-40 h-10 rounded text-white font-bold flex justify-center items-center text-2xl'>LOGO</div>

                <div className={`w-5/10 h-10 bg-white rounded-l flex items-center `}>
                    <input className='w-full p-1.5 h-full outline-none text-lg bg-transparent placeholder:text-black ' type='text' placeholder="Search..." />
                    <IconContext.Provider value={{size: '2rem'}}>
                        <div className='cursor-pointer h-10 w-1/10 text-white bg-black flex justify-center items-center rounded-r'>
                            <AiOutlineSearch />
                        </div>
                    </IconContext.Provider>
                </div>

                <div className='w-44 rounded cursor-pointer bg-black-background text-white ease-in-out duration-500 h-10 gap-1 flex items-center justify-center hover:bg-white hover:text-black'>
                    <IconContext.Provider value={{size: '2rem'}}>
                        <div className='text-inherit'>
                          <HiUserCircle />
                        </div>
                    </IconContext.Provider>
                    <p className='text-inherit font-bold text-lg '>My account</p>
                </div>
            </div>

            {/* Mobile version */}
            <div className='flex sm:hidden py-3 w-full justify-center items-center h-full'>
                <input className='w-8/10 rounded-l outline-none text-lg p-2' type='text' />
                <IconContext.Provider value={{size: '1.5rem'}}>
                        <div className='cursor-pointer flex items-center justify-center bg-black px-3 py-2 rounded-r text-white' style={{height: '44px'}}>
                            <AiOutlineSearch />
                        </div>
                    </IconContext.Provider>
            </div>
            {/* End of mobile version */}

        </nav>
    )
}