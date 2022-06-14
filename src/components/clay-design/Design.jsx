import React from 'react'
import { Link } from 'react-router-dom'
import bannerimg from '../../images/Offer-banner.0.jpg'
import "./design.scss"

const Design = () => {
  return (
    <div className='col-lg-12 col-md-12 col-sm-12'>
        <div className="wpg-design">
            <img className='container'  src={bannerimg} alt="banner" />

            <div className="static-wpg">
                <div>
                    <span className='blow'>Clay Bowl Designs</span>
                </div>
                <div>
                    <span className='textmini'>Now Available all over the world</span>
                </div>
                <div>
                    <Link className='shopButton' to="#">
                       Shop Now
                    </Link>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Design