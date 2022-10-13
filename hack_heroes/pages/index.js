import Navbar from '../src/components/Navbar/Navbar';
import MainSection from "../src/components/MainSection/MainSection";
import CategoriesBar from '../src/components/categories-bar/CategoriesBar';
export default function Home() {
  return (
    <div className='w-10/10'>
      <Navbar />
      <CategoriesBar />
      <MainSection />
    </div>
  )
}
