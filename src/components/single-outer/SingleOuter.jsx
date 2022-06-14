import React from "react";
import { Link } from "react-router-dom";
import blockimg from "../../images/Brand-5.png";
import "./singleOut.scss";
const SingleOuter = () => {
  return (
    <div className="col-lg-12">
      <div className="item-brand">
        <div className="product-block">
          <Link to="#">
            <img className="img-fluid" src={blockimg} alt="block" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleOuter;
