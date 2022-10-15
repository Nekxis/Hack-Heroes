import DataTab from "./Tabs/DataTab"
import HistoryTab from "./Tabs/HistoryTab"
import { useState, useContext, useEffect } from "react";
import { doc, getDoc, collection } from "@firebase/firestore";
import { db } from "../../../firebase";
import { Context } from "../../Context/Context";





export default function MyAccount () {

  const logout = async () => { third }



  const context = useContext(Context)
  const {user} = context

  const [tabs, setTabs] = useState(true);
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const getUserName = async () => {
      const docRef = await doc(db, 'users', 'kn85VsneDfVoCnXJGQA2DwFUYVp1');
      const docSnap = await getDoc(docRef)
    }
    getUserName()
  },[user])

const profilePhoto = [{
  photo:'https://freepikpsd.com/file/2019/10/default-profile-picture-png-1-Transparent-Images.png'
}]

  return(
    <div className="flex flex-col  mx-auto justify-center items-center ">
      <img className="w-1/10 h-1/6 rounded-full mt-10"  src={profilePhoto[0].photo}></img>
      <h2 className="text-xl font-bold">qwe</h2>
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
