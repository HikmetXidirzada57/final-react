import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SingleMember from "../single-member/SingleMember";
import './allteam.scss'
const Allteam = () => {
  return (
    <div className="wrapp-teams">
         <div className="page-title">
            <h1>Our Team Member</h1>
          </div>
      <div className="container-tema">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          autoPlay
        >
          <SwiperSlide>
            <SingleMember/>
          </SwiperSlide>
          <SwiperSlide>
            <SingleMember/>
          </SwiperSlide>
          <SwiperSlide>
            <SingleMember/>
          </SwiperSlide>
          <SwiperSlide>
            <SingleMember/>
          </SwiperSlide>
          <SwiperSlide>
            <SingleMember/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Allteam;
