import React from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import AddLinkIcon from "@mui/icons-material/AddLink";
import "./singleblog.scss";

const Singleblog = ({data}) => {
  return (
    <div className="blog-item">
      {data && (
      <div className="col-lg-12" key={data.id}>
      <div className="d-flex flex-wrap">
          <div className="img-blog">
            <img className="img-fluid" src={data.blogPicture} alt="blogimage"/>
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
          <div className="text-blog">
            <div className="title">
              <Link to={`blogDetail/${data.id}`}>{data.name}</Link>
            </div>
            <div className="date-post">
              <p>5th January of 2022</p>
            </div>
            <div className="post-description">
              <p>
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      )}

    </div>
  );
};

export default Singleblog;
