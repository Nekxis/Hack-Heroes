import { useRef, useContext } from 'react';
import { useRouter } from 'next/router';
import { db } from '../../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Context } from '../../Context/Context';
const AddOrder = () => {



    const router = useRouter();
    const context = useContext(Context);
    const titleRef = useRef();
    const cityRef = useRef();
    const categoryRef = useRef();
    const priceRef = useRef();
    const phoneNumberRef = useRef();
    const descriptionRef = useRef();

    console.log(context.user);
    const ordersRef = collection(db, 'Orders');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const enteredValues = {
            title: titleRef.current.value,
            city: cityRef.current.value,
            category: categoryRef.current.value,
            price: priceRef.current.value,
            phoneNumber: phoneNumberRef.current.value,
            description: descriptionRef.current.value,

        }

        await addDoc(ordersRef,
            {
                title: enteredValues.title,
                price: enteredValues.price,
                description: enteredValues.description,
                city: enteredValues.city,
                category: enteredValues.category,
                phoneNumber: enteredValues.phoneNumber,
                user: context.user.uid
            });

        router.replace('/');

    }

    return (

        <div className={'flex flex-col h-screen'}>
          <button onClick={ () => { router.push('/') }} className="w-28 drop-shadow-xl text-white px-6 py-4 m-4 bg-graphite rounded-lg hover:bg-lite-graphite focus:bg-super-lite-graphite">Powrót</button>
        <div className="w-9/10 flex flex-col mx-auto items-center justify-center md:h-full">
            <div className="flex justify-center items-center">
                <form onSubmit={handleSubmit} className="md:w-full sm:w-80 md:m-0 sm:m-8 border-solid border-2 border-gray-400 grid lg:grid-cols-2 md:grid-col-1 drop-shadow-md md:gap-12 sm:gap-4 w-full rounded-lg shadow-md bg-white-smoke md:p-10 sm:p-8 justify-self-center">
                    <h2 className="text-left lg:col-span-2 md:text-4xl sm:text-xl font-bold">Dodaj nowe zlecenie</h2>
                    <div className="flex flex-col lg:col-span-2">
                        <label className={'font-bold md:text-2xl sm:text-base'}>Dodaj tytuł</label>
                        <input ref={titleRef} maxLength={30} required className="md:w-full sm:w-64 text-xl rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2  border-gray-400 focus:border-gray-300 " type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label className={'font-bold md:text-2xl sm:text-base'}>Dodaj Miejscowosc</label>
                        <input ref={cityRef} required className="md:w-full sm:w-64 text-xl text-black rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2 border-gray-400 focus:border-gray-300" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label className={'font-bold md:text-2xl sm:text-base'}>Kategoria</label>
                        <select ref={categoryRef} required className=" md:w-96 sm:w-64 text-xl rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2 border-gray-400 focus:border-gray-300">
                            <option value=""></option>
                            <option value="Sprzątanie">Sprzątanie</option>
                            <option value="Elektronika">Elektronika</option>
                            <option value="Wolontariat">Wolontariat</option>
                            <option value="Zakupy">Zakupy</option>
                            <option value="Ogrodnicze">Ogrodnicze</option>
                            <option value="Opieka">Opieka</option>
                            <option value="Inne">Inne</option>
                        </select>

                    </div>
                    <div className="flex flex-col">
                        <label className={'font-bold md:text-2xl sm:text-base'}>Cena</label>
                        <input required ref={priceRef} className=" md:w-96 sm:w-64 text-xl rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2 border-gray-400 focus:border-gray-300" type="number" min="1" max="1000"/>
                    </div>
                    <div className="flex flex-col">
                        <label className={'font-bold md:text-2xl sm:text-base'}>Numer telefonu</label>
                        <input required ref={phoneNumberRef} className=" md:w-96 sm:w-64 text-xl rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2 border-gray-400 focus:border-gray-300" type="tel" pattern='[0-9]{3}[0-9]{3}[0-9]{3}' />
                    </div>
                    <div className="flex flex-col lg:col-span-2">
                        <label className={'font-bold md:text-2xl sm:text-base'}>Opis</label>
                        <textarea required ref={descriptionRef} className=" md:w-full sm:w-64 text-xl text-black rounded-lg bg-gray-300 mt-2 outline-none p-1 border-solid border-2 border-gray-400 focus:border-gray-300 resize-none" type="text" />
                    </div>
                    <button className=" lg:col-span-2 md:w-1/3 sm:w-2/3 drop-shadow-xl m-auto content-center text-2xl text-white py-3 bg-graphite rounded-lg hover:bg-lite-graphite focus:bg-super-lite-graphite">Dodaj</button>
                </form>

            </div>
        </div>
        </div>
    )
 }
 export default AddOrder
