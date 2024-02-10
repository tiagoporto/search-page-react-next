import React, { useState } from 'react';
import { LinearProgress } from '@mui/material';
import { Header } from '../components/Header';
import { Main, MainProps } from '../components/Main';
import { useLoadingContext } from '../context/Loading';

export const Page = () => {
  const { isLoading } = useLoadingContext();
  const [searchResults, setSearchResults] = useState<
    MainProps['searchResults'] | undefined
  >(undefined);

  return (
    <div className="App">
      {isLoading && <LinearProgress title="Fetching" />}

      <Header setSearchResults={setSearchResults} />

      <Main searchResults={searchResults} />
    </div>
  );
};
