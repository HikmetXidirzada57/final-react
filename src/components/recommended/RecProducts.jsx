import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SingleRec from '../singleRecommend/SingleRec';
import './recommend.scss'
const RecProducts = () => {
  return (
    <div className="rec">
    <div className="col-lg-12">
      <div className="containe">
          <div className="shortcode-title">
          <h1>Recommended Products</h1>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
        >
          <SwiperSlide>
            <SingleRec/>
          </SwiperSlide>
          <SwiperSlide>
            <SingleRec/>
          </SwiperSlide>
          <SwiperSlide>
            <SingleRec/>
          </SwiperSlide>
          <SwiperSlide>
            <SingleRec/>
          </SwiperSlide>
          <SwiperSlide>
            <SingleRec/>
          </SwiperSlide>
          <SwiperSlide>
            <SingleRec/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
  )
}

export default RecProducts