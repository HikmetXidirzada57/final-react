import React from "react";
import Deal from "../single-deals/Deal";
import "./dayProducts.scss";
const DaysProducts = () => {
  return (
    <div className="background-components">
      <div className="container-mini">
        <div className="col-lg-12">
          <div className="page-title">
            <h1>Deal Of the Day</h1>
          </div>
          <div className="day-deals">
            <div className="row"> 
            <div className="col-lg-6 col-md-12 col-sm-12">
            <Deal />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
            <Deal />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysProducts;
