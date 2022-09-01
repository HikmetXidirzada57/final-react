import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./detail.scss";
import bannerImg from "../../images/right-banner.jpg";
import TabMenu from "../tab-menu/TabMenu";
import { Swiper, SwiperSlide } from "swiper/react";

import Zoom from "react-img-zoom";
import {
  Navigation,
  Pagination,
  FreeMode,
  Thumbs,
  Scrollbar,
  A11y,
} from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Rating } from "@mui/material";
import SingleProducts from "../best-seller-single/SingleProducts";
import ScrollToTop from "react-scroll-to-top";
import { API_URL } from "../../link/URL";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart } from "../../Redux/Actions/CartActions";

const ProductDetail = () => {
  const [oneProduct, setoneProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [categoryId, setCategoryId] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const btnDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };
  const btnIcrement = () => {
    if (quantity > 0) {
      setQuantity((prevCount) => prevCount + 1);
    }
  };
  const getProductById = useCallback(async () => {
    const response = await (await fetch(`${API_URL}/product/${id}`)).json();
    setoneProduct(response);
    setCategoryId(response.categoryId);
  }, [id]);
  console.log(oneProduct);
  const getRelated = useCallback(() => {
    if (categoryId !== null) {
      fetch(`${API_URL}/product/getRelated/${id}/${categoryId}`)
        .then((res) => res.json())
        .then((res) => setRelated(res));
    }
  }, [id, categoryId]);

  useEffect(() => {
    getProductById();
    getRelated();
  }, [getProductById, getRelated]);

  const handleAddToCart = (id) => {
    const findItem =
      cartItems.length > 0 ? cartItems.find((ct) => ct.id === id) : null;
    const quantity = findItem ? findItem.quantity + 1 : 1;
    dispatch(AddToCart(id, quantity));
  };
  // console.log(oneProduct.productTags.tags.name);
  return (
    <div id="mainDetail" className="background-components">
      <ScrollToTop smooth top="20" color="black" />
      {oneProduct && (
        <div className="container-tema">
          <div className="page-breadcumps">
            <div className="page-inner">
              <div className="wo-breadcump">
                <nav className="breadcumps">
                  <span>
                    <Link to="/">Home</Link>
                  </span>
                  {">>"}
                  <span>
                    <Link to="#">{oneProduct.name}</Link>
                  </span>
                  {">>"}
                  <span>
                    <Link to="#">{oneProduct.category.name}</Link>
                  </span>
                  {">>"}
                  <span>
                    <Link to="#">Product description</Link>
                  </span>
                </nav>
              </div>
            </div>
          </div>
          <div className="product-area">
            <div className="row justify-content-between">
              <div className="col-lg-4">
                <div className="img-slider">
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                    }}
                    spaceBetween={10}
                    // navigation={true}
                    // thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    <SwiperSlide>
                      <Zoom
                        zoomScale={1.5}
                        width={500}
                        height={500}
                        transitionTime={0.5}
                        img={oneProduct.photoUrl}
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <img
                        className="img-fluid"
                        src={oneProduct.photoUrl}
                        alt=""
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="product-summary">
                  <h1 style={{ color: "black" }} className="product-name">
                    {oneProduct.name}
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
                      <span className="fonts">{oneProduct.sku}</span>
                    </span>
                    <span className="category">
                      Categories:
                      <Link className="fonts" to="#">
                        {oneProduct.category.name}
                      </Link>
                    </span>
                    <span className="tagged-as">
                      Tags:
                        <>
                          {oneProduct.productTags?.map((tag) => (
                            <Link className="fonts" to="#">
                              {tag.tag.name}
                            </Link>
                          ))}
                        </>
                    
                    </span>
                  </div>
                  <div className="price">
                    {oneProduct.dicount > 0 && oneProduct.dicount != null ? (
                      <>
                        <del className="price-pr">${oneProduct.price}</del>
                        <span className="discount p-0">
                          ${oneProduct.dicount}
                        </span>
                      </>
                    ) : (
                      <del className="price-pr">$100.00</del>
                    )}
                  </div>
                  <div className="wo-product-details">
                    <p className="desc">{oneProduct.description}</p>
                  </div>
                  <p className="inStock">
                    In-stock-
                    {oneProduct.inStock < 1 && oneProduct.inStock == null ? (
                      <>
                        <strong>is about to be exhausted</strong>
                      </>
                    ) : (
                      <>({oneProduct.inStock}</>
                    )}
                    )
                  </p>
                  <form className="d-flex flex-wrao" action="">
                    <div className="quantity">
                      <input
                        className="minus"
                        type="button"
                        value="-"
                        onClick={btnDecrement}
                      />
                      <input className="qty" type="number" value={quantity} />
                      <input
                        className="plus"
                        type="button"
                        value="+"
                        onClick={btnIcrement}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => handleAddToCart(oneProduct.id)}
                      className="btn btn-dark"
                    >
                      ADD TO CART
                    </button>
                  </form>
                </div>
                <div className="fishing-up mt-5">
                  <TabMenu
                    label1={"Fishing"}
                    label2={"Delivery"}
                    label3={"Today's Deal"}
                  />
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
            <TabMenu
              label1={"Description"}
              label2={"Additional information"}
              label3={"Reviews"}
            />
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
                {related?.map((rel) => (
                  <SwiperSlide key={rel.id}>
                    <SingleProducts data={rel} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
