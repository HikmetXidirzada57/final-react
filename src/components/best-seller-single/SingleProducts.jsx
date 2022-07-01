import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CompareIcon from "@mui/icons-material/Compare";

// import Rating from "@mui/material/Rating";

import "./singleproduct.scss";
import { Rating } from "@mui/material";

const SingleProducts = ({data}) => {
  return (
      
        <div className="owl-item">
          <Link to="#">
            <img className="img-fluid" src={data} alt="" />
          </Link>
          <div className="block-hover">
            <div className="shopping-cart">
              <ShoppingCartIcon className="cart" />
            </div>
            <div className="like">
              <FavoriteIcon className="favorite" />
            </div>
            <div className="compare">
              <CompareIcon className="compar" />
            </div>
            <div className="review">
              <Link to="">
                <VisibilityIcon className="visibility" />
              </Link>
            </div>
          </div>
          <span className="sale-percent">10%</span>
          <div className="detail-wrapper">
            <span>
            <Rating name="size-large" defaultValue={2} size="large" className="raiting" />
            </span>
            <Link to="#">
              <h3>Lorem ispum dolar amor</h3>
            </Link>
            <span className="price">$150</span>
          </div>
        </div>
      
  );
};

export default SingleProducts;
