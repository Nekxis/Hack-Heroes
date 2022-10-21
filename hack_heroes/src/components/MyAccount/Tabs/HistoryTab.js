import { IconContext } from "react-icons/lib";
import { GrClose } from "react-icons/gr";

export default function HistoryTab ({orders}) {
        console.log(orders[0].category)
    return(
        <div className="w-full">
            {orders.map((order) => {
                return(
                    <div key={order.id} className="flex justify-around bg-white box-border cursor-pointer lg:h-80 sm:h-144">
                      <div className="border-solid  border-2  border-gray-400 rounded-md drop-shadow-md hover:shadow-xl hover:bg-white-smoke grid sm:w-96 grid-cols-1 justify-end items-center gap-y-4 gap-x-4 py-10 px-4 py-10 sm:my-7 sm:mx-10 xl:w-11/12 lg:w-full lg:grid-cols-3 lg:my-4 lg:mx-6 lg:px-6 lg:py-6">
                            <div className={'flex lg:justify-end sm:justify-around'}>
                                <img
                                 src={`/categories_image/${order.category}.png`}
                                 alt={order.category}
                                className="flex rounded-lg bg-gray-100  lg:w-full sm:w-1/2 shadow-md"
                                />
                            </div>
                            <div className={'lg:col-span-2'}>
                            <h2 className="text-3xl font-bold text-end tracking-tight text-gray-900 sm:text-4xl hover:underline hover:cursor-pointer capitalize">{order.title}</h2>
                            <p className="mt-4 text-end text-lg text-gray-500">{order.description}</p>
                                <ul className={'flex justify-end justify-self-end items-end py-2'}>
                                    <li className="text-3xl font-bold px-2">{`${order.price} zł`}</li>
                                    <li className="text-xl text-our-grey px-2">Jakub</li>
                                </ul>

                         </div>
                      </div>
                      <button onClick={async () => { await router.push('/') }} className=" drop-shadow-xl text-white px-6 py-4 my-4 bg-red-600 rounded-lg hover:bg-red-500 focus:bg-red700">
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
