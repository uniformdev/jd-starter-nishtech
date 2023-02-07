import { GetStaticProps, GetStaticPaths } from 'next';
import CommonContainer from 'shared/src/containers/CommonContainer';
import { getPathsFromProjectMap, getCompositionBySlug } from 'shared/src/utils/canvas';
import { getAvailableSubCategoriesPaths } from 'shared/src/utils/products';
import { getFakeCommerceEnhancers } from 'shared/src/enhancers/fakeCommerce';
import { ProductPagesPrefixes } from 'shared/src/constants';
import { InternalCompositionSlugs } from '@/constants';
import { getCategories } from '@/pages/api/categories/get';

import productsHashCache from '@/commerceData/products.json';

const categories = getCategories();

export const getStaticProps: GetStaticProps<Type.Context> = async context => {
  const { preview, params } = context;
  const { category: queryCategory, subcategory: querySubCategory } = params || {};

  const category = String(queryCategory);
  const subCategory = String(querySubCategory);

  return getCompositionBySlug(
    `${InternalCompositionSlugs.ProductListingPrefix}/${category}`,
    context,
    getFakeCommerceEnhancers(productsHashCache, { category, categories, subCategory })
  )
    .then(composition => ({
      props: {
        composition,
        preview: Boolean(preview),
        key: `${category}-${subCategory}`,
        revalidate: Number.MAX_SAFE_INTEGER,
      },
    }))
    .catch(() => ({ notFound: true }));
};

export const getStaticPaths: GetStaticPaths = async () => {
  const baseCategoriesPaths = await getPathsFromProjectMap({ path: ProductPagesPrefixes.ProductListPage });
  const paths = getAvailableSubCategoriesPaths(baseCategoriesPaths, categories);

  return {
    paths,
    fallback: false,
  };
};

export default CommonContainer;
