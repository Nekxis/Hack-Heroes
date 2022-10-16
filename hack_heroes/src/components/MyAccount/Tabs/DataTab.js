export default function DataTab ({email}) {
  return (
    <div className={'w-2/3 h-full flex flex-col justify-around self-start'}>
      <div className={'flex p-5 flex-col'}>
        <p className={'text-xl'}>Nazwa Użytkownika:</p>
        <p className={'text-2xl'}>#</p>
      </div>
      <div className={'flex border-t-2 border-gray-400 p-5 flex-col'}>
        <p className={'text-xl'}>Email:</p>
        <p className={'text-2xl'}>{email}</p>
      </div>
      <div className={'flex border-t-2 border-gray-400 p-5 flex-col'}>
        <button className="w-1/5 mx-auto justify-center sefl-start drop-shadow-xl content-center text-white mt-5  py-3 bg-graphite rounded-lg hover:bg-lite-graphite focus:bg-super-lite-graphite">Zmień Hasło</button>
      </div>
    </div>
  )
}
