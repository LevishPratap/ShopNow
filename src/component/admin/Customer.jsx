import Layout from "./Layout";
import { useState } from "react";

const Customer = () => {
  const [customers, setcustomers] = useState([
    {
     
      username: "Levish Rajput",
      email: 'levirajput@gmail.com',
      mobilenumber: '9129710524',
      
      date: '16-12-2024'
    },
    {
     
        username: "Levish Rajput",
        email: 'levirajput@gmail.com',
        mobilenumber: '9129710524',
        
        date: '16-12-2024'
      },
      {
     
        username: "Levish Rajput",
        email: 'levirajput@gmail.com',
        mobilenumber: '9129710524',
        
        date: '16-12-2024'
      },
      {
     
        username: "Levish Rajput",
        email: 'levirajput@gmail.com',
        mobilenumber: '9129710524',
        
        date: '16-12-2024'
      },
      {
     
        username: "Levish Rajput",
        email: 'levirajput@gmail.com',
        mobilenumber: '9129710524',
        
        date: '16-12-2024'
      },
      {
     
        username: "Levish Rajput",
        email: 'levirajput@gmail.com',
        mobilenumber: '9129710524',
        
        date: '16-12-2024'
      },
      {
     
        username: "Levish Rajput",
        email: 'levirajput@gmail.com',
        mobilenumber: '9129710524',
        
        date: '16-12-2024'
      },
      {
     
        username: "Levish Rajput",
        email: 'levirajput@gmail.com',
        mobilenumber: '9129710524',
        
        date: '16-12-2024'
      },
      {
     
        username: "Levish Rajput",
        email: 'levirajput@gmail.com',
        mobilenumber: '9129710524',
        
        date: '16-12-2024'
      },
      {
     
        username: "Levish Rajput",
        email: 'levirajput@gmail.com',
        mobilenumber: '9129710524',
        
        date: '16-12-2024'
      },


    ]);

  return (
    <Layout>
      <div className="w-full overflow-hidden z-[-40]">
        <h1 className="text-3xl font-semibold text-center pb-4">Customer</h1>
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="bg-red-400 text-left ">
            
              <th className="text-xl py-2 px-8">Username</th>
              <th className="text-xl py-2">Email</th>
              <th className="text-xl py-2 capitalize">Mobile Number</th>
        
              <th className="text-xl py-2 capitalize">Date</th>
              
            </tr>
          </thead>
          <tbody>
            {customers.map((item, index) => (
              <tr key={index} 
                style={{
                    background:(index+1)%2===0? 'yellow':'white' 
                }}
                 className="text-left ">
               
                <td className=" px-4 gap-2 flex items-center">
                    <div>
                        <img src="/images/avt.avif" alt="profile_pic" className="h-10 w-8 rounded-full"/>
                    </div>
                    <div className="p-0 m-0">
                        <h1 className="text-lg font-semibold">{item.username}</h1>
                        <h1 className="text-gray-400">{item.date}</h1>
                    </div>

                </td>
                <td className=" py-2">{item.email}</td>
                <td className=" py-2">{item.mobilenumber}</td>
                

                <td className=" py-2">{item.date}</td>
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Customer;
