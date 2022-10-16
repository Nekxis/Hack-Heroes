import {getDoc, doc} from 'firebase/firestore';
import { db } from '../../firebase';


export default function OrderDetails({ order }) {
    return (
        <div>
            <h1 className='text-3xl'>{order.title}</h1>
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