import {getDoc, doc} from 'firebase/firestore';
import { db } from '../../firebase';
import {useRouter} from "next/router";


export default function OrderDetails({ order }) {

  const router = useRouter()



  const phone = order.phoneNumber.split(/(.{3})(.{3})(.{3})/);

  return (

      <div className={'flex flex-col h-screen w-full'}>
        <button onClick={ () => { router.push('/') }} className="w-28 drop-shadow-xl text-white px-6 py-4 m-4 bg-graphite rounded-lg hover:bg-lite-graphite focus:bg-super-lite-graphite">Powrót</button>
        <div className={'flex w-full h-full items-center justify-center'}>
        <div className={'grid md:grid-cols-3 grid-cols-1 grid-rows-3 md:h-4/5 sm:h-full w-full md:px-16 px-8 self-center sm:pt-8 md:self-center sm:self-start'}>
          <div className={'flex flex-col col-span-1 row-span-1 sm:justify-center md:items-start sm:items-center'}>
            <img src={`/categories_image/${order.category}.png`} alt="#" className='w-1/2 drop-shadow-xl rounded'/>
            <div className={'border-black border-solid border-t-2 my-2'}>{order.category}</div>
          </div>
          <div className={'flex flex-col md:col-span-2 row-span-1 items-end '}>
            <div className={'flex w-fit justify-end text-right font-bold md:text-6xl text-4xl pl-6 p-2 border-b-2 border-black'}>{order.title}</div>
            <div className={'md:w-2/3 w-3/4 flex flex-col justify-end items-end self-end justify-between'}>
              <div className={'flex justify-between w-5/6 py-2 md:text-3xl'}>
                <div>tel. {`${phone[1]} ${phone[2]} ${phone[3]}`}</div>
                <div>{order.city}</div>
              </div>
              <div className={'md:text-5xl text-4xl pt-2 font-bold'}>{order.price} zł</div>
            </div>
          </div>
          <div className={'flex flex-col pt-6 md:col-span-3 row-span-2 md:text-4xl text-2xl items-end'}>
            <div className={'font-bold'}> Opis: </div>
            <div className={'text-right pt-4 w-full h-full'}>
              {order.description}
            </div>
          </div>
          </div>
        </div>
      </div>
    )
}

export async function getServerSideProps(context) {

    const orderId = context.params.orderId;
    const docRef = doc(db, 'Orders', orderId);
    const docSnap = await getDoc(docRef);

    return {
        props: {
            order: docSnap.data(),
        }
    }

}
