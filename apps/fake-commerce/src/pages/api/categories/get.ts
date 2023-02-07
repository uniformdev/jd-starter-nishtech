import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import { corsConfig } from '@/corsConfig';

import categories from '@/commerceData/categories.json';

export const getCategories = () => categories;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await NextCors(req, res, corsConfig);
  return res.status(200).json(getCategories());
};
