import Navbar from '../src/components/Navbar/Navbar';
import MainSection from "../src/components/MainSection/MainSection";
import CategoriesBar from '../src/components/categories-bar/CategoriesBar';
import Footer from "../src/components/Footer/Fotter";
import MobileNavbar from '../src/components/Footer/mobile-navbar';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import AddOrderButton from "../src/components/AddOrderButton/AddOrderButton";

export async function getServerSideProps() {
  const ordersRef = collection(db, 'Orders');
  const data = await getDocs(ordersRef);
  const orders = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return {
    props: {
      orders: orders
    }
  }
}

export default function Home({ orders }) {


  return (
    <div className='w-10/10'>
      <AddOrderButton />
      <Navbar />
      <CategoriesBar />
      <MainSection orders={orders} />
      <Footer />
      <MobileNavbar />
    </div>
  )
}
