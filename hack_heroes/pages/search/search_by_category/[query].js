import { useRouter } from 'next/router';
import { IconContext } from "react-icons/lib";
import { query, collection, where, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';
import { GrClose } from "react-icons/gr";

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
          <button onClick={async () => { await router.push('/') }} className="flex drop-shadow-xl text-white px-6 py-4 m-4  rounded-lg hover:bg-lite-graphite focus:bg-super-lite-graphite">
            <IconContext.Provider value={{ size: '2rem' }}>
              <div className='text-inherit'>
                <GrClose />
              </div>
            </IconContext.Provider>
          </button>
          <img
            src={`/categories_image/${category.query}.png`}
            alt={category.query}
            className="flex rounded-lg bg-gray-100  lg:w-1/6 sm:w-1/2 shadow-md"
          />
          <p className={'flex w-1/6 p-10 text-3xl '}>
            {category.query}
          </p>
        </div>
        <div></div>
      </div>
    )
}
