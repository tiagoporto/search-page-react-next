import { Search } from '../Search'
import { Container, Typography } from '@mui/material'
import type { SearchList } from '../Search/data/getData'

export const Header = ({
  setSearchResults,
}: {
  setSearchResults: (data: SearchList[]) => void
}) => {
  return (
    <Container component="header" sx={{ my: 4 }} disableGutters maxWidth="md">
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        align="center"
        color="text.secondary"
      >
        Search UI
      </Typography>

      <Search setSearchResults={setSearchResults} />
    </Container>
  )
}
