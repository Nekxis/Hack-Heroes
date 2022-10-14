import SectionElement from "./SectionElement/SectionElement";


export default function MainSection({ orders }) {


  

  return (
    <div className={'w-full justify-around grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'}>
      {orders.map((order) => {
        return (
          <SectionElement key={order.id} id={order.id} title={order.title} description={order.description}  price={order.price}/>
        )
      })}
    </div>
  )
}


