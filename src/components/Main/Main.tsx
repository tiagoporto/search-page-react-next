import React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemIcon,
  Link,
} from '@mui/material'

import type { SearchList } from '../Search/data/getData'
import { useLoadingContext } from '../../context/Loading'
import { MainLoading } from './MainLoading'
import { getCategory } from './helper/getCategory'

export interface MainProps {
  searchResults?: SearchList[]
}

const Main = ({ searchResults }: MainProps) => {
  const { isLoading } = useLoadingContext()

  return isLoading ? (
    <MainLoading />
  ) : (
    <>
      {!!searchResults?.length && (
        <>
          <Typography variant="h4" component="h2" color="text.secondary">
            Search Items
          </Typography>

          <List>
            {searchResults.map((result) => (
              <ListItem key={result.id}>
                <ListItemIcon>{getCategory(result.category)}</ListItemIcon>

                <ListItemText
                  primary={
                    <Link
                      href={result.url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {result.title}
                    </Link>
                  }
                  secondary={result.description}
                />
              </ListItem>
            ))}
          </List>
        </>
      )}

      {searchResults?.length === 0 && (
        <Typography>There are no results matching your query.</Typography>
      )}
    </>
  )
}

export default Main
