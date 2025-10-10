import React from 'react'
import { Skeleton, Container } from '@mui/material'

export const MainLoading = () => {
  return (
    <>
      <Skeleton variant="text" sx={{ fontSize: '2rem', mb: 3 }} width={500} />

      {Array.from({ length: 3 }).map((_, index) => (
        <Container
          key={`item-${index}`}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            mb: 2,
          }}
          disableGutters
        >
          <Skeleton variant="circular" width={40} height={40} />

          <Container>
            <Skeleton variant="text" width="70%" sx={{ mb: 1 }} />

            <Skeleton variant="rectangular" height={80} />
          </Container>
        </Container>
      ))}
    </>
  )
}
