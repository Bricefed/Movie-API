import React from "react";

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
    </div>
  );
};

export default Search;
