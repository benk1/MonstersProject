import React from 'react';
const SearchBox = ({handleChange,placeholder}) => {
  return (
   
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      name='searchInput'
      onChange={handleChange}
      
    />
  )
};

export default SearchBox;
