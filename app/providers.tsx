'use client'
import { SnackbarProvider } from 'notistack'
import { LoadingProvider } from './pages/SearchPage/context/Loading'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SnackbarProvider maxSnack={2}>
      <LoadingProvider>{children}</LoadingProvider>
    </SnackbarProvider>
  )
}
