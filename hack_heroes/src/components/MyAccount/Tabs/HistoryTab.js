import { IconContext } from "react-icons/lib";
import { GrClose } from "react-icons/gr";
import { doc,deleteDoc } from "@firebase/firestore";
import { db } from "../../../../firebase";
import { useRouter } from "next/router";

export default function HistoryTab ({orders}) {
  const router = useRouter()

   if(orders[0]===undefined){ return <h2 className="mt-4 sm:text-2xl text-our-grey px-2 lg:text-sm">Nie Dodałeś jeszcze zadnego zlecenia :(</h2>}
    const deleteDocHandler = async (id) => {
      await deleteDoc(doc(db, "Orders", id))
      router.reload()
     }



    return(
        <div className="w-full">
            {orders.map((order) => {
              function truncate() {
                const n = 50;
              return (order.description.length > n) ? order.description.slice(0, n-1) + '...' : order.description;
            }
                return(
                    <div key={order.id} className="flex justify-center bg-white box-border lg:h-80 sm:w-full md:h-144 sm:h-96">
                      <div className="border-solid  border-2  border-gray-400 rounded-md drop-shadow-md hover:shadow-xl hover:bg-white-smoke grid sm:w-96 grid-cols-1 justify-end items-center gap-y-4 gap-x-4 px-4 py-10 sm:my-7 md:ml-10 sm:ml-0 sm:mr-4 xl:w-11/12 lg:w-full lg:grid-cols-3 lg:my-4 lg:mx-6 lg:px-6 lg:py-6">
                            <div className={'flex sm:w-full xxl:w-6/10  w-60 lg:justify-end sm:justify-around'}>
                                <img
                                 src={`/categories_image/${order.category}.png`}
                                 alt={order.category}
                                className="flex rounded-lg bg-gray-100  lg:w-full sm:w-1/2 shadow-md"
                                />
                            </div>
                            <div className={'lg:col-span-2'}>
                            <h2 className=" font-bold text-end tracking-tight text-gray-900 md:text-2xl sm:text-base hover:underline hover:cursor-pointer capitalize">{order.title}</h2>
                            <p className="mt-4 text-end md:text-lg sm:text-sm break-words text-gray-500">{truncate()}</p>
                                <ul className={'flex justify-end justify-self-end items-end py-2'}>
                                    <li className="text-3xl sm:text-xl  font-bold px-2">{`${order.price} zł`}</li>
                                    <li className="md:text-xl sm:text-base text-our-grey px-2">{order.city}</li>
                                </ul>

                         </div>
                      </div>
                      <button onClick={() => { deleteDocHandler(order.id)}} className="lg:w-20 sm:w-12 drop-shadow-xl text-white lg:px-6 sm:px-2 sm:w-1/9 py-4 lg:my-4 md:my-7 sm:my-7 md:mr-6 sm:mr-0 bg-red-600 rounded-lg hover:bg-red-700 focus:bg-red-500">
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
