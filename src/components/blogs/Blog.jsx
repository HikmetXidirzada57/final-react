import React, { useEffect } from 'react'
import { SwiperSlide,Swiper } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useSelector, useDispatch } from "react-redux";
import './blog.scss'
import { blogListAction } from '../../Redux/Actions/BlogAction';
import Singleblog from '../single-blog/Singleblog';


const Blog = () => {

  const dispatch = useDispatch();
  // const {blogs}  = useSelector((state) => state);
  const {blogs}  = useSelector((state) => state.listBlog);
  useEffect(() => {
    dispatch(blogListAction());
  }, [dispatch]);

  return (
    <div className='background-components'>
        <div className="container-mini">
        <div className="page-title">
            <h1>From The Blog</h1>
          </div>
          <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={2}
              // navigation
          >
            {blogs && blogs.map((data)=>(
               <SwiperSlide key={data.id}>
               <Singleblog data={data}/>
              </SwiperSlide>
            ))}
           
          </Swiper>
        </div>
    </div>
  )
}

export default Blog