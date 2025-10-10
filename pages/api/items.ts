// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../db/data.json'

type Items = typeof data

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Items>,
) {
  res.status(200).json(data)
}
