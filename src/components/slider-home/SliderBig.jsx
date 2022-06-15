import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import imgBanner from "../../images/main-banner-2.jpg";
import imgBannaer2 from '../../images/Offer-banner.0.jpg'
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import Reveal from 'react-reveal/Reveal';
import Pulse from 'react-reveal/Pulse';

import "./slider.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Flip } from "react-reveal";

const SliderBig = () => {
  return (
    <div className="slider-range">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          //   pagination={{ clickable: true }}
        >
        
          <SwiperSlide>
            <div className="col-md-12 col-sm-12">
            <Pulse>
              <img className="img-fluid" src={imgBanner} alt="bannerImg" />
             </Pulse>
             
              <div className="text-left">
                <Roll>
                  <p>Summer Sale!</p>
                </Roll>
                <Fade left>
                  <h2>Beatiful Ceramic, Kitchenware</h2>
                </Fade>
                <Fade left>
                  <h6>Understand Introduction To Ceramic Materials</h6>
                </Fade>
                <LightSpeed left>
                  <button>Shop Now</button>
                </LightSpeed>
               
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="col-md-12 col-sm-12">
            <Slide left>
              <img className="img-fluid" src={imgBannaer2} alt="bannerImg" />
             </Slide>
             
              <div className="text-left">
                <Roll>
                  <p>Summer Sale!</p>
                </Roll>
                <Fade left>
                  <h2>Thumbler Ceramic & Cups</h2>
                </Fade>
                <Fade left>
                  <h6>Understand Introduction To Ceramic Materials</h6>
                </Fade>
                <LightSpeed left>
                  <button>Shop Now</button>
                </LightSpeed>
               
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderBig;
