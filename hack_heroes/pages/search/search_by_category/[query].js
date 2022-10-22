import { useRouter } from 'next/router';
import { IconContext } from "react-icons/lib";
import { query, collection, where, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';
import { GrClose } from "react-icons/gr";
import MainSection from "../../../src/components/MainSection/MainSection";

export async function getServerSideProps(context) {
    const category = context.params.query;
    const ordersRef = collection(db, 'Orders');

    const categoryQuery = query(ordersRef, where("category", "==", category));
    const querySnapshot = await getDocs(categoryQuery);
    const filteredOrders = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return {
        props: {
            filteredOrders,
            category

        }
    }
}

export default function SearchPage({ filteredOrders}) {

  const router = useRouter()
  const category = router.query
  console.log(category)

    return (
      <div className={'w-full h-screen'}>
        <div className={'w-full h-1/5 flex items-center bg-white-smoke border-b-2 '}>
          <button onClick={async () => { await router.push('/') }} className="flex drop-shadow-xl text-white md:px-6 md:py-4 md:m-4 sm:px-2 sm:py-2 sm:m-2 rounded-lg hover:bg-lite-graphite focus:bg-super-lite-graphite">
            <IconContext.Provider value={{ size: '2rem' }}>
              <div className='text-inherit'>
                <GrClose />
              </div>
            </IconContext.Provider>
          </button>
          <div className={'flex lg:w-52 sm:w-1/5 '}>
            <img
              src={`/categories_image/${category.query}.png`}
              alt={category.query}
              className="flex rounded-lg bg-gray-100 shadow-md"
            />
          </div>
          <p className={'flex w-1/6 md:p-10 sm:p-6 text-3xl '}>
            {category.query}
          </p>
        </div>
        <div>
          <MainSection orders={filteredOrders} />
        </div>
      </div>
    )
}
