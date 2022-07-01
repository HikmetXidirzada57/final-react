import React from "react";
import { Link } from "react-router-dom";
import Search from "../components/input-search/Search";
import Singleblog from "../components/single-blog/Singleblog";
import ScrollToTop from 'react-scroll-to-top'

import './blog.scss'

const Blog = () => {
  return (
    <div className="background-components">
      <ScrollToTop smooth top="20" color="black" />
      
      <div className="container-mini">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="input mb-5">
              <Search />
            </div>
            <div className="recent-posts">
              <div className="title-outer">
                <h3 className="post-title">Recent Posts</h3>
              </div>
              <ul className="list-unstyled">
                <li>
                  <Link to="#">Alone with my thought</Link>
                </li>
                <li>
                  <Link to="#">Travelling Solo is my Awesome</Link>
                </li>
                <li>
                  <Link to="#">Five Days for Music</Link>
                </li>
                <li>
                  <Link to="#">A beatufill Sunday Morning</Link>
                </li>
              </ul>

            </div>
            <div className="recent-posts">
              <div className="title-outer">
                <h3 className="post-title">Recent Comments</h3>
              </div>
              <ul className="list-unstyled">
                <li>
                  <Link to="#">Admin on moment For Shooting </Link>
                </li>
                <li>
                  <Link to="#">Admin on</Link>
                </li>
                <li>
                  <Link to="#">Admin with my tgoughs</Link>
                </li>
                <li>
                  <Link to="#">A mini tour Of My Thoughs</Link>
                </li>
              </ul>
            </div>

            <div className="recent-posts">
              <div className="title-outer">
                <h3 className="post-title">Categories</h3>
              </div>
              <ul className="list-unstyled">
                <li>
                  <Link to="#">Business </Link>
                </li>
                <li>
                  <Link to="#">Fashion</Link>
                </li>
                <li>
                  <Link to="#">Lifestyle</Link>
                </li>
                <li>
                  <Link to="#">Music</Link>
                </li>
                <li>
                  <Link to="#">Travel</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-9 col-md-6 col-sm-12">
            <div className="page-title">
              <h1>All Blog</h1>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <Singleblog/>
              </div>
              <div className="col-lg-6  col-md-12">
                <Singleblog/>
              </div>
              <div className="col-lg-6  col-md-12">
                <Singleblog/>
              </div>
              <div className="col-lg-6  col-md-12">
                <Singleblog/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
