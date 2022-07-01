import React from 'react'
import {Route, Routes} from 'react-router-dom'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Cart from '../pages/Cart'
import Contact from '../pages/Contact'
import DetailProduct from '../pages/DetailProduct'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Shop from '../pages/Shop'
const MyRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/proDetail' element={<DetailProduct/>}></Route>
          <Route path='/*' element={<NotFound/>}></Route>
          
        </Routes>
        
    </div>
  )
}

export default MyRoutes