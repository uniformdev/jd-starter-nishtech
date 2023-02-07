import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import { getProductsByIds } from 'shared/src/utils/products';
import { corsConfig } from '@/corsConfig';

import productsHashCache from '@/commerceData/products.json';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await NextCors(req, res, corsConfig);
  const { ids } = req.query;
  const products = getProductsByIds(productsHashCache, ids as string[]);
  return res.status(200).json(products);
};
