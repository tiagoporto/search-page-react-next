import React from 'react';
import { Search } from '../Search';

export const Header = ({
  setSearchResults,
}: {
  setSearchResults: Function;
}) => {
  return (
    <header>
      <h1>Search UI Challenge</h1>
      <Search setSearchResults={setSearchResults} />
    </header>
  );
};
