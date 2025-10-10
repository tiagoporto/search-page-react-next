import { CssBaseline } from '@mui/material'
import { Providers } from './providers'
import type { ReactNode } from 'react'
import { Roboto } from 'next/font/google'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Search Page in React/NextJs</title>
        <meta name="description" content="Search Page example in react" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>

      <body>
        <CssBaseline />
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
