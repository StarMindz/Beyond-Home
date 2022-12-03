import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearch } from '../redux/library/librarySlice';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const submitForm = (element) => {
    element.preventDefault();
    setSearchTerm('');
    dispatch(fetchSearch(searchTerm));
  };

  const searchBar = (
    <div className="form">
      <form onSubmit={submitForm}>
        <input className="searchBar" type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </form>
    </div>
  );

  return searchBar;
};

export default SearchBar;