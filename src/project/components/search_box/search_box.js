import React from "react";
import "./search_box.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        //onChnage takes a callback function with a parameter that repressents a synthetic event (e here). e.target.value represents the value that is typed into the search bar
        onChange={handleChange}
      />
    </>
  );
};
