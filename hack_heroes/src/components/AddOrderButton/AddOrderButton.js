
import {useRouter} from "next/router";

export default function AddOrderButton () {

  const router = useRouter()
  return(
    <div className={'fixed bottom-6 right-6 z-10'}>
      <button onClick={async () => { await router.push('/addOrder') }} className="flex self-center w1/6 justify-center p-8 drop-shadow-xl text-white md:text-xl sm:text-base  m-4 bg-lite-graphite backdrop-blur-navbar-blur  rounded-lg hover:bg-super-lite-graphite focus:bg-graphite">Dodaj Zlecenie</button>
    </div>
  )
}
