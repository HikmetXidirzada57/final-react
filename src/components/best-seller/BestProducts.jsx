import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SingleProducts from "../best-seller-single/SingleProducts";
import "./besetsel.scss";
import { useSelector, useDispatch } from "react-redux";
import { productListBestAction } from "../../Redux/Actions/ProductActions";
import { useEffect } from "react";

const BestProducts = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.bestProducts);
  useEffect(() => {
    dispatch(productListBestAction());
  }, [dispatch]);
  console.log(products);
  return (
    <div className="background-components">
      <div className="col-lg-12">
        <div className="container-mini">
          <div className="page-title">
            <h1>Bestseller Products</h1>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={5}
            navigation
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              375: {
                slidesPerView: 1,
              },

              576: {
                // width: 576,
                slidesPerView: 2,
              },
              768: {
                // width: 768,
                slidesPerView: 5,
              },
            }}
          >
            {products.map((pro) => (
              <SwiperSlide key={pro.id}>
                <SingleProducts data={pro} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
