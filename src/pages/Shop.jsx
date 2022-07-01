import React from "react";
import { Link } from "react-router-dom";
import ShopCategory from "../components/category-shop/ShopCategory";
import WindowRoundedIcon from "@mui/icons-material/WindowRounded";
import TableRowsRoundedIcon from "@mui/icons-material/TableRowsRounded";
import { Slider } from "@mui/material";
import "./shop.scss";
import SingleProducts from "../components/best-seller-single/SingleProducts";
import singleImage from "../images/2-1-256x360.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ScrollToTop from "react-scroll-to-top";

function valuetext(value) {
  return `${value} AZN`;
}
const Shop = () => {
  const [price, setPrice] = React.useState([0, 3000]);
  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };
  return (
    <div id="shop-area">
      <ScrollToTop smooth top="20" color="black" />
      <div className="row">
        <div className="col-lg-3">
          <div className="left-side-shop">
            <ShopCategory />
            <div className="filter-by-price my-3">
              <div className="title-outer">
                <h3>Filter by Price</h3>
              </div>
              <Slider
                max={3000}
                value={price}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
              <button className="btn btn-dark">Filter</button>
            </div>
            <div className="product-tags">
              <div className="title-outer">
                <h3>Product tags</h3>
              </div>
              <div className="tag-cloud">
                <Link to="#">Fashion</Link>
                <Link to="#">Summer</Link>
                <Link to="#">viverra</Link>
                <Link to="#">winter</Link>
                <Link to="#">Lifestyle</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="page-title">
            <h3>Shop</h3>
            <p>
              Shop Laptop feature only the best laptop deals on the market. By
              comparing laptop deals from the likes of PC World, Comet, Dixons,
              The Link and Carphone Warehouse, Shop Laptop has the most
              comprehensive selection of laptops on the internet. At Shop
              Laptop, we pride ourselves on offering customers the very best
              laptop deals. From refurbished laptops to netbooks, Shop Laptop
              ensures that every laptop – in every colour, style, size and
              technical
            </p>
          </div>
          <div className="cat-toolbar">
            <div className="row justify-content-between">
              <div className="col-lg-3">
                <div className="d-flex">
                  <nav className="gridlist">
                    <span className="toggle-grid">
                      <WindowRoundedIcon />
                    </span>
                    <span className="toggle-grid">
                      <TableRowsRoundedIcon />
                    </span>
                  </nav>
                  <p className="resul-ecommerce">Showing results</p>
                </div>
              </div>
              <div className="col-lg-3">
                <select className="price-changes">
                  <option disabled="true" value="">
                    Default
                  </option>
                  <option value="">Sort by price low to high</option>
                  <option value="">Sort by price high to low</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <SingleProducts data={singleImage} />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <SingleProducts data={singleImage} />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <SingleProducts data={singleImage} />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <SingleProducts data={singleImage} />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <SingleProducts data={singleImage} />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <SingleProducts data={singleImage} />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <SingleProducts data={singleImage} />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <SingleProducts data={singleImage} />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <SingleProducts data={singleImage} />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <SingleProducts data={singleImage} />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <SingleProducts data={singleImage} />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <SingleProducts data={singleImage} />
            </div>
          </div>
          <div className="wcommerce-pagination">
            <ul className="list-unstyled d-flex">
              <li>
                <span className="page active-num">1</span>
              </li>
              <li>
                <span className="page">2</span>
              </li>
              <li>
                <span className="page">
                  <ArrowRightAltIcon className="arrow-right" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
