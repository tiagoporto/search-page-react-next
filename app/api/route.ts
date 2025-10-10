// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextRequest } from 'next/server'
import Fuse from 'fuse.js'

import data from '../../db/data.json'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')

  let results = data

  if (query) {
    const options = {
      keys: ['title', 'description'],
      threshold: 0.4, // Adjust threshold for more or less strict matching
    }
    const fuse = new Fuse(data, options)
    results = fuse.search(query).map(({ item }) => item)
  }

  return Response.json(results)
}
