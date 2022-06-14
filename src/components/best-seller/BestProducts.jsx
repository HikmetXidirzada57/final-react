import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SingleProducts from "../best-seller-single/SingleProducts";
import './besetsel.scss'
const BestProducts = () => {
  return (
    <div className="all">
      <div className="col-lg-12">
        <div className="containe">
            <div className="shortcode-title">
            <h1>Bestseller Products</h1>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={5}
            navigation
          >
            <SwiperSlide>
             <SingleProducts/>
            </SwiperSlide>
            <SwiperSlide>
             <SingleProducts/>
            </SwiperSlide>
            <SwiperSlide>
             <SingleProducts/>
            </SwiperSlide>
            <SwiperSlide>
             <SingleProducts/>
            </SwiperSlide>
            <SwiperSlide>
             <SingleProducts/>
            </SwiperSlide>
            <SwiperSlide>
             <SingleProducts/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
