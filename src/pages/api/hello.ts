// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string;
  theme: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const theme = req.cookies.theme ? req.cookies.theme : 'light'

  res.status(200).json({ name: 'John Doe', theme: theme})
}
