import { GetStaticProps, GetStaticPaths } from 'next';
import CommonContainer from 'shared/src/containers/CommonContainer';
import { getCompositionBySlug } from 'shared/src/utils/canvas';
import { getFakeCommerceEnhancers } from 'shared/src/enhancers/fakeCommerce';
import { getProductIdByProductSlug } from 'shared/src/utils/products';
import { ProductPagesPrefixes } from 'shared/src/constants';
import { InternalCompositionSlugs } from '@/constants';
import { getProducts } from '@/pages/api/products/get';

import productsHashCache from '@/commerceData/products.json';

export const getStaticProps: GetStaticProps<Type.Context> = async context => {
  const { preview, params } = context;
  const { slug } = params || {};

  const productId = getProductIdByProductSlug(slug as string);

  return getCompositionBySlug(
    InternalCompositionSlugs.ProductDetails,
    context,
    getFakeCommerceEnhancers(productsHashCache, { productId })
  )
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
  const products = getProducts();

  const paths = products
    ? products.map((product: Type.Product) => `${ProductPagesPrefixes.ProductDetailsPage}/${product.slug}`)
    : [];

  return { paths, fallback: false };
};

export default CommonContainer;
