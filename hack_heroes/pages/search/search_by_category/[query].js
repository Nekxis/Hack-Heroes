import { useRouter } from 'next/router';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';

export async function getServerSideProps(context) {
    const category = context.params.query;
    const ordersRef = collection(db, 'Orders');

    const categoryQuery = query(ordersRef, where("category", "==", category));
    const querySnapshot = await getDocs(categoryQuery);
    const filteredOrders = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })); 

    

    return {
        props: {
            filteredOrders
        }
    }
}




export default function SearchPage({ filteredOrders }) {
    return <div>{JSON.stringify(filteredOrders)}</div>
}