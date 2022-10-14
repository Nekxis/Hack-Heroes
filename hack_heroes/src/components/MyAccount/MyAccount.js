export default function MyAccount () {
  return(
    <div className={'h-screen w-full flex items-center justify-center'}>
      <div className={'h-4/5  w-11/12 grid grid-cols-3 row-end-3'}>
        <div className={'col-span-3 p-5 flex justify-start self-center ml-5'}>
          <img src="#" alt="#"/>
          <div className={'px-4 text-5xl font-bold'}>Account Details</div>
        </div>
        <div className={'row-span-3  flex flex-col justify-start'}>
          <div className={'flex justify-around items-center text-3xl py-10 px-2 bg-white-smoke border-t-black border-t-2'}>
            <p>Placeholder</p>
            <img src="#" alt="#"/>
          </div>
          <div className={'flex justify-around items-center text-3xl py-10 px-2 bg-white-smoke border-t-black border-t-2'}>
            <p>Placeholder</p>
            <img src="#" alt="#"/>
          </div>
          <div className={'flex justify-around items-center text-3xl py-10 px-2 bg-white-smoke border-t-black border-t-2'}>
            <p>Placeholder</p>
            <img src="#" alt="#"/>
          </div>
          <div className={'flex justify-around items-center text-3xl py-10 px-2 bg-white-smoke border-t-black border-t-2'}>
            <p>Placeholder</p>
            <img src="#" alt="#"/>
          </div>
          <div className={'flex justify-around items-center text-3xl py-10 px-2 bg-white-smoke border-t-black border-t-2'}>
            <p>Placeholder</p>
            <img src="#" alt="#"/>
          </div>
        </div>
      </div>
    </div>
  )
}
