import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { fetchSearch } from '../redux/library/librarySlice';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const submitForm = (element) => {
    element.preventDefault();
    dispatch(fetchSearch(searchTerm));
  };

  const searchBar = (
    <div className="form">
      <form className="libraryForm" onSubmit={submitForm}>
        <input className="searchBar" type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <BsSearch className="searchIcon" onClick={submitForm} />
      </form>
    </div>
  );

  return searchBar;
};

export default SearchBar;
