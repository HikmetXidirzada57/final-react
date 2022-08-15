import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../link/URL";
import './blogdetail.scss'


const BlogDetail = () => {
  const [oneBlog, setOneBlog] = useState(null);
  // const [related, setRelated] = useState([]);
  const { id } = useParams();
  const getBlogById = (id) => {
    fetch(`${API_URL}/blog/${id}`)
      .then((res) => res.json())
      .then((res) => setOneBlog(res));
  };

  useEffect(() => {
    getBlogById(id);
  }, [id]);

  return (
    <div className="blog-detail">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          {oneBlog && (
            <>
              <div className="col-lg-6">
                <img className="img-fluid" src={oneBlog.blogPicture} alt="blogdetailimg"/>
              </div>
              <div className="col-lg-6">
                <div className="blog-desc">
                <h5 className="blog-name">{oneBlog.name}</h5>
                <p className="publish-date">Pubslish date:{oneBlog.publishDate}</p>
                <p className="blog-description">
                    {oneBlog.description}</p>
                </div>
               
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
