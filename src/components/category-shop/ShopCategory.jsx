import React from 'react'
import { Link } from 'react-router-dom'
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import './shopCat.scss'

const ShopCategory = () => {
  return (
  <div className="product-category">
    <aside className="wocommerce-category">
      <div className="widget-title">
        <h3>Product Categories</h3>
      </div>
      <ul className="product-cat-list">
        <li className='cat-item-parent'>
          <Link to="#">Applicanes</Link>
          <div className="expandble-icon">
            <AddBoxRoundedIcon/>
          </div>
        </li>
        <li className='cat-item'>
          <Link to="#">Bakeware</Link>
        </li>
        <li className='cat-item'>
          <Link to="#">Coffe Maker</Link>
        </li>
        <li className='cat-item'>
          <Link to="#">Cooktaps</Link>
        </li>
        <li className='cat-item'>
          <Link to="#">Fryer</Link>
        </li>
      </ul>
    </aside>
  </div>
  
  )
}

export default ShopCategory
