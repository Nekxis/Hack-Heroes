import DataTab from "./Tabs/DataTab"
import HistoryTab from "./Tabs/HistoryTab"
import { useContext, useState, useEffect } from "react";
import { Context } from "../../Context/Context";
import { useRouter } from "next/router";
import { auth } from '../../../firebase';
import { signOut } from "firebase/auth";
export default function MyAccount({ userName, userOrders }) {

  const [tabs, setTabs] = useState(true);
  const context = useContext(Context)
  const router = useRouter();

  const profilePhoto = [{
    photo: 'https://freepikpsd.com/file/2019/10/default-profile-picture-png-1-Transparent-Images.png'
  }]



  return (
    <div className="flex flex-col w-full h-screen">
      <div className={'flex w-full'}>
        <div className="flex w-1/2 justify-start">
          <button onClick={ () => {  router.push('/') }} className=" drop-shadow-xl text-white px-6 py-4 m-4 bg-graphite rounded-lg hover:bg-lite-graphite focus:bg-super-lite-graphite">Powrót</button>
        </div>
        <div className="flex w-1/2 justify-end">
          <button onClick={async () => { await signOut(auth); router.push('/') }} className="m-4 drop-shadow-xl text-white px-6 py-4 bg-graphite rounded-lg hover:bg-lite-graphite focus:bg-super-lite-graphite">Wyloguj</button>
        </div>
      </div>
      <div className="flex  lg:w-3/5 w-full h-screen self-center justify-center">
        <div className="flex flex-col w-5/6">
        <img className="self-center w-24 rounded-full mt-10" src={profilePhoto[0].photo}></img>
        <h2 className="self-center m-6 text-3xl font-bold">{userName}</h2>
        <div className="flex justify-around">
          <button onClick={() => setTabs(true)} className={`w-full h-full p-4 m-2 flex justify-center self-center items-center rounded-lg border-solid border-2 border-gray-400 hover:border-gray-300 ${tabs && ' bg-black text-white '}`}>Moje dane</button>
          <button onClick={() => setTabs(false)} className={`w-full h-full p-4 m-2 flex justify-center self-center items-center rounded-lg border-solid border-2 border-gray-400 hover:border-gray-300 ${!tabs && 'bg-black text-white'}`}>Histioria moich zleceń</button>
        </div>
        <div className="flex w-full justify-center my-4">
          {tabs && <DataTab userName={userName} email={context?.user?.email} />}
          {!tabs && <HistoryTab  orders={userOrders} />}
        </div>
      </div>
    </div>
    </div>
  )
}
