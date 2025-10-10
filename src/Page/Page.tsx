import React, { Suspense, lazy, useState } from 'react'
import { LinearProgress, Container } from '@mui/material'
import { Header } from '../components/Header'
import type { MainProps } from '../components/Main'
import { useLoadingContext } from '../context/Loading'

export const Page = () => {
  const Main = lazy(() => import('../components/Main/Main'))
  const { isLoading } = useLoadingContext()
  const [searchResults, setSearchResults] = useState<
    MainProps['searchResults'] | undefined
  >(undefined)

  return (
    <>
      {isLoading && <LinearProgress title="Fetching" />}

      <Container>
        <Header setSearchResults={setSearchResults} />

        <Suspense>
          <Main searchResults={searchResults} />
        </Suspense>
      </Container>
    </>
  )
}
