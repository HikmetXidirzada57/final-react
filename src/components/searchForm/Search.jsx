import React, { useCallback, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./search.scss";
import axios from "axios";
import { API_URL } from "../../link/URL";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CachedIcon from '@mui/icons-material/Cached';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProduct] = useState([]);
  const getProducts = useCallback(async () => {
    if (searchTerm !== "") {
      const { data } = await axios.post(`${API_URL}/product/filter`,{ q: searchTerm },
        {
          headers: {
            "Content-Type": "application/json-patch+json",
          },
        }
      );
      setProduct(data.products);
    } else {
      setProduct([]);
    }
  }, [searchTerm]);
  console.log(products);
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  useEffect(() => {
    inputRef.current.addEventListener("focus", () => {
      resultRef.current.classList.add("active");
    });

    inputRef.current.addEventListener("focusout", () => {
      setTimeout(() => {
        resultRef.current.classList.remove("active");
      }, 200);
    });
  }, []);
  return (
    <div className="form">
      <form action="" className="d-flex">
        <input
          type="text"
          placeholder="Search item"
          ref={inputRef}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button over-button">Search</button>
        <div className="search-icon">
          <SearchIcon />
        </div>

      </form>
      <div className="list-result"
         ref={resultRef}
         >
          <ul className="list-unstyled m-0 p-0">
            {products?.map((p) => (
              <li key={p.id}>
                <div>
                <CachedIcon/>
                <Link className="mx-2" to={`/product/${p.id}`}>{p.name}</Link> 
                </div>
                <div className="search-image"><img className="img-fluid" src={p.photoUrl} alt="" /></div>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default Search;
