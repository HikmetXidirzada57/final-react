import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import "./shopCat.scss";
import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "../../Redux/Actions/CategoryActions";

const ShopCategory = () => {
  const { categories } = useSelector((st) => st.listCategory);
  const dispatch = useDispatch();
  const [drop, setDrop] = useState("true")


  const handleOpenDrop = () => {
    setDrop(!drop)
  };

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);
  return (
    <div className="product-category">
      <aside className="wocommerce-category">
        <div className="widget-title">
          <h3>Product Categories</h3>
        </div>
        {categories &&
          categories.map((cat) => (
            <ul className="product-cat-list" key={cat.id}>
              <li className="cat-item-parent">
                <>
                  <Link to="#">{cat.categoryName}</Link>

                  {cat.childrens?.map((chl) => (
                    <>
                      <div className="expandble-icon" onClick={()=>handleOpenDrop()}>
                        <AddBoxRoundedIcon />
                      </div>
                      <ul className={ drop ? "drop list-unstyled":null}>
                        <li>{chl.name}</li>
                      </ul>
                    </>
                  ))}
                </>
              </li>
            </ul>
          ))}
      </aside>
    </div>
  );
};

export default ShopCategory;
