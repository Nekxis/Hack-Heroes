import {getDoc, doc} from 'firebase/firestore';
import { db } from '../../firebase';


export default function OrderDetails({ order }) {
    console.log(order);
    return (
      <div className={'flex h-screen w-full '}>
        <div className={'grid grid-cols-3 grid-rows-3 h-2/3 w-full px-16 self-center'}>
          <div className={'flex flex-col col-span-1 row-span-1'}>
            <img src="#" alt="#"/>
            <div className={''}>{order.category}</div>
          </div>
          <div className={'flex flex-col col-span-2 row-span-1 items-end '}>
            <div className={'flex w-fit justify-end text-right font-bold text-6xl pl-6 pb-2 border-b-2 border-black'}>{order.title}</div>
            <div className={'w-1/2 flex flex-col justify-end items-end self-end justify-between'}>
              <div className={'flex justify-between w-5/6 py-2 text-2xl'}>
                <div>{order.phoneNumber}</div>
                <div>{order.city}</div>
              </div>
              <div className={'text-5xl pt-2 font-bold'}>{order.price} zł</div>
            </div>
          </div>
          <div className={'flex flex-col pt-6 col-span-3 row-span-2 text-4xl items-end'}>
            <div className={'font-bold'}> Opis: </div>
            <div className={'text-right pt-4 w-full h-full'}>
              {order.description}
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
