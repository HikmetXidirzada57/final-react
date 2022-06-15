import React from 'react'
import SingleProducts from '../components/best-seller-single/SingleProducts'
import BestProducts from '../components/best-seller/BestProducts'
import Design from '../components/clay-design/Design'
import DaysProducts from '../components/dealOfTheday/DaysProducts'
import Inner from '../components/dinnerware-sets/Inner'
import Wrapper from '../components/entry-content/Wrapper'
import Outer from '../components/owl-outer/Outer'
import RecProducts from '../components/recommended/RecProducts'
import SliderBig from '../components/slider-home/SliderBig'
import Blog from '../components/blogs/Blog'
import './home.scss'

const Home = () => {
  return (
    <div className='main-home'>
      <SliderBig/>
      <Wrapper/>
      <BestProducts/>
      <Design/>
      <DaysProducts/>
      <RecProducts/>
      <Inner/>
      <Outer/>
      <Blog/>
    </div>
  )
}

export default Home