import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShopCategory from "../components/category-shop/ShopCategory";
import WindowRoundedIcon from "@mui/icons-material/WindowRounded";
import TableRowsRoundedIcon from "@mui/icons-material/TableRowsRounded";
import { Slider } from "@mui/material";
import "./shop.scss";
import SingleProducts from "../components/best-seller-single/SingleProducts";
import ScrollToTop from "react-scroll-to-top";
import ReactPaginate from "react-paginate";
import { API_URL } from "../link/URL";
import axios from "axios";

function valuetext(value) {
  return `${value} AZN`;
}
const handlePageClick = () => {};

const Shop = () => {
  const [price, setPrice] = React.useState([0, 10000]);
  const [tag, setTag] = useState([]);
  const [products, setProducts] = useState([]);
  const [sortBy, setsortBy] = useState(2);
  const [loading, setLoading] = useState(false);
  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };

  const getAllProducts = useCallback(async () => {
    const res = await axios.post(`${API_URL}/product/filter`, {
      minPrice: price[0],
      maxPrice: price[1],
      sortBy,
    });
    setProducts(res.data.products);
  }, [price, sortBy]);

  const getAllTags = async () => {
    const { data } = await axios.get(API_URL + "/tag/getAll");
    setTag(data);
  };

  useEffect(() => {
    getAllTags();
  }, []);

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

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
                {tag && tag.map((t) => <Link to="#">{t.name}</Link>)}
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
          <div className="cat-toolbar pb-3">
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
                <select
                  className="price-changes form-control"
                  onChange={(e) => setsortBy(e.target.value)}
                >
                  <option style={{ fontFamily: "sans-serif" }} value={2}>
                    New products
                  </option>
                  <option style={{ fontFamily: "monospace" }} value={1}>
                    Sort by price low to high
                  </option>
                  <option style={{ fontFamily: "monospace" }} value={0}>
                    Sort by price high to low
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="row justify-content-between">
            {products?.map((pro) => (
              <div className="col-lg-3 col-md-4 col-sm-6">
                <SingleProducts loading={loading} key={pro.id} data={pro}/>
              </div>
            ))}
          </div>
          <div className="wcommerce-pagination">
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              pageCount={10}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"pagination justify-content-center"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
