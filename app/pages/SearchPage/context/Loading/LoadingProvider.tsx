import type { PropsWithChildren } from 'react'
import { useState } from 'react'

import { LoadingContext } from './LoadingContext'

export const LoadingProvider = ({ children }: PropsWithChildren<object>) => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}
