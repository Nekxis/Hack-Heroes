import DataTab from "./Tabs/DataTab"
import HistoryTab from "./Tabs/HistoryTab"
import { useState } from "react";

export default function MyAccount () {
  const [tabs, setTabs] = useState(true);

const profilePhoto = [{
  photo:'https://freepikpsd.com/file/2019/10/default-profile-picture-png-1-Transparent-Images.png'
}]

  return(
    <div className="flex flex-col  mx-auto justify-center items-center ">
      <img className="w-1/10 h-1/6 rounded-full mt-10"  src={profilePhoto[0].photo}></img>
      <h2 className="text-xl font-bold">Olaf Wiśnia</h2>
      <button onClick={() => firebaseConfig.auth().singOut()} className="mt-16 drop-shadow-xl text-white px-12 py-4 bg-graphite rounded-lg hover:bg-lite-graphite focus:bg-super-lite-graphite">Log out</button>
      <div className="grid lg:grid-cols-2 m-8 grid-col-1 ">
        <button onClick={() => setTabs(true)} className="w-full px-36 py-4  border-solid border-2  border-gray-400 hover:border-gray-300 focus:border-b-black">Moje dane</button>
        <button onClick={() => setTabs(false)} className="w-full px-36 py-4  border-solid border-2  border-gray-400 hover:border-gray-300 focus:border-b-black">Histioria moich zleceń</button>
      </div>
      <div className="flex items-center w-full justify-center">
        {tabs && <DataTab />}
        {!tabs && <HistoryTab />}
      </div>
    </div>
  )
}
