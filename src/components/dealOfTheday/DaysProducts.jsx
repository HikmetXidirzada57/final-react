import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { API_URL } from "../../link/URL";
import Deal from "../single-deals/Deal";
import "./dayProducts.scss";
const DaysProducts = () => {
  const [product, setProduct] = useState([]);
  const getData = () => {
    fetch(`${API_URL}/product/dealofDay`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
        console.log(res);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="background-components">
      <div className="container-mini">
        <div className="col-lg-12">
          <div className="page-title">
            <h1>Deal Of the Day</h1>
          </div>
          <div className="day-deals">
            <div className="row">
              {product.map((deal) => (
                <div className="col-lg-6 col-md-12 col-sm-12" key={deal.id}>
                  <Deal data={deal} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysProducts;
