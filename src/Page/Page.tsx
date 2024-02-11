import React, { useState } from 'react';
import { LinearProgress, Container } from '@mui/material';
import { Header } from '../components/Header';
import { Main, MainProps } from '../components/Main';
import { useLoadingContext } from '../context/Loading';

export const Page = () => {
  const { isLoading } = useLoadingContext();
  const [searchResults, setSearchResults] = useState<
    MainProps['searchResults'] | undefined
  >(undefined);

  return (
    <>
      {isLoading && <LinearProgress title="Fetching" />}

      <Container>
        <Header setSearchResults={setSearchResults} />

        <Main searchResults={searchResults} />
      </Container>
    </>
  );
};
