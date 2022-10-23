import { useContext } from 'react';
import { Context } from '../../Context/Context';
import LoginButton from '../Navbar/Buttons/LoginButton'
import MyAccountButton from '../Navbar/Buttons/MyAccountButton'
export default function MobileNavbar() {

    const context = useContext(Context);
    const { user } = context;
    return (
        <section className="fixed backdrop-blur-navbar-blur flex justify-evenly items-center mt-2 h-16 p-2 bottom-0 right-0 w-full bg-navbar-background md:hidden">
            <img className='rounded w-28'src='/logo.png' alt='' />
            {user ? <MyAccountButton /> : <LoginButton />}
        </section>
    )

}
