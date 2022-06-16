import React from "react";
import SingleContent from "../single-content/SingleContent";
import "./wrap.scss";
const Wrapper = () => {
  return (
    <div className="wrapper">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="contain">
          <div className="row justify-content-between">
            <SingleContent />
            <SingleContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
