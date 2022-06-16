import React from 'react'
import Deal from '../single-deals/Deal'
import './dayProducts.scss'
const DaysProducts = () => {
  return (
    <div className='wpg-all'>
        <div className="container-mini">
        <div className="col-lg-12">
            <div className="day-title">
                <h1>Deal Of the Day</h1>
            </div>
            <div className="day-deals">
              <div className="d-flex">
                
              <Deal/>
              <Deal/>
              </div>
            </div>
        
        </div>
        </div>

    </div>
  )
}

export default DaysProducts