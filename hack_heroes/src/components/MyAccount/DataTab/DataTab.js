export default function DataTab () {
  return (
    <div className={'w-full h-full flex flex-col justify-around self-start'}>
      <div className={'flex p-5'}>
        <p className={'text-xl'}>Nazwa Użytkownika</p>
        <p className={'text-2xl'}>#</p>
      </div>
      <div className={'flex p-5'}>
        <p className={'text-xl'}>Email</p>
        <p className={'text-2xl'}>#</p>
      </div>
      <div className={'flex p-5'}>
        <p className={'text-xl'}>Zmień Hasło</p>
        <button className="w-1/2 justify-center drop-shadow-xl m-auto content-center text-white mt-5  py-3 bg-graphite rounded-lg hover:bg-lite-graphite focus:bg-super-lite-graphite">Zmień Hasło</button>
      </div>
    </div>
  )
}
