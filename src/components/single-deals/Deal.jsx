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
import Rating from "@mui/material/Rating";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CompareIcon from "@mui/icons-material/Compare";

const Deal = () => {

  const [value, setValue] = React.useState(2);

  <Rating
    name="simple-controlled"
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
  />;
  return (
    <div className="deal-item">
      <div className="d-flex flex-wrap">
   
        <div className="feature-image">
          <Swiper
            // effect={"cube"}
            // grabCursor={true}
            // cubeEffect={{
            //   shadow: true,
            //   slideShadows: true,
            //   shadowOffset: 20,
            //   shadowScale: 0.94,
            // }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="img-fluid" src={deal1} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="img-fluid" src={deal2} alt=""/>
            </SwiperSlide>
          </Swiper>
          <span className="on-sale">Sale</span>
        </div>

        <div className="product-detail">
          <Link to="#">Title of the product</Link>
          <div className="rating">
            <Rating name="read-only" value={value} readOnly />
          </div>

          <div className="wo-product-rating"></div>
          <div className="wo-price">
            <span className="new-price">$50.00</span>
            <span className="old-price">
              <del>$90.00</del>
            </span>
          </div>
          <div className="description">
            <p>
              Paragraph text Nam tristique porta ligula, vel viverra sem
              eleifend nec. Nulla sed.
            </p>
          </div>
          <div className="count-down">
            <span className="down">
              <span className="numeric">200</span>
              <p>days</p>
            </span>
            <span className="down">
              <span className="numeric">15</span>
              <p>hours</p>
            </span>
            <span className="down">
              <span className="numeric">60</span>
              <p>mins</p>
            </span>
            <span className="down">
              <span className="numeric">120 </span>
              <p>secs</p>
            </span>
          </div>
          <div className="block-hover">
            <div className="shopping-cart">
              <ShoppingCartIcon className="cart" />
            </div>
            <div className="like">
              <FavoriteIcon className="favorite" />
            </div>
            <div className="compare">
              <CompareIcon className="compar" />
            </div>
            <div className="review">
              <Link to="">
                <VisibilityIcon className="visibility" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    // </div>
  );
};

export default Deal;
