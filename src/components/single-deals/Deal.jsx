import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../Redux/Actions/CartActions";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Deal = ({ data }) => {
  const [value, setValue] = React.useState(2);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((ct) => ct.cart);
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownSate = new Date("September 30, 2022 00:00:00").getTime();
    console.log(countDownSate);
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownSate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (100 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  const handleToCart = (id) => {
    const findItem =
      cartItems.length > 0 ? cartItems.find((ct) => ct.id === id) : null;
    const quantity = findItem ? findItem.quantity + 1 : 1;
    dispatch(AddToCart(id, quantity));
  };

  <Rating
    name="simple-controlled"
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
  />;
  return (
    <div className="deal-item">
      {data && (
        <div className="d-flex flex-wrap">
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
                <img className="img-fluid" src={data.photoUrl} alt="" />
              </SwiperSlide>
            </Swiper>
            <span className="on-sale sm d-none">Sale</span>
          </div>
          <div className="product-detail">
            <Link to={`product/${data.id}`}>{data.name}</Link>
            <div className="rating">
              <Rating name="read-only" value={value} readOnly />
            </div>

            <div className="wo-price">
              <span className="new-price">${data.dicount}</span>
              <span className="old-price">
                <del>${data.price}</del>
              </span>
            </div>
            <div className="description">
              <p>{data.description}</p>
            </div>
            <div className="count-down">
              <span className="down">
                <span className="numeric">{days}</span>
                <p>days</p>
              </span>
              <span className="down">
                <span className="numeric">{hours}</span>
                <p>hours</p>
              </span>
              <span className="down">
                <span className="numeric">{minutes}</span>
                <p>minutes</p>
              </span>
              <span className="down">
                <span className="numeric">{seconds} </span>
                <p>seconds</p>
              </span>
            </div>
            <div className="block-hover">
              <div
                className="shopping-cart"
                onClick={() => handleToCart(data.id)}
              >
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
      )}
    </div>
    // </div>
  );
};

export default Deal;
