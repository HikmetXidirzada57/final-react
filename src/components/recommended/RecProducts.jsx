import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "./recommend.scss";
import SingleProducts from "../best-seller-single/SingleProducts";
import { useDispatch, useSelector } from "react-redux";
import { productListRecAction } from "../../Redux/Actions/ProductActions";
import { useEffect } from "react";

const RecProducts = () => {

  const prorec = useSelector((state) => state.recProducts);
  const dispatch = useDispatch();
  console.log(prorec);
  useEffect(() => {
    dispatch(productListRecAction());
  }, [dispatch]);
  return (
    <div className="background-components">
      <div className="col-lg-12">
        <div className="container-mini">
          <div className="page-title">
            <h1>Recommended Products</h1>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
            spaceBetween={10}
            slidesPerView={5}
            navigation
            autoplay
            breakpoints={{
              375:{
               slidesPerView:1
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
            {prorec.products.map((rec) => (
              <SwiperSlide key={rec.id}>
                <SingleProducts data={rec} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default RecProducts;
