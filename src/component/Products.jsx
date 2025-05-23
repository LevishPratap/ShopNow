import React from 'react'
import { useState } from 'react'
import Layout from './Layout'
function Products() {

    const [productsitem,setProductsitem]=useState([
        {
            link:'/images/a.jpeg',
            text:"Men's Fashion Store",
            discount:15,
            price:1500
        },
        {
            link:'/images/b.jpeg',
            text:"Women's Fashion Store",
            discount:35,
            price:2500
        },
        {
            link:'/images/c.jpeg',
            text:"Child Fashion Store",
            discount:25,
            price:1800
        },
        {
            link:'/images/d.jpeg',
            text:"Men's Fashion Store",
            discount:5,
            price:1500
        },
        {
            link:'/images/e.jpeg',
            text:"Men's Fashion Store",
            discount:45,
            price:5500
        },
        {
            link:'/images/f.jpeg',
            text:"Men's Fashion Store",
            discount:75,
            price:15000
        },
        {
            link:'/images/g.jpeg',
            text:"Men's Fashion Store",
            discount:8,
            price:1200
        },
        {
            link:'/images/h.jpeg',
            text:"Men's Fashion Store",
            discount:16,
            price:1600
        },
        {
            link:'/images/i.jpeg',
            text:"Men's Fashion Store",
            discount:5,
            price:1500
        },
        {
            link:'/images/j.jpeg',
            text:" Fashion Store",
            discount:15,
            price:500
        },
        {
            link:'/images/k.jpeg',
            text:"Men's Fashion Store",
            discount:15,
            price:1500
        }
    ])
  return (
   
    <Layout>
             {/* div for products items in product section   */}

        <div className='w-10/12 min-h-96 bg-red-100 mx-auto mb-4 grid md:grid-cols-3 gap-6 pt-4'>
             
             {
                 productsitem.map((item,index)=>(
                   <div key={index} className='p-2 mx-auto border-2 boredr-red-300'>
                       <img src={item.link} alt="" className='md:object-cover h-80 md:max-w-72 shadow-lg' />
                       <div className='p-2 w-full'>
                         <div className='font-bold text-lg text-center bg-500 w-full'>{item.text}</div>
                         <p className='space-x-4 ml-4'>
                             <span className='font-semibold '>
                               ₹{item.price-(item.price*item.discount)/100}
                             </span>
                             <del>
                                ₹{item.price}
                             </del>
                             <span className='font-medium'>
                                Off:{item.discount}%
                             </span>
                         </p>
                       </div>

                       <div className='flex flex-col gap-2'>
                         <button type='button'  
                          className='w-full bg-red-400 border text-2xl md:fond-bold py-2 rounded hover:bg-yellow-700'>
                             Buy Now!
                         </button>
                           
                          <button type='button' 
                            className='w-full bg-red-400 border text-2xl fond-bold py-2 rounded hover:bg-yellow-700'>
                              <i className="ri-shopping-cart-2-line md:font-bold"></i> 
                             Add to Cart
                          </button>
                       </div>
                   </div>
                 ))
             }
          
      </div>
    </Layout>
    
  )
}

export default Products
