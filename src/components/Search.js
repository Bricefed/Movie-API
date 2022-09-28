import React from "react";
import Filter from "./Filter";

const Search = () => {
  return (
    <div className="search-container">
      <form>
        <input type="text" id="search" autoFocus />
        <label htmlFor="search">Rechercher</label>
      </form>
      <Filter />
    </div>
  );
};

export default Search;
