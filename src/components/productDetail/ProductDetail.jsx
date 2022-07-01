import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./detail.scss";
import bannerImg from "../../images/right-banner.jpg";
import TabMenu from "../tab-menu/TabMenu";
 import sliderImg from '../../images/12.jpg'
 import sliderImg1 from '../../images/19.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import { Navigation, Pagination, Scrollbar, A11y,FreeMode,Thumbs } from 'swiper';
import Zoom from 'react-img-zoom'

import { Navigation, Pagination, Controller,FreeMode, Thumbs, Scrollbar, A11y } from 'swiper';

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Rating } from "@mui/material";
import SingleProducts from "../best-seller-single/SingleProducts";
import ScrollToTop from 'react-scroll-to-top'



const ProductDetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  

  const slides=[];
  for (let i = 0; i <5; i+=1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
      <img
      src={`sliderImg/${i+1}/500/300`}  
      alt=""
      style={{listStyle:"none"}}
      />
    </SwiperSlide>

    )
   
  }

  const thumbs=[];
  for (let i = 0; i <5; i+=1) {
    thumbs.push(
      <SwiperSlide key={`thumb-${i}`} tag="li"
      style={{listStyle:"none"}}
      >
        <img src={`sliderImg/${i}/163/100`} 
        alt="" />
      </SwiperSlide>
    )

  }
  return (
    <div id="mainDetail" className="background-components">
      <ScrollToTop smooth top="20" color="black" />
      
      <div className="container-tema">
        <div className="page-breadcumps">
          <div className="page-inner">
            <div className="wo-breadcump">
              <nav className="breadcumps">
                <span>
                  <Link to="/">Home</Link>
                </span>
                >>
                <span>
                  <Link to="#">Product name</Link>
                </span>
                >>
                <span>
                  <Link to="#">Product category</Link>
                </span>
                >>
                <span>
                  <Link to="#">Product description</Link>
                </span>
              </nav>
            </div>
          </div>
        </div>
        <div className="product-area">
          <div className="row justify-content-between">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        slidesPerView={1}
      >
        {slides}
        <SwiperSlide>
          <img src={sliderImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImg} />
        </SwiperSlide>
  
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {thumbs}
        <SwiperSlide>
          <img src={sliderImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImg}/>
        </SwiperSlide>
      </Swiper>
 
            {/* <div className="col-lg-4">
              <div className="img-slider">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  spaceBetween={10}
                  navigation={true}
                  // thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  <SwiperSlide>
                    <Zoom
                    zoomScale={3}
                    width={500}
                    height={500}
                    img ="data:image/jpeg;base64,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"
                    transitionTime={0.5}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="img-fluid"  src={sliderImg1} alt=""/>
                  </SwiperSlide>
             
                </Swiper>
                <Swiper
                  // onSwiper={setThumbsSwiper}
                  spaceBetween={20}
                  slidesPerView={4}
                  navigation={true}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img className="img-fluid" src={sliderImg} alt="" />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img className="img-fluid" src={sliderImg1} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="img-fluid" src={sliderImg1} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="img-fluid" src={sliderImg1} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div> */}
            <div className="col-lg-5">
              <div className="product-summary">
                <h1 style={{ color: "black" }} className="product-name">
                  Coffee Cup Cum
                </h1>
                <div className="product-rating">
                  <Rating
                    name="size-small"
                    defaultValue={4}
                    size="small"
                    className="rating"
                  />
                </div>
                <div className="product-meta">
                  <span className="sku">
                    SKU:
                    <span className="fonts">WDt70Y</span>
                  </span>
                  <span className="category">
                    Categories:
                    <Link className="fonts" to="#">
                      Coppa
                    </Link>
                  </span>
                  <span className="tagged-as">
                    Tags:
                    <Link className="fonts" to="#">
                      {" "}
                      Summer,
                    </Link>
                    <Link className="fonts" to="#">
                      {" "}
                      Winter
                    </Link>
                  </span>
                </div>
                <div className="price">
                  <del className="price-pr">$100.00</del>
                  <span className="discount p-0">$50.00</span>
                </div>
                <div className="wo-product-details">
                  <p className="desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Magni rerum ea consequatur adipisci doloribus eligendi quo a
                    consectetur ducimus distinctio!
                  </p>
                </div>
                <p className="inStock">100 - In-stock</p>
                <form className="d-flex flex-wrao" action="">
                  <div className="quantity">
                    <input className="minus" type="button" value="-" />
                    <input className="qty" type="number" value={1} />
                    <input className="plus" type="button" value="+" />
                  </div>
                  <button className="btn btn-dark">ADD TO CART</button>
                </form>
              </div>
              <div className="fishing-up mt-5">
                <TabMenu label1={"Fishing"} label2={"Delivery"} label3={"Today's Deal"} />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="banner-image">
                <img className="img-fluid" src={bannerImg} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mt-5">
          <TabMenu label1={"Description"} label2={"Additional information"} label3={"Reviews"} />

          <div className="related-products mt-5">
            
              <div className="page-title">
                <h1>Related products</h1>
              </div>
              <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={5}
            navigation
          >
            <SwiperSlide>
             <SingleProducts data={sliderImg}/>
            </SwiperSlide>
            <SwiperSlide>
             <SingleProducts data={sliderImg}/>
            </SwiperSlide>
            <SwiperSlide>
             <SingleProducts data={sliderImg}/>
            </SwiperSlide>
            <SwiperSlide>
             <SingleProducts data={sliderImg}/>
            </SwiperSlide>
            <SwiperSlide>
             <SingleProducts data={sliderImg}/>
            </SwiperSlide>
            <SwiperSlide>
             <SingleProducts data={sliderImg}/>
            </SwiperSlide>
          </Swiper>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
