export default function SectionElement () {
  return(
    <div className="bg-white">
      <div className="mx-auto border-solid border-4 border-zinc-600 rounded-md grid max-w-2xl grid-cols-1 justify-end items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-10 sm:my-20 sm:mx-16 lg:max-w-7xl lg:grid-cols-4 lg:my-20 lg:mx-16 lg:px-8">
          <div className={'flex justify-end w-full mr-4'}>
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg bg-gray-100"
              />
        </div>
        <div className={'col-span-3 pl-20'}>
          <h2 className="text-3xl font-bold text-end tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
          <p className="mt-4 text-end text-gray-500">
            The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
            steel divider separates active cards from new ones, or can be used to archive important task lists.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">

          </dl>
        </div>
      </div>
    </div>
  )
}
