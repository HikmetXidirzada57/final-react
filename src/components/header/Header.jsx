import React, { useState } from "react";
import logo from "../../images/logo.png";
import "./header.scss";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

import { Link } from "react-router-dom";
import Categoryes from "../categoryList/Categoryes";
const Header = () => {
  const [isActive, seteActive] = useState("true")
  const [click, setClick] = useState("")
  const [headTop, setHeadTop] = useState("");
  const [headBut, setHeadBut] = useState("");

  const handleToggle=()=>{
     seteActive(!isActive)
  }
   window.addEventListener("click",function(){
      setClick("active-nav")
  
   })
   window.addEventListener("scroll", function () {
     if (window.scrollY > 0) {
      setHeadTop("active-header");
      setHeadBut("active-top")
     } else {
      setHeadTop("");
      setHeadBut("")
     }
   });
  return (
    //   header start/////
    <header id="mainHead">
      <div className={`header-top ${headBut}`}>
        <div className="container-mini">
          <div className="md d-flex  justify-content-between sm justify-content-center align-items-center">
            <div className="header-top-left col-auto">
              <div className="logo">
                <img className="img-fluid" src={logo} alt="logo" />
              </div>
            </div>
            <div className="header-top-center">
              <div className="form">
                <form action="" className="d-flex">
                  <input type="text" placeholder="Search item"/>
                  <button className="search-button over-button">Search</button>
                </form>
              </div>
            </div>
            <div className="header-top-right">
              <div className="header-service">
                <div className="d-flex">
                  <div className="sms-block">
                    <div className="d-flex align-items-center">
                      <div className="s-icon">
                        <LocalShippingOutlinedIcon className="shipping hover"/>
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
                        <HeadsetMicOutlinedIcon className="headphone hover"/>
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
      <div className={`header-bottom ${headTop}`}>
        <div className="container-theme">
          <div className=" md d-flex justify-content-between  align-items-center md flex-wrap">
            <div className="header-bottom-left">
              <div className="d-flex align-items-center justify-content-between">
                 <Categoryes/>
                <nav id="mega-menu" className="navigator-bar">
                  <ul className="main-menu d-flex m-0 p-0">
                    <li>
                      <Link to="#">Home</Link>
                    </li>
                    <li className="shopping">
                      <Link to="#">Shop</Link>
                      <div className="drop-shop">
                        <ul className="for-ul">
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
                      <Link to="#">Blog</Link>
                      <div className="drop-blog">
                        <ul className="for-ul">
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
                        <ul className="m-0 p-0">
                          <div className="md d-flex sm d-block justify-content-between">
                            <li className="sub-title">
                              <Link className="title" to="#">
                                GALLERY
                              </Link>
                              <ul className="for-ul">
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
                              <ul className="for-ul">
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
                      <Link to="#">About Us</Link>
                    </li>
                    <li className="feat">
                      <Link to="#">Features</Link>
                      <div className="drop-featur">
                        <ul className="for-ul">
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
                </nav>

              </div>
            </div>

            <div className="header-bottom-right">
              <div className="d-flex align-items-center justify-content-around">
                <div className={`mobile-navigation ${click}`}>
                 <MenuIcon className="mobile-nav"/>
                </div>
                <div className="top-bar mx-2">
                  <div className="icon-person" onClick={()=>handleToggle()}>
                    <PersonOutlinedIcon className="style-icon"/>
                  </div>
                  {!isActive && 
                     <div className="link-toggle">
                     <div className="header-menu-link">
                       <ul className="menu-header m-0 p-0">
                         <li>
                           <Link to="#">MyAccount</Link>
                         </li>
                         <li>
                           <Link to="#">Checkout</Link>
                         </li>
                         <li>
                           <Link to="#">User Login</Link>
                         </li>
                       </ul>
                     </div>
                    </div>
                  }
                
                </div>
                <div className="wishlist">
                    <FavoriteBorderIcon className="style-icon"/>
                </div>
                <div className="header-cart">
                    <div className="d-flex align-items-center">
                        <div className="cart-icon">
                            <AddShoppingCartOutlinedIcon className="style-icon"/>
                        </div>
                        <div className="info-cart">
                            <p className="p-0 m-0">My Cart</p>
                            <span className="total-price">$0.00</span>
                        </div>
                    </div>
                </div>
              </div>
              <div className="mobile-menu-overlay">
                <span className="clear"><ClearIcon/></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
