import React, { useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';

const SearchBar = ({ setSearchText }) => {
  const changeHandler = (event) => {
    setSearchText(event.target.value);
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 300)
  , []);

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    }
  }, []);

  return (
    <div>
      <input type="text" onChange={debouncedChangeHandler} placeholder="Enter a location..."/>
    </div>
  )
};

export default SearchBar;
