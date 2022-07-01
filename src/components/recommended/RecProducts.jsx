import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './recommend.scss'
import SingleProducts from '../best-seller-single/SingleProducts';
import recImage from "../../images/1-303x196_t.jpg";

const RecProducts = () => {
  return (
    <div className="background-components">
    <div className="col-lg-12">
      <div className="container-mini">
          <div className="page-title">
          <h1>Recommended Products</h1>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
        >
          <SwiperSlide>
            <SingleProducts data={recImage}/>
          </SwiperSlide>
          <SwiperSlide>
          <SingleProducts  data={recImage}/>

          </SwiperSlide>
          <SwiperSlide>
          <SingleProducts data={recImage}/>

          </SwiperSlide>
          <SwiperSlide>
          <SingleProducts data={recImage}/>

          </SwiperSlide>
          <SwiperSlide>
          <SingleProducts data={recImage}/>

          </SwiperSlide>
          <SwiperSlide>
          <SingleProducts data={recImage}/>

          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
  )
}

export default RecProducts