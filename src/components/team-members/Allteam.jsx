import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SingleMember from "../single-member/SingleMember";
import "./allteam.scss";
import { API_URL } from "../../link/URL";
const Allteam = () => {
  const [member, setMember] = useState([]);

  useEffect(() => {
    const { data } = fetch(`${API_URL}/teamMember/getAllMember`)
      .then((res) => res.json())
      .then((res) => setMember(res));
  }, []);
  console.log(member);
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
          { member && member.map((team) => (
            <SwiperSlide key={team.id}>
              <SingleMember data={team}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Allteam;
