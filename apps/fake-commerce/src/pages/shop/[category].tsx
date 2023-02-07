import { GetStaticProps, GetStaticPaths } from 'next';
import CommonContainer from 'shared/src/containers/CommonContainer';
import { getPathsFromProjectMap, getCompositionBySlug } from 'shared/src/utils/canvas';
import { getFakeCommerceEnhancers } from 'shared/src/enhancers/fakeCommerce';
import { ProductPagesPrefixes } from 'shared/src/constants';
import { InternalCompositionSlugs } from '@/constants';
import { getCategories } from '@/pages/api/categories/get';

import productsHashCache from '@/commerceData/products.json';

const categories = getCategories();

export const getStaticProps: GetStaticProps<Type.Context> = async context => {
  const { preview, params } = context;
  const { category: queryCategory } = params || {};

  const category = String(queryCategory);

  return getCompositionBySlug(
    `${InternalCompositionSlugs.ProductListingPrefix}/${category}`,
    context,
    getFakeCommerceEnhancers(productsHashCache, { category, categories })
  )
    .then(composition => ({
      props: {
        composition,
        key: category,
        preview: Boolean(preview),
        revalidate: Number.MAX_SAFE_INTEGER,
      },
    }))
    .catch(() => ({ notFound: true }));
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPathsFromProjectMap({ path: ProductPagesPrefixes.ProductListPage });

  return {
    paths,
    fallback: false,
  };
};

export default CommonContainer;
