import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
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
  const [product, setProduct] = useState(null);

  // useEffect(() => {
  //     const { sliders } = fetch(`${API_URL}/product/getSlider`)  
  //       .then((res) => res.json())
  //       .then((json) => setProduct(json));
  //       console.log(sliders)
  //   },[]);


  return (
    <div className="slider-range">
      <ScrollToTop smooth top="20" color="black" />
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{
           delay: 2000,
           disableOnInteraction: false,
           pauseOnMouseEnter:true,
           waitForTransition:true
          }}
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
    </div>
  );
};

export default SliderBig;
