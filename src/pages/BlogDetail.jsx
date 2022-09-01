import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Singleblog from "../components/single-blog/Singleblog";
import { API_URL } from "../link/URL";
import "./blogdetail.scss";
import { format } from 'date-fns'

const BlogDetail = () => {
  const [oneBlog, setOneBlog] = useState(null);
  const [related, setRelated] = useState([]);
  const [date, setDate] = useState("")
  const [blogCategoryId, setBlogCategoryId] = useState(null);
  const { id } = useParams();

  const getBlogById = useCallback(async () => {
    const response = await (await fetch(`${API_URL}/blog/${id}`)).json();
    setOneBlog(response);
    setBlogCategoryId(response.blogCategoryId);
  }, [id]);

  const getRelatedBlogs = useCallback(() => {
    if (blogCategoryId !== null) {
      fetch(`${API_URL}/blog/getRelatedBlogs/${id}/${blogCategoryId}`)
        .then((res) => res.json())
        .then((res) => setRelated(res));
    }
  }, [id, blogCategoryId]);
  useEffect(() => {
    getBlogById();
    getRelatedBlogs();
  }, [getBlogById, getRelatedBlogs]);
  console.log(related);
  return (
    <div className="blog-detail">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          {oneBlog && (
            <>
              <div className="col-lg-7 col-md-6 col-sm-12">
                <img
                  className="img-fluid"
                  style={{width:"100%"}}
                  src={oneBlog.blogPicture}
                  alt="blogdetailimg"
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="blog-text">
                  <h5 className="blog-name">{oneBlog.name}</h5>
                  <p className="blog-description">{oneBlog.description}</p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="related-blog mt-5">
          <div className="row align-items-center">
            <div className="page-title">
              <h1>Related Blogs</h1>
            </div>
            {
              related?.map((relBlog) => (
                <div className="col-lg-3" key={relBlog.id}>
                  <img className="img-fluid" src={relBlog.blogPicture} alt="blogImage"/>
                  <div className="info mt-2">
                  <h4 style={{fontWeight:"600"}}>{relBlog.name}</h4>
                  <p style={{fontStyle:"italic"}}>{relBlog.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
