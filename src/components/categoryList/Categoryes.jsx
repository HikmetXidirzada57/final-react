import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import "./category.scss";


const Categoryes = () => {
    const [isactive, setActive] = useState("true");

    const clickToggle=()=>{
        
       setActive(!isactive)
    }
  return (
    <div className="box-category">
    <div className="d-flex justify-content-around align-items-center">
      <span className="cat-nav" onClick={()=>clickToggle(setActive)}> 
        <ListOutlinedIcon  className="menuicon"/>
      </span>
      <span className="veritical-menu">All Categories</span>
    </div>
    {!isactive && 
       <div className="sidebar-category">
       <ul className="sidebar-drop m-0 p-0">
         <li className="side-li">
           <Link to="#" className="side">
             Applicanes
             <ArrowForwardIosOutlinedIcon className="arrow-right"/>
             </Link>
             <div className="sidebar-dc">
               <ul className="p-0 m-0">
                   <div className="box">
                   <div className="d-flex">
                   <li>
                     <Link className="titles" to="#">Blenders</Link>
                     <ul className="p-0 m-0">
                       <li>
                         <Link to="#">Blender Accesiories</Link>
                       </li>
                       <li>
                         <Link to="#">Blender Accesiories</Link>
                       </li>
                       <li>
                         <Link to="#">Blender Accesiories</Link>
                       </li>
                     </ul>
                   </li>
                   <li>
                     <Link className="titles" to="#">Coffee Makers</Link>
                     <ul>
                       <li>
                         <Link to="#">Blender Accesiories</Link>
                       </li>
                       <li>
                         <Link to="#">Blender Accesiories</Link>
                       </li>
                       <li>
                         <Link to="#">Blender Accesiories</Link>
                       </li>
                     </ul>
                   </li>
                   <li>
                     <Link className="titles" to="#">Espresso Makiners</Link>
                     <ul>
                       <li>
                         <Link to="#">Blender Accesiories</Link>
                       </li>
                       <li>
                         <Link to="#">Blender Accesiories</Link>
                       </li>
                       <li>
                         <Link to="#">Blender Accesiories</Link>
                       </li>
                     </ul>
                   </li>
                   <li>
                     <Link className="titles" to="#">Food Chappers</Link>
                     <ul>
                       <li>
                         <Link to="#">Blender Accesiories</Link>
                       </li>
                       <li>
                         <Link to="#">Blender Accesiories</Link>
                       </li>
                       <li>
                         <Link to="#">Blender Accesiories</Link>
                       </li>
                     </ul>
                   </li>
                 </div>
                   </div>
                <div className="box">
                <div className="d-flex">
                 <li>
                     <Link className="titles" to="#">Blenders</Link>
                     <ul>
                       <li>
                         <Link to="#">Blender Accesiories</Link>
                       </li>
                       <li>
                         <Link to="#">Blender Accesiories</Link>
                       </li>
                       <li>
                         <Link to="#">Blender Accesiories</Link>
                       </li>
                     </ul>
                   </li>
                   <li>
                     <Link className="titles" to="#">Coffee Makers</Link>
                     <ul>
                       <li>
                         <Link to="#">Blender Accesiories</Link>
                       </li>
                       <li>
                         <Link to="#">Blender Accesiories</Link>
                       </li>
                       <li>
                         <Link to="#">Blender Accesiories</Link>
                       </li>
                     </ul>
                   </li>
                   <li>
                     <Link className="titles" to="#">Espresso Makiners</Link>
                     <ul>
                       <li>
                         <Link to="#">Blender Accesiories</Link>
                       </li>
                       <li>
                         <Link to="#">Blender Accesiories</Link>
                       </li>
                       <li>
                         <Link to="#">Blender Accesiories</Link>
                       </li>
                     </ul>
                   </li>
                   <li>
                     <Link className="titles" to="#">Food Chappers</Link>
                     <ul>
                       <li>
                         <Link to="#">Blender Accesiories</Link>
                       </li>
                       <li>
                         <Link to="#">Blender Accesiories</Link>
                       </li>
                       <li>
                         <Link to="#">Blender Accesiories</Link>
                       </li>
                     </ul>
                   </li>
                 </div>
                </div>
              
               </ul>
             </div>
         
         </li>
         <li>
           <Link to="#" className="side">Bakeware</Link>
         </li>
         <li>
           <Link to="#" className="side">Coffe Maker</Link>
         </li>
         <li>
           <Link to="#" className="side">Cookware</Link>
         </li>
       </ul>
     </div>  }
 
  </div>
  );
};

export default Categoryes;
