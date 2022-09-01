import React, { useState } from "react";
import "./footer.scss";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import NearMeIcon from "@mui/icons-material/NearMe";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import paymenyImg from "../../images/images.jpg";

const Footer = () => {
  const [activeUl, setActiveUl] = useState(true);
  const [isBlock, setBlock] = useState(true);
  const [isThird, setisThird] = useState(true);
  const [isFourth, setisFourth] = useState(true);
  const [isLast, setisLast] = useState(true);

  const handleFirst = () => {
    setActiveUl(!activeUl);
  };
  const handleSecond = () => {
    setBlock(!isBlock);
  };

  const handleThird = () => {
    setisThird(!isThird);
  };
  const handleLast = () => {
    setisLast(!isLast);
  };

  const handleFourth = () => {
    setisFourth(!isFourth);
  };
  return (
    // FOOTER START /////
    <footer className="footer">
      <div className="container-mini-footer">
        <div className="footer-top">
          <div className="footer-widget-area">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="first-widget">
                  <div className="div">
                    <div className="title-contact">
                      <h3>Contact Us</h3>
                    </div>
                    <ul
                      className={
                        activeUl ? "toggle-contact list-unstyled" : null
                      }
                    >
                      <li>
                        <div className="adress">
                          <div className="d-flex align-items-center">
                            <span>
                              <LocationOnOutlinedIcon className="foot-location" />
                            </span>
                            <p className="p-0">
                              60, 29th Street, San Francisco,abra kadabra
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="phone">
                          <span>
                            <ContactPhoneIcon className="foot-icon" />
                          </span>
                          <span>+994554770076</span>
                        </div>
                      </li>
                      <li>
                        <div className="email">
                          <span>
                            <HeadsetMicIcon className="foot-icon" />
                          </span>
                          <span>hikmet_xidirzada57@mail.ru</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="footer-click d-none"
                    onClick={() => handleFirst()}
                  >
                    <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 col-sm-12">
                <div className="second-widget">
                  <div className="div">
                    <div className="title">
                      <h3>About</h3>
                    </div>
                    <ul
                      className={isBlock ? "toggle-block list-unstyled" : null}
                    >
                      <li>
                        <Link to="#">About Us</Link>
                      </li>
                      <li>
                        <Link to="#">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="#">Careers</Link>
                      </li>
                      <li>
                        <Link to="#">Flipcart Stories</Link>
                      </li>
                      <li>
                        <Link to="#">Press</Link>
                      </li>
                    </ul>
                  </div>

                  <div
                    className="footer-click d-none"
                    onClick={() => handleSecond()}
                  >
                    <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-12 col-sm-12">
                <div className="third-widget">
                  <div className="div">
                    <div className="title">
                      <h3>Help</h3>
                    </div>
                    <ul
                      className={isThird ? "toggle-block list-unstyled" : null}
                    >
                      <li>
                        <Link to="#">About Us</Link>
                      </li>
                      <li>
                        <Link to="#">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="#">Careers</Link>
                      </li>
                      <li>
                        <Link to="#">Flipcart Stories</Link>
                      </li>
                      <li>
                        <Link to="#">Press</Link>
                      </li>
                    </ul>
                  </div>

                  <div
                    className="footer-click d-none"
                    onClick={() => handleThird()}
                  >
                    <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 col-sm-12">
                <div className="fourth-widget">
                  <div className="div">
                    <div className="title">
                      <h3>Policy</h3>
                    </div>
                    <ul className={isFourth ? "toggle-block p-0" : null}>
                      <li>
                        <Link to="#">About Us</Link>
                      </li>
                      <li>
                        <Link to="#">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="#">Careers</Link>
                      </li>
                      <li>
                        <Link to="#">Flipcart Stories</Link>
                      </li>
                      <li>
                        <Link to="#">Press</Link>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="footer-click d-none"
                    onClick={() => handleFourth()}
                  >
                    <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="fifth-widget">
                  <div className={isLast ? "handleLast" : null}>
                    <div className="title">
                      <h3>Subscribe Now</h3>
                    </div>
                    <p>
                      Subscribe to our newsletterget 10% off your first purchase
                      at here for update.
                    </p>
                    <div className={isLast ? "toggle-input" : null}>
                      <form action="input">
                        <div className="input-field">
                          <input type="email" name="#" id="#" />
                          <span className="submit-button">
                            <button>
                              <NearMeIcon />
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="footer-click d-none"
                    onClick={() => handleLast()}
                  >
                    <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="top-payment-methods">
            <p>Copyright © 2022 Templatemela</p>
            <span className="method-payment">
              <img src={paymenyImg} alt="payment" />
            </span>
          </div>
        </div>
      </div>
    </footer>

    // FOOTER END ///
  );
};

export default Footer;
