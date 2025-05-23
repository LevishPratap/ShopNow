import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import { Routes , Route } from 'react-router-dom'

import Customer from './component/admin/Customer'
import NotFound from './component/NotFound';
import Product from './component/admin/Product';
import Dashboard from './component/admin/Dashboard'
import Order from './component/admin/Order';
import Setting from './component/admin/Setting';
import Payment from './component/admin/Payment'
import Home from './component/Home';
import Products from './component/Products';
import Category from './component/Category';
import SignUp from './component/SignUp';
import Login from './component/Login';
import ContactUs from './component/ContactUs';
import Preguard from './component/Guard/Preguard';
import Cart from './component/Cart';
import Profile from './component/Profile';
function App() {
  return (
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/category' element={<Category/>}/>
       <Route element={<Preguard/>}>
         <Route path='/signup' element={<Login/>}/>
         <Route path='/login' element={<SignUp/>}/>
       </Route>
      <Route path='/cart' element={<Cart/>}/> 
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>

       <Route path='/admin' >
         <Route path='product' element={<Product/>}/>
         <Route path='order' element={<Order/>} />
         <Route path='dashboard' element={<Dashboard/>}/>
         <Route path='customer' element={<Customer/>}/>
         <Route path='payment' element={<Payment/>}/>
         <Route path='payment' element={<Payment/>}/>
         <Route path='setting' element={<Setting/>}/>
       </Route>

       <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}
export default  App;