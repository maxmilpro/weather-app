import React from 'react';

const SearchBar = ({ setSearchText }) => {
  const changeHanlder = event => {
    setSearchText(event.target.value);
  }

  return (
    <div>
      <input type="text" onChange={changeHanlder} placeholder="Enter a location..."/>
    </div>
  )
};

export default SearchBar;
