import { GetStaticProps, GetStaticPaths } from 'next';
import { getFakeCommerceEnhancers } from 'shared/src/enhancers/fakeCommerce';
import CommonContainer from 'shared/src/containers/CommonContainer';
import { getFormattedSlug } from 'shared/src/utils';
import { ProductPagesPrefixes } from 'shared/src/constants';
import { getPathsFromProjectMap, getCompositionBySlug } from 'shared/src/utils/canvas';
import { AppPages } from '@/constants';

import productsHashCache from '@/commerceData/products.json';

export const getStaticProps: GetStaticProps<Type.Context> = async context => {
  const { preview, params } = context;
  const { slug: initialSlug = AppPages.Home } = params || {};

  const slug = getFormattedSlug(initialSlug);

  return getCompositionBySlug(slug, context, getFakeCommerceEnhancers(productsHashCache))
    .then(composition => ({
      props: {
        composition,
        preview: Boolean(preview),
        revalidate: Number.MAX_SAFE_INTEGER,
      },
    }))
    .catch(() => ({ notFound: true }));
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPathsFromProjectMap({ skipPath: ProductPagesPrefixes.ProductListPage });

  return { paths, fallback: false };
};

export default CommonContainer;
