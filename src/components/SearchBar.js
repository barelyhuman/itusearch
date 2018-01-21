import React from "react";

const SearchBar = props => {
  return (
    <div className="searchbar" style={props.styles}>
      <input
        style={props.textStyle}
        placeholder="Search by Artist/Track Name"
        onChange={props.onChangeHandler}
        value={props.value}
      />
    </div>
  );
};

export default SearchBar;
