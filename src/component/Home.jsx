import React from 'react'
import { useState } from 'react';
import Layout from './Layout'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

function Home() {
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

     const [section, setSection]=useState([
            {
              label:'Fashion'
            },
            {
                label:'Tranding'
              },
              {
                label:'Global'
              },
              {
                label:'Local'
              },
              {
                label:"Women's"
              },
              {
                label:'Men'
              },
              {
                label:'child'
              },
        ])
  return (
    <Layout>
        <div>
           <header  className=''>
               <Swiper
                    pagination={true}
                   slidesPerView={1}
                   navigation={true} modules={[Navigation,Pagination]} className="mySwiper "
                >
                  <SwiperSlide>
                    <img src="/images/pagnationIMG/p1.jpg" alt="" />
                  </SwiperSlide>
                 
                  <SwiperSlide>
                    <img src="/images/pagnationIMG/p2.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/images/pagnationIMG/p3.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/images/pagnationIMG/p4.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/images/pagnationIMG/p5.jpg" alt="" />
                  </SwiperSlide>
              </Swiper>
           </header>
        </div>

        {/* for the products section */}

       <div>
       <div className='w-10/12 mx-auto text-center pt-6'>
            <div className='w-9/12 mx-auto'>
                <h1 className='md:text-3xl font-semibold pb-4'>Latest Products</h1>
                  <p className='md:text-lg  md:font-semibold md:text-gay-900 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque     consequuntur eos sed non tempora, nihil illum nisi error quo velit, illo       perspiciatis. Eius, reiciendis!
                  </p>
            </div>
        </div>

        {/* div for products items in product section   */}

        <div className='w-10/12 min-h-96 bg-red-100 mx-auto mb-4 grid grid-cols-3 gap-6 pt-4'>
             
                {
                    productsitem.map((item,index)=>(
                      <div key={index} className='p-2 mx-auto border-2 boredr-red-300 '>
                          <img src={item.link} alt="" className='object-cover h-80 max-w-72 shadow-lg' />
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

                          <div>
                            <button type='button' 
                             className='w-full bg-red-400 border text-2xl fond-semibold py-2 rounded hover:bg-yellow-700'>
                                Buy Now!
                            </button>
                          </div>
                      </div>
                    ))
                }
             
         </div>

       </div>

       {/* this is for the category section */}
       <div>
       <p className='p-4 font-bold text-center text-3xl'>Tranding Categories!</p>
        <div className='w-10/12 py-4  grid grid-cols-4 mx-auto gap-12'>
         
           {
            section.map((item,index)=>(
                <div className='text-center shadow-2xl hover:bg-yellow-700 rounded-xl' key={index}>
                    <i className="ri-menu-search-line text-[90px] font-bold "></i>
                   <p className='text-2xl font-semibold capitalize pb-4'>{item.label}</p>
                </div>
            ))
           }
        </div>
       </div>
    </Layout>
  )
}

export default Home

