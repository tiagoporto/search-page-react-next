import React from 'react';
import { Search } from '../Search';
import { Container, Typography } from '@mui/material';

export const Header = ({
  setSearchResults,
}: {
  setSearchResults: Function;
}) => {
  return (
    <Container component="header" sx={{ my: 4 }} disableGutters maxWidth="md">
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        align="center"
        color="text.secondary"
      >
        Search UI Challenge
      </Typography>

      <Search setSearchResults={setSearchResults} />
    </Container>
  );
};
