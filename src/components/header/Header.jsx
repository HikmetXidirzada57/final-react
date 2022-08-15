import React, { useRef, useState } from "react";
import logo from "../../images/logo.png";
import "./header.scss";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
import Categoryes from "../categoryList/Categoryes";
import Search from "../searchForm/Search";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../Redux/Actions/UserActions";

const Header = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((st) => st.userLogin);

  const [isActive, seteActive] = useState("true");
  const [headTop, setHeadTop] = useState("");
  const [headBut, setHeadBut] = useState("");
  const navBarRef = useRef();
  const mobileRef = useRef();

  const handleToggle = () => {
    seteActive(!isActive);
  };

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      setHeadTop("active-header");
      setHeadBut("active-top");
    } else {
      setHeadTop("");
      setHeadBut("");
    }
  });
  const handleOpenClick = () => {
    navBarRef.current.classList.add("active-nav");
    mobileRef.current.classList.add("active-overlay");
  };
  const handleClose = () => {
    navBarRef.current.classList.remove("active-nav");
    mobileRef.current.classList.remove("active-overlay");
  };

  return (
    //   header start/////
    <header id="mainHead" className="header">
      <div className={`header-top ${headBut}`}>
        <div className="container-small">
          <div className="d-flex justify-content-between align-items-center">
            <div className="col-lg-2">
              <div className="header-top-left">
                <div className="logo">
                  <Link to="/">
                    <img className="img-fluid" src={logo} alt="logo" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-top-center">
                <Search />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="header-top-right">
                <div className="header-service">
                  <div className="d-flex">
                    <div className="sms-block">
                      <div className="d-flex align-items-center">
                        <div className="s-icon">
                          <LocalShippingOutlinedIcon className="shipping hover" />
                        </div>
                        <div className="s-text">
                          Free <br />
                          <span>Shipping</span>
                        </div>
                      </div>
                    </div>
                    <div className="contact-block">
                      <div className="d-flex align-items-center">
                        <div className="c-icon">
                          <HeadsetMicOutlinedIcon className="headphone hover" />
                        </div>
                        <div className="c-text">
                          Contact <br />
                          <span>0554770076</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`header-bottom ${headTop}`}>
        <div className="container-theme">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="col-lg-9">
              <div className="header-bottom-left">
                <div className="d-flex align-items-center">
                  <Categoryes />
                  <nav ref={navBarRef} id="mega-menu" className="navigator-bar">
                    <ul className="main-menu d-flex m-0 p-0">
                      <li>
                        <Link to="#">Home</Link>
                      </li>
                      <li className="shopping">
                        <Link to="/shop">Shop</Link>
                        <div className="drop-shop">
                          <ul className="list-unstyled">
                            <li>
                              <Link to="#">Top Rated Product</Link>
                            </li>
                            <li>
                              <Link to="#">Product Category</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="blog">
                        <Link to="/blog">Blog</Link>
                        <div className="drop-blog">
                          <ul className="list-unstyled">
                            <li>
                              <Link to="#">Left Sidebar</Link>
                            </li>
                            <li>
                              <Link to="#">Right Sidebar</Link>
                            </li>
                            <li>
                              <Link to="#">Full width</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="media">
                        <Link to="#">Media</Link>
                        <div className="drop-media">
                          <ul className="list-unstyled">
                            <div className="md d-flex sm d-block justify-content-between">
                              <li className="sub-title">
                                <Link className="title" to="#">
                                  GALLERY
                                </Link>
                                <ul className="second-drop list-unstyled">
                                  <li>
                                    <Link to="#">2 coloumns</Link>
                                  </li>
                                  <li>
                                    <Link to="#">3 coloumns</Link>
                                  </li>
                                  <li>
                                    <Link to="#">4 coloumns</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="sub-title">
                                <Link className="title" to="#">
                                  PORTFOLIO
                                </Link>
                                <ul className="second-drop list-unstyled">
                                  <li>
                                    <Link to="#">2 coloumns</Link>
                                  </li>
                                  <li>
                                    <Link to="#">3 coloumns</Link>
                                  </li>
                                  <li>
                                    <Link to="#">4 coloumns</Link>
                                  </li>
                                </ul>
                              </li>
                            </div>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link to="#">ShortCode</Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li className="feat">
                        <Link to="#">Features</Link>
                        <div className="drop-featur">
                          <ul className="list-unstyled">
                            <li>
                              <Link to="#">FAQs</Link>
                            </li>
                            <li>
                              <Link to="#">Typhography</Link>
                            </li>
                            <li>
                              <Link to="#">Sitemap</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link to="#">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="#"></Link>
                      </li>
                    </ul>
                    <span className="clear d-none" onClick={handleClose}>
                      <ClearIcon className="cl-icon" />
                    </span>
                  </nav>
                </div>
              </div>
            </div>

            <div className="col-auto">
              <div className="header-bottom-right">
                <div className="d-flex align-items-center">
                  <div
                    className={`mobile-navigation mx-2`}
                    onClick={handleOpenClick}
                  >
                    <MenuIcon className="mobile-nav" />
                  </div>
                  <div className="top-bar mx-2">
                    <div className="icon-person" onClick={() => handleToggle()}>
                      <PersonOutlinedIcon className="style-icon" />
                    </div>
                    {!isActive && (
                      <div className="link-toggle">
                        <div className="header-menu-link">
                          <ul className="menu-header m-0 p-0">
                            {userInfo && userInfo.token ? (
                              <>
                                <li>
                                  <Link to="#">

                                    MyAccount: <br />
                                    <strong>
                                    {userInfo.email}
                                    </strong>                                    
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <button
                                      onClick={() => dispatch(logoutAction())}
                                      className="btn btn-warning"
                                    >
                                      Log out
                                    </button>
                                  </Link>
                                </li>
                              </>
                            ) : (
                              <>
                                <li>
                                  <Link to="/login">User Login</Link>
                                </li>
                              </>
                            )}

                            <li>
                              <Link to="#">Checkout</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="wishlist">
                    <FavoriteBorderIcon className="style-icon" />
                  </div>
                  <div className="header-cart">
                    <div className="d-flex align-items-center">
                      <div className="cart-icon">
                        <Link to="/cart">
                          <AddShoppingCartOutlinedIcon className="style-icon" />
                        </Link>
                      </div>
                      <div className="info-cart">
                        <p className="p-0 m-0">My Cart</p>
                        <span className="total-price">$0.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div ref={mobileRef} className="mobile-menu-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
