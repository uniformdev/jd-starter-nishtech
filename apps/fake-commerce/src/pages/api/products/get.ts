import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import { getProductSearchResult } from 'shared/src/utils/products';
import { prepareSearchParams } from 'shared/src/utils';
import { corsConfig } from '@/corsConfig';

import productsHashCache from '@/commerceData/products.json';

export const getProducts = () => Object.values(productsHashCache);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await NextCors(req, res, corsConfig);
  const searchParams = prepareSearchParams(req.query);

  const searchResult = getProductSearchResult(getProducts(), searchParams);

  return res.status(200).json(searchResult);
};
