import React from 'react';
import { CssBaseline } from '@mui/material';

import { ErrorBoundary } from './components/ErrorBoundary';
import { Page } from './Page';
import { LoadingProvider } from './context/Loading';

export const App = () => {
  return (
    <ErrorBoundary>
      <LoadingProvider>
        <CssBaseline />

        <Page />
      </LoadingProvider>
    </ErrorBoundary>
  );
};
