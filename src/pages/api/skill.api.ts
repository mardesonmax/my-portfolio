import { NextApiRequest, NextApiResponse } from 'next';
import { skills } from '~/services/skills';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(skills);
  }
}
