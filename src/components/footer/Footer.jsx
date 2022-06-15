import React from "react";
import "./footer.scss";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-mini">`
        <div className="footer-top">
          <div className="footer-widget-area">
            <div className="d-flex">
              <div className="first-widget">
                <div className="title-contact">
                  <h3>Contact Us</h3>
                </div>
                <ul className="toggle-contact list-unstyled">
                  <li>
                    <div className="adress">
                      <span>
                        <LocationOnIcon/>
                      </span>
                      <span>
                        60, 29th Street, San Francisco,
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="phone">
                    <span>
                      <ContactPhoneIcon/>
                    </span>
                      <span>+994554770076</span>
                    </div>
                  </li>
                  <li>
                    <div className="email">
                          <span>
                            <HeadsetMicIcon/>
                          </span>
                      <span>hikmet_xidirzada57@mail.ru</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="second-widget">
                <div className="title"></div>
                <ul className="toggle-block list-unstyled">
                <li>

                </li>
                </ul>
              </div>
              <div className="fourth-widget"></div>
              <div className="fifth-widget"></div>
            </div>
          </div>
        </div>
        <div className="footer-bottom"></div>
      </div>
    </footer>
  );
};

export default Footer;
