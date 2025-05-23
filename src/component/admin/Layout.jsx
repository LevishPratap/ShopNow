import { Link ,useLocation} from "react-router-dom"
import { useState } from "react"
const Layout=({children})=>{
    const location=useLocation()
    console.log(location.pathname)
    const[size,setsize]=useState('250px')
    const [openProfile,setOpenProfile]=useState(false)
    function sidebar(){
        if (size==='250px'){
            setsize(0)
        }
        else{
            setsize('250px')
        }
    }
    const sidebarnav=[
         {
            link:'/admin/dashboard',
            classname:'pr-2 ri-dashboard-line',
            text:'Dashboard'
         },
         {
            link:'/admin/customer',
            classname:'pr-2 ri-user-3-line',
            text:'Customer'
         },
        {
            link:'/admin/order',
            classname:'ri-shape-fill pr-2',
            text:'Order'
        },
        {
            link:'/admin/product',
            classname:'ri-product-hunt-fill pr-2',
            text:'Product'
        },
        {
            link:'/admin/payment',
            classname:'pr-2 ri-currency-line',
            text:'Payment'
        },
    
        {
            link:'/admin/setting',
            classname:'pr-2 ri-tools-fill',
            text:'Setting'
        },
        {
            link:'/admin/logout',
            classname:'pr-2 ri-logout-box-fill'
            ,text:'Logout'
        }
    ]
    return(
        <>
            <aside 
               className=" fixed h-full bg-blue-400 flex flex-col gap-2 overflow-hidden"
               style={{
                transition:'.3s',
                width:size,
               
               }}
             >
                {
                    sidebarnav.map((item,index)=>(
                        <Link to={item.link} key={index} 
                            style={{ background:(location.pathname==item.link)? 'yellow':'transparent',color:'black'}}
                            className="text-left pl-4 text-xl text-white w-full bg-[#F87171] py-3 rounded hover:bg-yellow-300" >
                            <i className={item.classname}></i>
                            {item.text}
                        </Link>
                    ))
                }
            </aside>

            <section 
             className="h-full  "
             style={{
                marginLeft:size,
                transition:'0.3s',
             }}
             > 
                
                <nav className="w-full h-20 bg-stone-500 flex items-center px-4 justify-between shadow-lg sticky top-0 right-0">
                    <div className="flex items-center gap-4">
                       <button onClick={sidebar}>
                          <i className="ri-side-bar-fill text-4xl"></i>
                       </button>
                       <span className="text-2xl font-bold">Shop</span>
                    </div>
                    <div>
                        <button onClick={()=>setOpenProfile(!openProfile)} >
                           <img src="/images/avt.avif" className="h-16 rounded-full  "/>
                           {
                            openProfile &&
                             
                             <div className="absolute h-40 min-w-32 bg-yellow-500 top-20 right-4 rounded flex flex-col px-2 gap-2 py-4">
                                 <label className="text-xl font-semibold ">Er. Levish Rajput</label>
                                 <span>levishrajput83680@gmail.com </span>
                                 <div className="border-2"> </div>

                                  <button className="flex gap-2 justify-center hover:bg-red-400 hover:rounded-lg">
                                    <i className="ri-logout-circle-fill text-4xl"></i>
                                    <span className="text-2xl">Logout</span>
                                  </button>
                            </div>
                           }
                        </button>
                    </div>
                </nav>  

                <div className="p-4">
                    {children}
                </div>
                
            </section>
            
        </>
    )
}
export default Layout;