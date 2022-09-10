import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import "./shopCat.scss";
import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "../../Redux/Actions/CategoryActions";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

const ShopCategory = () => {
  const { categories } = useSelector((st) => st.listCategory);
  const dispatch = useDispatch();
  const [indexes, setIndexes] = useState([]);
 
  const [open, setOpen] = useState([]);
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  // const handleOpenDrop = (index) => {
  //   let arr = [...indexes];

  //   let hasindex = arr.includes(index);
  //   if (hasindex) {
  //     setIndexes(
  //       arr.filter((s) => {
  //         return s !== index;
  //       })
  //     );
  //   } else {
  //     arr.push(index);
  //     setIndexes(arr);
  //   }

  //   console.log(arr);
  // };

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
          categories.map((cat, index) => (
            <Accordion open={open} toggle={toggle}>
              <AccordionItem>
                <AccordionHeader targetId="id">
                  <Link to="#">{cat.categoryName}</Link>
                </AccordionHeader>
                {cat.childrens?.map((chl) => (
                  <AccordionBody accordionId="id">
                    <strong>{chl.name}</strong>
                    <code></code>
                  </AccordionBody>
                ))}
              </AccordionItem>
            </Accordion>
            // <ul className="product-cat-list" key={cat.id}>
            //   <li className="cat-item-parent">
            //     <>
            //       <Link to="#">{cat.categoryName}</Link>

            //       {cat.childrens?.map((chl) => (
            //         <>
            //           <div
            //             className="expandble-icon"
            //             onClick={() => handleOpenDrop(index)}
            //           >
            //             <AddBoxRoundedIcon />
            //           </div>
            //           <ul
            //             className={
            //               !indexes.includes(index) ? "drop list-unstyled" : null
            //             }
            //           >
            //             <li>{chl.name}</li>
            //           </ul>
            //         </>
            //       ))}
            //     </>
            //   </li>
            // </ul>
          ))}
      </aside>
    </div>
  );
};

export default ShopCategory;
