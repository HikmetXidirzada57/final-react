import React from 'react'
import { SwiperSlide ,Swiper} from 'swiper/react'
import SingleOuter from '../single-outer/SingleOuter'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import './outer.scss'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Outer = () => {
  return (
    <div className='outer-brand'>
      <div className="background-components">
      <div className="container-mini">
            <Swiper 
                modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                spaceBetween={50}
                slidesPerView={5}
                navigation
                loop
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false
              }}
                breakpoints={{
                  375:{
                   slidesPerView:1
                  },
      
                    576: {
                      // width: 576,
                      slidesPerView: 2,
                    },
                    768: {
                      // width: 768,
                      slidesPerView: 5,
                    },
                    
                  }}
            >
                <SwiperSlide>
                  <SingleOuter/>
                </SwiperSlide>
                <SwiperSlide>
                  <SingleOuter/>
                </SwiperSlide>
                <SwiperSlide>
                  <SingleOuter/>
                </SwiperSlide>
                <SwiperSlide>
                  <SingleOuter/>
                </SwiperSlide>
                <SwiperSlide>
                  <SingleOuter/>
                </SwiperSlide>
                <SwiperSlide>
                  <SingleOuter/>
                </SwiperSlide>
                <SwiperSlide>
                  <SingleOuter/>
                </SwiperSlide>
            </Swiper>
        </div>
      </div>
  
    </div>
  )
}

export default Outer