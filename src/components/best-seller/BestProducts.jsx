import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SingleProducts from "../best-seller-single/SingleProducts";
import './besetsel.scss'
import singleImage from "../../images/2-1-256x360.jpg";
const BestProducts = () => {
  return (
    <div className="background-components">
      <div className="col-lg-12">
        <div className="container-mini">
            <div className="page-title">
            <h1>Bestseller Products</h1>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={5}
            navigation
            // breakpoints={{
            //   // when window width is >= 640px
            //   640: {
            //     width: 640,
            //     slidesPerView: 1,
            //   },
            //   // when window width is >= 768px
            //   768: {
            //     width: 768,
            //     slidesPerView: 2,
            //   },
            //   1024:{
            //     width:1000,
            //     sliderPerview:1
            //   },
         
            // }}
          >
            <SwiperSlide>
             <SingleProducts data={singleImage}/>
            </SwiperSlide>
            <SwiperSlide>
             <SingleProducts data={singleImage}/>
            </SwiperSlide>
            <SwiperSlide>
             <SingleProducts data={singleImage}/>
            </SwiperSlide>
            <SwiperSlide>
             <SingleProducts data={singleImage}/>
            </SwiperSlide>
            <SwiperSlide>
             <SingleProducts data={singleImage}/>
            </SwiperSlide>
            <SwiperSlide>
             <SingleProducts data={singleImage}/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
