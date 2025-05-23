import React from 'react'
import Layout from './Layout'
import { useState } from 'react'
function Product() {
  
  
  const items=[
       {path:'/images/a.jpeg',
        price:1200,
        discount:12
       },
       {path:'/images/b.jpeg',
        price:1200,
        discount:12
       },
       {path:'/images/c.jpeg',
        price:1200,
        discount:12
       },
       {path:'/images/d.jpeg',
        price:1200,
        discount:12
       },
       {path:'/images/e.jpeg',
        price:1200,
        discount:12
       },

       {path:'/images/f.jpeg',
        price:1200,
        discount:12
       },
       {path:'/images/g.jpeg',
        price:1200,
        discount:12
       },
       {path:'/images/h.jpeg',
        price:1200, 
        discount:12
       },
      
   

        
  ]
 
  return (
    
    <Layout>
        <h1 className='text-3xl font-semibold text-center pb-4 py-4'>Products</h1>
        <div className='p-4  w-full grid grid-cols-3 gap-6 border  '>
           {
            items.map((item,index)=>(
              <div className='shadow-lg border  py-4' key={index}>
                <div className=' flex flex-col gap-1'>
                  <img src={item.path} alt="" className='object-cover h-80'/>
                  <center><strong>Men;s shirt</strong></center>
                  <p className='grid grid-cols-3 gap-1 text-lg'>
                      <del className='text-[16px] flex justify-center items-center'>Original:₹{item.price}</del>
                    <span>{item.discount}%Off</span>
                    <span className='font-semibold text-left'>Price:₹{(item.price-(item.price*item.discount/100)).toLocaleString()}</span>
                  </p>

                </div>
              </div>
            ))
           }
        </div>
    </Layout>
    
  )
}

export default Product
