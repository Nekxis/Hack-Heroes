import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function SearchByText({ data }) {

    return <div>
        <h1>Hello world</h1>
        {JSON.stringify(data)}
    </div>
};

export async function getServerSideProps(context) {
    const query = context.params.text;

    const ordersRef = collection(db, 'Orders');
    const data = await getDocs(ordersRef);
    const orders = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    const lowerCaseStrings = orders.map((order) => {
        return {...order, title: order.title.toLowerCase(), city: order.city.toLowerCase(), description: order.description.toLowerCase()};
    });
    const filteredOrdersWithTitle = lowerCaseStrings.filter((order) => {
        return order.title.includes(query)
    });
    const filteredOrdersWithCity = lowerCaseStrings.filter((order) => {
        return order.city.includes(query)
    });
    const filteredOrdersWithDescription = lowerCaseStrings.filter((order) => {
        return order.description.includes(query)
    });
    
    const filteredOrders = [...filteredOrdersWithTitle, ...filteredOrdersWithCity, ...filteredOrdersWithDescription]

    return {
        props: {
            data: filteredOrders,
        }
    }
}