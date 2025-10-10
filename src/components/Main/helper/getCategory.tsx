import {
  QueueMusicSharp,
  VideocamSharp,
  EditNoteSharp,
} from '@mui/icons-material'
import { Skeleton } from '@mui/material'
import type { SearchList } from '../../Search/data/getData'

export const getCategory = (category: SearchList['category']) => {
  switch (category) {
    case 'VIDEOS':
      return <VideocamSharp color="action" titleAccess="Video Category" />
    case 'PLAYLISTS':
      return <QueueMusicSharp color="action" titleAccess="Playlist Category" />
    case 'BLOG_POSTS':
      return <EditNoteSharp color="action" titleAccess="Blog Post Category" />
    default:
      return <Skeleton variant="circular" width={40} height={40} />
  }
}
