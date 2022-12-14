
import {useRouter} from 'next/router'



export default function SectionElement ({title, description, price, id, category, city}) {

  const router = useRouter();

  const showDetailsPage = (id) => {
    router.push('/orderDetails/' + id);
  }

  function truncate() {
    const n = 60;
    return (description.length > n) ? description.slice(0, n-1) + '...' : description;
  }

  return(
    <div  className="flex justify-around bg-white box-border lg:h-80 sm:h-144">
      <div onClick={() => {showDetailsPage(id)}} className="border-solid cursor-pointer border-2  rounded-md drop-shadow-md hover:shadow-xl hover:bg-white-smoke grid sm:w-96 grid-cols-1 justify-end items-center gap-y-4 gap-x-4 py-10 px-4 sm:px-2 sm:py-10 sm:my-7 sm:mx-10 xl:w-11/12 lg:w-full lg:grid-cols-3 lg:my-4 lg:mx-6 lg:px-6 lg:py-6">
          <div className={'flex lg:justify-end sm:justify-around'}>
              <img
                src={`/categories_image/${category}.png`}
                alt={category}
                className="flex rounded-lg bg-gray-100  lg:w-full sm:w-1/2 shadow-md"
              />
        </div>
        <div className={'lg:col-span-2'}>
          <h2 className="md:text-3xl font-bold text-end tracking-tight text-gray-900 sm:text-4xl hover:underline hover:cursor-pointer capitalize">{title}</h2>
          <p className="mt-4 text-end text-lg text-gray-500">
           {truncate()}
          </p>
          <ul className={'flex justify-end justify-self-end items-end py-2'}>
            <li className="text-3xl font-bold px-2">{category === 'Wolontariat' ? '' : `${price} zł` }</li>
            <li className="text-xl text-our-grey px-2">{city}</li>
          </ul>

        </div>
      </div>
    </div>
  )
}
