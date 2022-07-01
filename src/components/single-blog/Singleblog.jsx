import React from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import AddLinkIcon from "@mui/icons-material/AddLink";
import blogimg from "../../images/1-303x196_t.jpg";
import "./singleblog.scss";
const Singleblog = () => {
  return (
    <div className="blog-item">
      {/* <div className="container"> */}
      <div className="col-lg-12">
        <div className="d-flex flex-wrap">
          {/* <div className="col-lg-6"> */}
            <div className="img-blog">
              <img className="img-fluid" src={blogimg} alt="blogimage" />
              <div className="hover-blog">
                <span className="h-icon">
                  <Link to="#">
                    <AddIcon className="add" />
                  </Link>
                </span>
                <span className="h-icon">
                  <Link to="#">
                    <AddLinkIcon className="add" />
                  </Link>
                </span>
              </div>
            </div>
          {/* </div> */}
          {/* <div className="col-lg-6 col-sm-12"> */}
            <div className="text-blog">
              <div className="title">
                <Link to="#">Alone With My Though</Link>
              </div>
              <div className="date-post">
                <p>5th January of 2022</p>
              </div>
              <div className="post-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis, doloremque.
                </p>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
    // </div>
  );
};

export default Singleblog;
