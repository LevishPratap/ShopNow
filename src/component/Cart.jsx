import React from 'react'
import Layout from './Layout'
function Cart() {
    const cartItem=[
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
            link:'/images/a.jpeg',
            text:"Men's Fashion Store",
            discount:15,
            price:1500
        },
        {
            link:'/images/a.jpeg',
            text:"Men's Fashion Store",
            discount:15,
            price:1500
        },
        
    ]
  return (
     <Layout>
         <div className='w-10/12 bg-rose-50 flex flex-col mx-auto gap-3 pb-4'>
            <h1 >
                <center className=' text-3xl font-bold text-center bg-red-100 py-3 '>Your Selected Item's </center>
            </h1>

            {
                cartItem.map((item,index)=>(
                    <div key={index} className='w-ful flex gap-4 mx-4 border shadow-lg  '>
                        <img 
                           src={item.link} alt="" 
                           className='h-48 shadow '
                        />
                        <div className='flex flex-col gap-2'>
                            <p className='text-2xl font-semibold mt-4'>{item.text}</p>
                            <p className='flex gap-3'>
                                <span className='w-xl font-bold '>
                                     ₹{item.price-(item.discount*item.price)/100}
                                </span>
                                <span className='w-lg font-lg '>
                                    Price:
                                    <del>₹{item.price}</del>
                                </span>
                                <span className='w-lg font-semibold '>
                                    Off:{item.discount}%
                                </span>
                            </p>
                            <button className='w-fit px-4 py-2 rounded text-lg font-bold bg-red-500 hover:bg-red-800'>
                                <i className="mr-1 ri-delete-bin-6-line"></i>
                                Remove
                            </button>
                        </div>
                        
                    </div>
                ))        
            }
                    <div 
                        className='shadow-lg  mx-4 flex gap-3 justify-center items-center py-4'>
                            <span className='text-2xl font-bold '>
                                Total:
                            </span>
                            <span className='text-2xl font-bold '>
                              ₹23000 
                            </span>
                            <button className='w-fit text-lg bg-red-500 hover:bg-red-800 px-4 py-2 font-semibold rounded'>
                                Buy Now!
                            </button>
                    </div>                
         </div>
     </Layout>
  )
}

export default Cart
