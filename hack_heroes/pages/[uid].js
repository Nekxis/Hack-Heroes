import MyAccount from "../src/components/MyAccount/MyAccount";
import { db } from "../firebase";
import { doc, getDoc } from 'firebase/firestore';

export async function getServerSideProps(context) {
  const uid = context.params.uid;
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);

  return {
    props: {
      data: docSnap.data()
    }
  }
}

export default function UserDashboard({ data }) {
  console.log(data.userName);
  return (
    <div>
      <MyAccount userName={data.userName}/>
    </div>
  )
}
