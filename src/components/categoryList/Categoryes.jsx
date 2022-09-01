import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import "./category.scss";
import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "../../Redux/Actions/CategoryActions";

const Categoryes = () => {
  const [isactive, setActive] = useState("true");
  const dispatch = useDispatch();
  const { categories } = useSelector((st) => st.listCategory);
  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  const clickToggle = () => {
    setActive(!isactive);
  };
  return (
    <div className="box-category" onClick={() => clickToggle(setActive)}>
      <div className="d-flex justify-content-around align-items-center">
        <span className="cat-nav">
          <ListOutlinedIcon className="menuicon" />
        </span>
        <span className="veritical-menu">All Categories</span>
      </div>
      {!isactive && (
        <div className="sidebar-category">
          <ul className="sidebar-drop m-0 p-0">
            {categories?.map((cate) => (
              <li className="side-li">
                <div className="li d-flex justify-content-between align-items-center px-3">
                  <Link to="#" className="side">
                    {cate.categoryName}
                  </Link>
                  <ArrowForwardIosOutlinedIcon
                    sx={{ fontSize: "16px" }}
                    className="arrow-right"
                  />
                </div>
                {cate.childrens?.map((chl) => (
                  <div className="sidebar-dc">
                    <ul className="p-0 m-0">
                      <div className="box">
                        <div className="d-flex">
                          <li>
                            <Link className="titles" to="#">
                             {chl.name}
                            </Link>
                            <ul className="p-0 m-0">
                              <li>
                                <Link to="#">Blender Accesiories</Link>
                              </li>
                              <li>
                                <Link to="#">Blender Accesiories</Link>
                              </li>
                              <li>
                                <Link to="#">Blender Accesiories</Link>
                              </li>
                            </ul>
                          </li>
                        </div>
                      </div>
                      {/* <div className="box">
                        <div className="d-flex">
                          <li>
                            <Link className="titles" to="#">
                              Blenders
                            </Link>
                            <ul>
                              <li>
                                <Link to="#">Blender Accesiories</Link>
                              </li>
                              <li>
                                <Link to="#">Blender Accesiories</Link>
                              </li>
                              <li>
                                <Link to="#">Blender Accesiories</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link className="titles" to="#">
                              Coffee Makers
                            </Link>
                            <ul>
                              <li>
                                <Link to="#">Blender Accesiories</Link>
                              </li>
                              <li>
                                <Link to="#">Blender Accesiories</Link>
                              </li>
                              <li>
                                <Link to="#">Blender Accesiories</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link className="titles" to="#">
                              Espresso Makiners
                            </Link>
                            <ul>
                              <li>
                                <Link to="#">Blender Accesiories</Link>
                              </li>
                              <li>
                                <Link to="#">Blender Accesiories</Link>
                              </li>
                              <li>
                                <Link to="#">Blender Accesiories</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link className="titles" to="#">
                              Food Chappers
                            </Link>
                            <ul>
                              <li>
                                <Link to="#">Blender Accesiories</Link>
                              </li>
                              <li>
                                <Link to="#">Blender Accesiories</Link>
                              </li>
                              <li>
                                <Link to="#">Blender Accesiories</Link>
                              </li>
                            </ul>
                          </li>
                        </div>
                      </div> */}
                    </ul>
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Categoryes;
