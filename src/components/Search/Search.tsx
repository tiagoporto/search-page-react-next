import React from 'react'
import { Button, TextField, CircularProgress, Stack } from '@mui/material'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useSnackbar } from 'notistack'
import { useLoadingContext } from '../../context/Loading'
import { getData } from './data/getData'

interface FormFields {
  query: string
}

export const Search = ({
  setSearchResults,
}: {
  setSearchResults: Function
}) => {
  const { isLoading, setIsLoading } = useLoadingContext()
  const { enqueueSnackbar } = useSnackbar()
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<FormFields>()

  const onSubmit: SubmitHandler<FormFields> = async ({ query }) => {
    setIsLoading(true)

    const { data, error } = await getData(query)
    setIsLoading(false)

    if (error) {
      enqueueSnackbar('Request error, try again!!!', {
        variant: 'error',
        anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
      })
    } else {
      setSearchResults(data)
    }
  }

  return (
    <Stack spacing={2} component="form" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('query', { required: true })}
        error={!!formErrors.query}
        disabled={isLoading}
        type="search"
        inputProps={{ 'aria-label': 'Search' }}
        placeholder="Search for videos, playlists, and blog posts."
        helperText={formErrors.query ? '*required' : ''}
      />

      <Button
        variant="contained"
        color="primary"
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? <CircularProgress size={25} /> : 'Search'}
      </Button>
    </Stack>
  )
}
