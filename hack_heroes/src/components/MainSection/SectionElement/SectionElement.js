import {useRouter} from 'next/router'

export default function SectionElement ({title, description, price, id}) {

  const router = useRouter();

  const showDetailsPage = (id) => {
    router.push('/' + id);
  }

  return(
    <div onClick={() => {showDetailsPage(id)}} className="flex justify-around bg-white box-border cursor-pointer">
      <div className="border-solid  border-2  border-gray-400 rounded-md drop-shadow-md hover:shadow-xl hover:bg-white-smoke grid max-w-sm grid-cols-1 justify-end items-center gap-y-24 gap-x-4 py-14 px-4 sm:px-6 sm:py-10 sm:my-7 sm:mx-10 lg:max-w-7xl lg:grid-cols-3 lg:my-4 lg:mx-6 lg:px-8">
          <div className={'flex lg:justify-end sm:justify-around'}>
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                alt="Walnut card tray with white powder coated steel divider and 3 punch out holes."
                className="flex rounded-lg bg-gray-100  lg:w-full sm:w-1/2 shadow-md"
              />
        </div>
        <div className={'lg:col-span-2 lg:pl-4 pl-4'}>
          <h2 className="text-3xl font-bold text-end tracking-tight text-gray-900 sm:text-4xl hover:underline hover:cursor-pointer">{title}</h2>
          <p className="mt-4 text-end text-lg text-gray-500">
           {description}
          </p>
          <ul className={'flex sm:justify-self-end lg:flex-row sm:pl-24  sm:justify-around items-end py-2'}>
            <li className="text-3xl font-bold">{`${price} zł`}</li>
            <li className="text-xl text-our-grey">Jakub</li>
          </ul>

        </div>
      </div>
    </div>
  )
}
