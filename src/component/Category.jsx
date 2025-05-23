import React from 'react'
import Layout from './Layout'
import { useState } from 'react'

function Category() {
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
         <p className='p-4 font-bold text-center md:text-3xl'>Tranding Categories!</p>
        <div className='md:w-10/12 py-4 my-8 md:grid md:grid-cols-4 mx-auto gap-12 '>
         
           {
            section.map((item,index)=>(
                <div className='text-center shadow-2xl hover:bg-yellow-700 rounded-xl'>
                    <i className="ri-menu-search-line text-[90px] md:font-bold "></i>
                   <p className='md:text-2xl font-semibold capitalize pb-4'>{item.label}</p>
                </div>
            ))
           }
        </div>
    </Layout>
  )
}

export default Category
