import React from 'react';
import { Button, TextField, CircularProgress } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { getData } from './data/getData';
import { useLoadingContext } from '../../context/Loading';

interface FormFields {
  query: string;
}

export const Search = ({
  setSearchResults,
}: {
  setSearchResults: Function;
}) => {
  const { isLoading, setIsLoading } = useLoadingContext();
  const { register, handleSubmit } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async ({ query }) => {
    setIsLoading(true);

    const data = await getData(query);

    setIsLoading(false);
    setSearchResults(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('query')}
        disabled={isLoading}
        type="search"
        inputProps={{ 'aria-label': 'Search' }}
        required
        placeholder="Search for videos, playlists, and blog posts."
      />

      <Button
        variant="contained"
        color="primary"
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? <CircularProgress /> : 'Search'}
      </Button>
    </form>
  );
};
