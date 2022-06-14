import React from 'react'
import SingleContent from '../single-content/SingleContent'
import './wrap.scss'
const Wrapper = () => {
  return (
    <div className='col-lg-12'>
    <div className="contain">
        <div className="row">
            <SingleContent/>
            <SingleContent/>
        </div>
    </div>
    </div>
  )
}

export default Wrapper