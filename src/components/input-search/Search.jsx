import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import './search.scss'
const Search = () => {
  return (
    <div className="serach-input">
      <input
        // ref={inputRef}
        type="text"
        className="input form-control"
        placeholder="search..."
        aria-describedby="basic-addon2"
        // onChange={(e) => setSearchTerm(e.target.value)}
      />
      <span className="input btn-dark" id="basic-addon2">
        <SearchIcon sx={{ color: "#fff" }} />
      </span>
    </div>
  );
};

export default Search;
