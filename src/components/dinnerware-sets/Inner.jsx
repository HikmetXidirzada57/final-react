import React from "react";
import Set from "../single-sets/Set";
import "./inner.scss";

const Inner = () => {
  return (
    <div className="col-lg-12">
      <div className="inner">
        <div className="contain">
          <div className="row">
            <Set />
            <Set />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inner;
