import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import { IconContext } from "react-icons/lib";
import { GrClose } from "react-icons/gr";
import MainSection from "../../../src/components/MainSection/MainSection";

export async function getServerSideProps(context) {
  const query = context.params.text;

  const ordersRef = collection(db, 'Orders');
  const data = await getDocs(ordersRef);
  const orders = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  const lowerCaseStrings = orders.map((order) => {
    return { ...order, title: order.title.toLowerCase(), city: order.city.toLowerCase(), description: order.description.toLowerCase() };
  });
  const filteredOrdersWithTitle = lowerCaseStrings.filter((order) => {
    return order.title.includes(query)
  });
  const filteredOrdersWithCity = lowerCaseStrings.filter((order) => {
    return order.city.includes(query)
  });
  const filteredOrdersWithDescription = lowerCaseStrings.filter((order) => {
    return order.description.includes(query)
  });

  const filteredOrders = [...filteredOrdersWithTitle, ...filteredOrdersWithCity, ...filteredOrdersWithDescription]

  return {
    props: {
       filteredOrders,
    }
  }
}



export default function TextSearchPage({ filteredOrders }) {

  const router = useRouter()
  const category = router.query


  return (
    <div className={'w-full h-screen'}>
      <div className={'w-full h-1/5 flex items-center bg-white-smoke border-b-2 '}>
        <button onClick={async () => { await router.push('/') }} className="flex drop-shadow-xl text-white md:px-6 md:py-4 md:m-4 sm:px-2 sm:py-2 sm:m-2 rounded-lg hover:bg-whiteGray focus:bg-gray">
          <IconContext.Provider value={{ size: '2rem' }}>
            <div className='text-inherit'>
              <GrClose />
            </div>
          </IconContext.Provider>
        </button>
        <div className={'flex lg:w-52 sm:w-1/5 '}>
          <img
            src={'/categories_image/search.png'}
            alt={'search'}
            className="flex rounded-lg bg-gray-100 shadow-md"
          />
        </div>
        <p className={'flex w-1/6 md:p-10 sm:p-6 text-3xl '}>
          Rezultat wyszukiwania
        </p>
      </div>
      <div>
        <MainSection orders={filteredOrders} />
      </div>
    </div>
  )
}
