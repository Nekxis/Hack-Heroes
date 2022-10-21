import SectionElement from "./SectionElement/SectionElement";

export default function MainSection({ orders }) {

  
  return (
    <div className={'w-full grid gap-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'}>
      {orders.map((order) => {
        return (
          <SectionElement key={order.id} id={order.id} title={order.title} description={order.description} category={order.category} price={order.price} city={order.city}/>
        )
      })}
    </div>
  )
}


