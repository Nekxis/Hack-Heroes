import { useContext } from 'react';
import { Context } from '../../Context/Context';
import LoginButton from '../Navbar/Buttons/LoginButton'
import MyAccountButton from '../Navbar/Buttons/MyAccountButton'
export default function MobileNavbar() {

    const context = useContext(Context);
    const { user } = context;
    return (
        <section className="fixed flex justify-evenly items-center mt-2 h-auto p-2 bottom-0 right-0 w-full bg-navbar-background md:hidden">
            <img className='rounded w-25 h-14'src='/logo.png' alt='' />
            {user ? <MyAccountButton /> : <LoginButton />}
        </section>
    )

}