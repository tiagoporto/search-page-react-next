'use client'

import { useEffect } from 'react'
import { Typography, Button, Container } from '@mui/material'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" component="p" gutterBottom>
        Something went wrong...
      </Typography>

      <Button
        onClick={() => {
          reset()
        }}
        variant="contained"
      >
        Reload
      </Button>
    </Container>
  )
}
