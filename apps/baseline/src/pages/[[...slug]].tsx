import { GetStaticPaths, GetStaticProps } from 'next';
import CommonContainer from 'shared/src/containers/CommonContainer';
import { getPathsFromProjectMap, getCompositionBySlug } from 'shared/src/utils/canvas';
import { getFormattedSlug } from 'shared/src/utils';
import { AppPages } from '@/constants';
import getEnhancers from '../utils/enhancers';

export const getStaticProps: GetStaticProps<Type.Context> = async context => {
  const { preview, params } = context;
  const { slug: initialSlug = AppPages.Home } = params || {};

  const slug = getFormattedSlug(initialSlug);
  const locale = 'en-US';

  return getCompositionBySlug(slug, context, getEnhancers(locale))
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
  const paths = await getPathsFromProjectMap();
  return { paths, fallback: false };
};

export default CommonContainer;
