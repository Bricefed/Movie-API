import React from "react";
import Filter from "./Filter";

const Search = ({ setSearch }) => {
  return (
    <div className="search-container">
      <form>
        <input
          type="text"
          id="search"
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />
        <label htmlFor="search">Rechercher</label>
      </form>
      <Filter />
    </div>
  );
};

export default Search;
