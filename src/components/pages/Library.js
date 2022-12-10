import React from 'react';
import SearchBar from '../searchBar';
import LibraryComponent from '../libraryComponent';

const Library = () => {
  const home = (
    <div className="libraryContainer">
      <SearchBar />
      <LibraryComponent />
    </div>
  );
  return home;
};

export default Library;
