import React, { useState } from "react";
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/Search";

function Search({ search, handleChange }) {
  return (
    <div className="search-flex">
      <SearchRoundedIcon sx={{ color: "var(--grey)", fontSize: "1.3rem" }} />
      <input
        className="search-input"
        placeholder="Search"
        value={search}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default Search;