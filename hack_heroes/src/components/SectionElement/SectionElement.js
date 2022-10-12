export default function SectionElement () {
  return(
    <div className="flex justify-around bg-white">
      <div className="mx-auto border-solid border-4 border-zinc-600 rounded-md grid max-w-2xl grid-cols-1 justify-end items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-10 sm:my-20 sm:mx-10 lg:max-w-7xl lg:grid-cols-3 lg:my-6 lg:mx-6 lg:px-8">
          <div className={'flex lg:justify-end w-full sm:justify-around'}>
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                alt="Walnut card tray with white powder coated steel divider and 3 punch out holes."
                className="flex rounded-lg bg-gray-100  lg:w-full sm:w-1/2 "
              />
        </div>
        <div className={'lg:col-span-2 pl-1/12'}>
          <h2 className="text-3xl font-bold text-end tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
          <p className="mt-4 text-end text-lg text-gray-500">
            The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards.
          </p>
          <ul className={'flex flex-col items-end py-2 text-sm'}>
            <li>50zł</li>
            <li>4.3</li>
            <li>Jakub</li>
          </ul>

        </div>
      </div>
    </div>
  )
}
