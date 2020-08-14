import React from "react";

function Searchbar(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          onChange={props.search}
          id="searchStyle"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </nav>
  );
}

export default Searchbar;
