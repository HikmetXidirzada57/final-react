import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import deal1 from "../../images/11.jpg";
import deal2 from "../../images/12.jpg";
import "./deal.scss";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper";
import { Link } from "react-router-dom";

const Deal = () => {
  return (
    <div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="deal-item">
          <div className="row">
            <div className="col-lg-6">
              <div className="feature-image">
                <Swiper
                  effect={"cube"}
                  grabCursor={true}
                  cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                  }}
                  pagination={true}
                  modules={[EffectCube, Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img className="img-fluid" src={deal1} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="img-fluid" src={deal2} alt="" />
                  </SwiperSlide>
                </Swiper>

                {/* <span>Sale</span> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product-detail">
                <Link to="#">Title</Link>
                <div className="wo-product-rating"></div>
                <div className="wo-price">
                  <span className="new-price">$50</span>
                  <span className="">$90</span>
                </div>
                <div className="description">
                  <p>
                    Paragraph text Nam tristique porta ligula, vel viverra sem
                    eleifend nec. Nulla sed.
                  </p>
                </div>
                <div className="count-down">
                  <span>days</span>
                  <span>hours</span>
                  <span>mins</span>
                  <span>secs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal;
