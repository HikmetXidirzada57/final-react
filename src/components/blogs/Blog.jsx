import React from 'react'
import { SwiperSlide,Swiper } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import './blog.scss'
import Singleblog from '../single-blog/Singleblog';
const Blog = () => {
  return (
    <div className='background-components'>
        <div className="container-mini">
        <div className="page-title">
            <h1>From The Blog</h1>
          </div>
          <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={2}
              // navigation
          >
            <SwiperSlide>
              <Singleblog/>
            </SwiperSlide>
            <SwiperSlide>
              <Singleblog/>
            </SwiperSlide>
            <SwiperSlide>
              <Singleblog/>
            </SwiperSlide>
            <SwiperSlide>
              <Singleblog/>
            </SwiperSlide>
          </Swiper>
        </div>
    </div>
  )
}

export default Blog