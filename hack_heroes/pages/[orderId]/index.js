import {getDoc, doc} from 'firebase/firestore';
import { db } from '../../firebase';


export default function OrderDetails({ order }) {
    console.log(order);
    return (
        <div>
            {JSON.stringify(order)}
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