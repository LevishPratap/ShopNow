import Layout from "./Layout";
import { useState } from "react";

const Order = () => {
  const [orders, setOrders] = useState([
    {
      id: '#124526237',
      username: "Levish Rajput",
      email: 'levirajput@gmail.com',
      mobilenumber: '9129710524',
      product: 'Watch',
      price: '50000',
      date: '16-12-2024'
    },

    {
        id: '#124526237',
        username: "Levish Rajput",
        email: 'levirajput@gmail.com',
        mobilenumber: '9129710524',
        product: 'Watch ',
        price: '50000',
        date: '16-12-2024'
      },
      {
        id: '#124526237',
        username: "Levish Rajput",
        email: 'levirajput@gmail.com',
        mobilenumber: '9129710524',
        product: 'Watch ',
        price: '50000',
        date: '16-12-2024'
      },
      {
        id: '#124526237',
        username: "Levish Rajput",
        email: 'levirajput@gmail.com',
        mobilenumber: '9129710524',
        product: 'Watch',
        price: '50000',
        date: '16-12-2024'
      },
      {
        id: '#124526237',
        username: "Levish Rajput",
        email: 'levirajput@gmail.com',
        mobilenumber: '9129710524',
        product: 'Watch ',
        price: '50000',
        date: '16-12-2024'
      },
  ]);

  return (
    <Layout>
      <div className="w-full">
        <h1 className="text-3xl font-semibold text-center pb-4">Orders</h1>
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="bg-red-400">
              <th className="text-xl py-2">Id</th>
              <th className="text-xl py-2">Username</th>
              <th className="text-xl py-2">Email</th>
              <th className="text-xl py-2 capitalize">Mobile Number</th>
              <th className="text-xl py-2">Product</th>
              <th className="text-xl py-2 capitalize">Date</th>
              <th className="text-xl py-2 capitalize">Price</th>
              <th className="text-xl py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item, index) => (
              <tr key={index} 
                style={{
                    background:(index+1)%2===0? 'yellow':'white' 
                }}
                 className="text-center ">
                <td className=" py-2">{item.id}</td>
                <td className=" py-2">{item.username}</td>
                <td className=" py-2">{item.email}</td>
                <td className=" py-2">{item.mobilenumber}</td>
                <td className="py-2 overflow-x-auto whitespace-nowrap">{item.product}</td>

                <td className=" py-2">{item.date}</td>
                <td className=" py-2">{item.price}</td>
                <td className=" py-2">
                  <select className="border border-gray-300 p-2">
                    <option value="pending">Pending</option>
                    <option value="success">Success</option>
                    <option value="returned">Returned</option>
                    <option value="dispatched">Dispatched</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Order;
