import DataTab from "./Tabs/DataTab"
import HistoryTab from "./Tabs/HistoryTab"
import { useContext, useState, useEffect } from "react";
import { Context } from "../../Context/Context";
import { useRouter } from "next/router";
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../../../firebase";

export default function MyAccount({ userName }) {

  const [tabs, setTabs] = useState(true);
  const context = useContext(Context)
  const router = useRouter();

  const profilePhoto = [{
    photo: 'https://freepikpsd.com/file/2019/10/default-profile-picture-png-1-Transparent-Images.png'
  }]



  return (
    <div className="flex flex-col  mx-auto justify-center items-center ">
      <img className="w-1/10 h-1/6 rounded-full mt-10" src={profilePhoto[0].photo}></img>
      <h2 className="text-xl font-bold">{userName}</h2>
      <div className="grid lg:grid-cols-2 m-8 grid-col-1 ">
        <button onClick={() => setTabs(true)} className="w-full px-36 py-4  border-solid border-2  border-gray-400 hover:border-gray-300 focus:border-b-black">Moje dane</button>
        <button onClick={() => setTabs(false)} className="w-full px-36 py-4  border-solid border-2  border-gray-400 hover:border-gray-300 focus:border-b-black">Histioria moich zleceń</button>
      </div>
      <div className="flex items-center w-full justify-center">
        {tabs && <DataTab userName={userName} email={context.user.email} />}
        {!tabs && <HistoryTab />}
      </div>
    </div>
  )
}
