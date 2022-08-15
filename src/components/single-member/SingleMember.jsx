import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
// import staffimage from "../../images/S3-600x600_t.jpg";
import './singlemember.scss'
const SingleMember = ({data}) => {
  return (

      <div className="staff">
        {data && (
          <>
           <div className="staff-image">
              <img className="img-fluid" src={data.photoUrl} alt=""/>
            </div>
            <div className="team-info">
              <div className="staff-position">
                <span>{data.speciality}</span>
              </div>
              <div className="staff-name">
                <Link to="#">{data.name}</Link>
              </div>
              <div className="staff-social-icon">
                <span>
                  <FacebookIcon  className="icon-social" />
                </span>
                <span>
                  <InstagramIcon className="icon-social" />
                </span>
                <span>
                  <TwitterIcon  className="icon-social"/>
                </span>
                <span>
                  <GoogleIcon className="icon-social" />
                </span>
              </div>
            </div>
          </>
             
        )}
    
    </div>
  );
};

export default SingleMember;
