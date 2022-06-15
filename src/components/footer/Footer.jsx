import React from "react";
import "./footer.scss";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import NearMeIcon from '@mui/icons-material/NearMe';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-mini">`
        <div className="footer-top">
          <div className="footer-widget-area">
            <div className="d-flex justify-content-between">
              <div className="first-widget">
                <div className="title-contact">
                  <h3>Contact Us</h3>
                </div>
                <ul className="toggle-contact list-unstyled">
                  <li>
                    <div className="adress">
                      <div className="d-flex">
                      <span>
                        <LocationOnOutlinedIcon className="foot-location"/>
                      </span>
                      <p>
                        60, 29th Street, San Francisco,abra kadabra
                      </p>
                      </div>
                  
                    </div>
                  </li>
                  <li>
                    <div className="phone">
                    <span>
                      <ContactPhoneIcon className="foot-icon"/>
                    </span>
                      <span>+994554770076</span>
                    </div>
                  </li>
                  <li>
                    <div className="email">
                          <span>
                            <HeadsetMicIcon className="foot-icon"/>
                          </span>
                      <span>hikmet_xidirzada57@mail.ru</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="second-widget">
                <div className="title">
                  <h3>About</h3>
                </div>
                <ul className="toggle-block list-unstyled">
                   <li><Link  to="#">About Us</Link></li>
                   <li><Link  to="#">Contact Us</Link></li>
                   <li><Link  to="#">Careers</Link></li>
                   <li><Link  to="#">Flipcart Stories</Link></li>
                   <li><Link  to="#">Press</Link></li>
                </ul>
              </div>
              <div className="third-widget">
              <div className="title">
                  <h3>Help</h3>
                </div>
                <ul className="toggle-block list-unstyled">
                   <li><Link  to="#">About Us</Link></li>
                   <li><Link  to="#">Contact Us</Link></li>
                   <li><Link  to="#">Careers</Link></li>
                   <li><Link  to="#">Flipcart Stories</Link></li>
                   <li><Link  to="#">Press</Link></li>
                </ul>
              </div>
              <div className="fourth-widget">
              <div className="title">
                  <h3>Policy</h3>
                </div>
                <ul className="toggle-block list-unstyled">
                   <li><Link  to="#">About Us</Link></li>
                   <li><Link  to="#">Contact Us</Link></li>
                   <li><Link  to="#">Careers</Link></li>
                   <li><Link  to="#">Flipcart Stories</Link></li>
                   <li><Link  to="#">Press</Link></li>
                </ul>
              </div>
              <div className="fifth-widget">
                <div className="title">
                  <h3>Subscribe Now</h3>
                </div>
                <p>Subscribe to our newsletterget 10% off your first purchase at here for update.</p>
                <div className="toggle-input">
                  <form action="input">
                    <div className="input-field">
                      {/* <label htmlFor="text">Email</label> */}
                      <input type="email" name="#" id="#"/>
                      <span className="submit-button"> 
                       <button><NearMeIcon/></button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom"></div>
      </div>
    </footer>
  );
};

export default Footer;
