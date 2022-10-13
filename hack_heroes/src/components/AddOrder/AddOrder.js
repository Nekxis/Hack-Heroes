const AddOrder = () => { 
    return(
        <div className="h-screen w-9/10 flex flex-col mx-auto justify-center items-center">
            <div className="flex justify-center items-center">
            <form className=" border-black border-2 grid lg:grid-cols-2 sm:grid-col-1 drop-shadow-md gap-12 w-full rounded-lg shadow-md bg-white-smoke p-10 ">
                <h2 className=" text-left lg:col-span-2 text-4xl font-bold">Dodaj nowe zlecenie</h2>
                <div className="flex flex-col">
                    <label className={'font-bold text-2xl'}>Dodaj tytuł</label>
                    <input className=" w-96 text-xl rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2  border-gray-400 focus:border-gray-300" type="text"/>
                </div>
                <div className="flex flex-col">
                    <label className={'font-bold text-2xl'}>Dodaj Miejscowosc</label>
                    <input className=" w-96 text-xl rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2 border-gray-400 focus:border-gray-300" type="text"/>
                </div>
                <div className="flex flex-col">
                    <label className={'font-bold text-2xl'}>Opis</label>
                    <input className=" w-96 text-xl text-black rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2 border-gray-400 focus:border-gray-300" type="text"/>
                </div>
                <div className="flex flex-col">
                    <label className={'font-bold text-2xl'}>Kategoria</label>
                    <select className=" w-96 text-xl rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2 border-gray-400 focus:border-gray-300">
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
                    <label className={'font-bold text-2xl'}>Cena</label>
                    <input className=" w-96 text-xl rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2 border-gray-400 focus:border-gray-300" type="number"/>
                </div>
                <div className="flex flex-col">
                    <label className={'font-bold text-2xl'}>Numer telefonu</label>
                    <input className=" w-96 text-xl rounded-lg bg-gray-300 mt-2 outline-none p-2 border-solid border-2 border-gray-400 focus:border-gray-300" type="tel" pattern='[0-9]{3}-[0-9]{3}-[0-9]{3}'/>
                </div>
                <div className="flex flex-col lg:col-span-2">
                    <label className={'font-bold text-2xl'}>Opis</label>
                    <textarea className=" w-full text-xl text-black rounded-lg bg-gray-300 mt-2 outline-none p-1 border-solid border-2 border-gray-400 focus:border-gray-300 resize-none"  type="text"/>
                </div>
                <button className=" lg:col-span-2 w-1/3 drop-shadow-xl m-auto content-center text-white py-3 bg-graphite rounded-lg hover:bg-lite-graphite focus:bg-super-lite-graphite">Dodaj</button>
            </form>
            </div>
        </div>
    )
 }
 export default AddOrder