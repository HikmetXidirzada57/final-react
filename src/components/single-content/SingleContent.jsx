import React from "react";
import { Link } from "react-router-dom";
import "./single.scss";
import bannaerimg from "../../images/Sub-banner-01.jpg";
const SingleContent = () => {
  return (
    
    <div className="col-lg-6 col-md-12 col-sm-12">
   
        <div className="coloumn-inner">
        <div className="wrapper">
          <div className="banner-img">
            <Link to="#">
              <img className="img-fluid" src={bannaerimg} alt="" />
            </Link>
            <div className="hover-effect">
                
            </div>
          </div>
          <div className="static-wrapp">
            <h4>Electric Kettle</h4>
            <p>Now in all Color Varient Avavilable</p>
            <Link className="shopnow" to="">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    
    </div>
    

  );
};

export default SingleContent;
