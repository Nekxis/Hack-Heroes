import DataTab from "./Tabs/DataTab"
export default function MyAccount () {

const profilePhoto = [{
  photo:'https://freepikpsd.com/file/2019/10/default-profile-picture-png-1-Transparent-Images.png'
}]

  return(
    <div className="flex flex-col  mx-auto justify-center items-center ">
      <img className="w-1/10 h-1/6 rounded-full mt-10"  src={profilePhoto[0].photo}></img>
      <h2 className="text-xl font-bold">Olaf Wiśnia</h2>
      <div className="grid lg:grid-cols-2 m-8 grid-col-1 ">
        <button className="w-full px-36 py-4  border-solid border-2  border-gray-400 hover:border-gray-300 active:border-b-black">Moje dane</button>
        <button className="w-full px-36 py-4  border-solid border-2  border-gray-400 hover:border-gray-300 active:border-b-black">Histioria moich zleceń</button>
      </div>
      <div className="flex items-center w-full justify-center">
      <DataTab></DataTab>
      </div>
    </div>
  )
}
