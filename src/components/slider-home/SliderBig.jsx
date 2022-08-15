import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import imgBanner from "../../images/main-banner-2.jpg";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import Pulse from "react-reveal/Pulse";
import "./slider.scss";
import ScrollToTop from "react-scroll-to-top";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Slide } from "react-reveal";
import { API_URL } from "../../link/URL";

const SliderBig = () => {
  // const [product, setProduct] = useState(null);

  // useEffect(() => {
  //     const { sliders } = fetch(`${API_URL}/product/getAll`)
  //       .then((res) => res.json())
  //       .then((sp) => setProduct(sp));
  //       console.log(sliders)
  //   },[]);


  return (
    // <div className="col-lg-12 col-md-12 col-sm-12">
    <div className="slider-range">
      <ScrollToTop smooth top="20" color="black" />
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
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
        //   2048:{
        //     width:11000,
        //     sliderPerview:1
        //   }
        // }}
      >
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
          <Slide left>
            <img className="img-fluid" src={imgBanner} alt="bannerImg" />
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
        </SwiperSlide>
      </Swiper>
      {/* <div className="top-up">
          <KeyboardArrowUpIcon className="arrow-up"/>
      </div> */}
    </div>
    // </div>
  );
};

export default SliderBig;
