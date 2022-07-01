import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./about.scss";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, A11y, Scrollbar } from "swiper";
import imgabout from "../images/5-1100x600.jpg";
import { Link } from "react-router-dom";
import Allteam from "../components/team-members/Allteam";
import ScrollToTop from 'react-scroll-to-top'

// import "./styles.css";
const About = () => {
  return (
    <div className="page-main">
      <ScrollToTop smooth top="20" color="black" />
      <div className="container-tema">
        <div className="page-title">
          <h1>About</h1>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-6 col-md-6-col-sm-12">
            <div className="slider-about">
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                 loop={true}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img className="img-fluid" src={imgabout} alt="imgAbout" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid" src={imgabout} alt="imgAbout" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid" src={imgabout} alt="imgAbout" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="wpg-text">
              <div className="title-left">
                <h1>If you wanted get model, how would you do it?</h1>
              </div>
              <div className="down-desc">
                <p>
                  Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                  Cras dapibus. Vivamus elementum semper nisi.There are many
                  variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected
                  humor.
                </p>
                <p>
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                  eu, consequat vitae, eleifend ac, enim. Quisque rutrum. Aenean
                  imperdiet. Etiam ultricies nisi vel augue.consequat vitae,
                  eleifend ac, enim. Quisque rutrum. Aenean imperdiet
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="meganor-history">
          <div className="page-title">
            <h1>Meganor History</h1>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-6">
              <div className="mega-part">
                <span className="mega-icon">
                  <PublicRoundedIcon className="micon" />
                </span>
                <span className="mega-title">
                  <Link to="#">EASY TO USE</Link>
                </span>
                <p>
                  We've Put A Lot Of Thought In Giving You The Best Possible
                  Experience To Make Your Job Easier.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mega-part">
                <span className="mega-icon">
                  <PublicRoundedIcon className="micon" />
                </span>
                <span className="mega-title">
                  <Link to="#">EASY TO USE</Link>
                </span>
                <p>
                  We've Put A Lot Of Thought In Giving You The Best Possible
                  Experience To Make Your Job Easier.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mega-part">
                <span className="mega-icon">
                  <PublicRoundedIcon className="micon" />
                </span>
                <span className="mega-title">
                  <Link to="#">EASY TO USE</Link>
                </span>
                <p>
                  We've Put A Lot Of Thought In Giving You The Best Possible
                  Experience To Make Your Job Easier.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mega-part">
                <span className="mega-icon">
                  <PublicRoundedIcon className="micon" />
                </span>
                <span className="mega-title">
                  <Link to="#">EASY TO USE</Link>
                </span>
                <p>
                  We've Put A Lot Of Thought In Giving You The Best Possible
                  Experience To Make Your Job Easier.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mega-part">
                <span className="mega-icon">
                  <PublicRoundedIcon className="micon" />
                </span>
                <span className="mega-title">
                  <Link to="#">EASY TO USE</Link>
                </span>
                <p>
                  We've Put A Lot Of Thought In Giving You The Best Possible
                  Experience To Make Your Job Easier.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mega-part">
                <span className="mega-icon">
                  <PublicRoundedIcon className="micon" />
                </span>
                <span className="mega-title">
                  <Link to="#">EASY TO USE</Link>
                </span>
                <p>
                  We've Put A Lot Of Thought In Giving You The Best Possible
                  Experience To Make Your Job Easier.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="team-staff">
          <Allteam />
        </div>
        <div className="col-lg-12">
          <div className="owl-slider">
            <div className="container">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination
              >
                <SwiperSlide>
                  <div className="owl-item">
                    <Link to="#">MR. ANDERSON JOHN</Link>
                    <p>CEO of Financer</p>
                    <p className="desc">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Molestias assumenda, quidem labore quae impedit dolorum id
                      officiis! Reprehenderit, corrupti vitae.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="owl-item">
                    <Link to="#">MR. ANDERSON JOHN</Link>
                    <p>CEO of Financer</p>
                    <p className="desc">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Molestias assumenda, quidem labore quae impedit dolorum id
                      officiis! Reprehenderit, corrupti vitae.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
