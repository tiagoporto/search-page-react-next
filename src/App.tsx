import React from 'react'
import { CssBaseline } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Page } from './Page'
import { LoadingProvider } from './context/Loading'

export const App = () => {
  return (
    <>
      <CssBaseline />

      <ErrorBoundary>
        <SnackbarProvider maxSnack={2}>
          <LoadingProvider>
            <Page />
          </LoadingProvider>
        </SnackbarProvider>
      </ErrorBoundary>
    </>
  )
}
