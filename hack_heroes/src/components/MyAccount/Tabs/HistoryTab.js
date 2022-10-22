import { IconContext } from "react-icons/lib";
import { GrClose } from "react-icons/gr";
import { doc,delateDoc } from "@firebase/firestore";

export default function HistoryTab ({orders}) {
   if(orders[0]===undefined){ return <h2 className="mt-4 text-2xl text-our-grey px-2">Nie Dodałeś jeszcze zadnego zlecenia :(</h2>}
    return(
        <div className="w-full">
            {orders.map((order) => {
                return(
                    <div key={order.id} className="flex justify-around bg-white box-border cursor-pointer lg:h-80 sm:w-full sm:h-144">
                      <div className="border-solid  border-2  border-gray-400 rounded-md drop-shadow-md hover:shadow-xl hover:bg-white-smoke grid sm:w-96 grid-cols-1 justify-end items-center gap-y-4 gap-x-4 px-4 py-10 sm:my-7 sm:mx-10 xl:w-11/12 lg:w-full lg:grid-cols-3 lg:my-4 lg:mx-6 lg:px-6 lg:py-6">
                            <div className={'flex sm:w-full xxl:w-6/10  w-60 lg:justify-end sm:justify-around'}>
                                <img
                                 src={`/categories_image/${order.category}.png`}
                                 alt={order.category}
                                className="flex rounded-lg bg-gray-100  lg:w-full sm:w-1/2 shadow-md"
                                />
                            </div>
                            <div className={'lg:col-span-2'}>
                            <h2 className="text-3xl font-bold text-end tracking-tight text-gray-900 sm:text-2xl hover:underline hover:cursor-pointer capitalize">{order.title}</h2>
                            <p className="mt-4 text-end text-lg break-words text-gray-500">{order.description}</p>
                                <ul className={'flex justify-end justify-self-end items-end py-2'}>
                                    <li className="text-3xl sm:text-xl  font-bold px-2">{`${order.price} zł`}</li>
                                    <li className="text-xl text-our-grey px-2">{order.city}</li>
                                </ul>

                         </div>
                      </div>
                      <button  className=" drop-shadow-xl text-white px-6 sm:w-1/9 py-4 my-4 bg-red-600 rounded-lg hover:bg-red-700 focus:bg-red-500">
                        <IconContext.Provider value={{ size: '2rem'}}>
                          <div>
                            <GrClose />
                          </div>
                        </IconContext.Provider>
                      </button>
                  </div>
                        )
                })}
             </div>
         )
}
