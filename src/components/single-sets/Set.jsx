import React from 'react'
import { Link } from "react-router-dom";
import bannaerimg from "../../images/Cms-banner-01.jpg";
import './set.scss'
const Set = () => {
  return (
 
       <div className="col-lg-6 col-md-6">
        <div className="all-sets">
        <div className="coloumn-inner">
        <div className="wrapper">
          <div className="banner-img">
            <Link to="#">
              <img className="img-fluid" src={bannaerimg} alt=""/>
            </Link>
            <div className="hover-effect">
                
            </div>
          </div>
          <div className="static-wrapp">
            <h4>Dinnerware Sets</h4>
            <p>Now in all Color Varient Avavilable</p>
            <Link className="shopnow" to="">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
        </div>
    
    </div>

  )
}

export default Set