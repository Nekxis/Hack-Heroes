import MyAccount from "../src/components/MyAccount/MyAccount";
import { db } from "../firebase";
import { doc, getDoc, query, collection, where, getDocs } from 'firebase/firestore';
import AddOrderButton from '../src/components/AddOrderButton/AddOrderButton'

export async function getServerSideProps(context) {
  const uid = context.params.uid;
  const ordersRef = collection(db, 'Orders');

  const usersQuery = query(ordersRef, where("user", "==", uid));
  const dataSnapshot = await getDocs(usersQuery);
  const userOrders = dataSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })); 
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);

  return {
    props: {
      orders: docSnap.data(),
      userOrders
    }
  }
}

export default function UserDashboard({ orders, userOrders }) {
  
  return (
    <div>
      <MyAccount userName={orders.userName} userOrders={userOrders}/>
    </div>
  )
}
