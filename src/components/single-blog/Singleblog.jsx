import React from "react";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import AddLinkIcon from '@mui/icons-material/AddLink';
import blogimg from "../../images/1-303x196_t.jpg"
import "./singleblog.scss";
const Singleblog = () => {
  return (
    <div>
      <div className="blog-item">
        <div className="container">
          <div className="col-lg-6 col-md-5 col-sm-12">
            <div className="d-flex">
              <div className="img-blog">
                <img src={blogimg} alt="blogimage"/>
                <div className="hover-blog">
                  <span className="h-icon">
                    <Link to="#">
                        <AddIcon/>
                    </Link>
                  </span>
                  <span cl>
                  <Link to="#">
                    <AddLinkIcon/>
                  </Link>
                  </span>
                </div>
                <div className="text-blog">
                    <div className="title">
                        <Link to="">My Style in My Life</Link>
                    </div>
                    <div className="date-post">
                        <p>5th January of 2022</p>
                    </div>
                    <div className="post-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, doloremque.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleblog;
