import { NextApiHandler } from 'next';
import getConfig from 'next/config';
import { IN_CONTEXT_EDITOR_QUERY_STRING_PARAM } from '@uniformdev/canvas';
import { getFormattedSlug } from 'shared/src/utils';
import { Errors } from 'shared/src/constants';
import { RestMethods } from '@/constants';

const {
  serverRuntimeConfig: { previewSecret },
} = getConfig();

const queryParamsToPreserve = [IN_CONTEXT_EDITOR_QUERY_STRING_PARAM];

const handler: NextApiHandler = async (req, res) => {
  const { method, query } = req;

  if (method !== RestMethods.Get) {
    return res.status(405).json({ message: Errors.MethodNotImplemented });
  }

  if (!query.slug) {
    return res.status(400).json({ message: Errors.CompositionSlugNotProvided });
  }

  // raw string of the incoming slug
  const slug = getFormattedSlug(query.slug);

  if (query.disable) {
    res.clearPreviewData();
    res.redirect(slug);
    return;
  }

  const isUsingPreviewSecret = Boolean(previewSecret);

  if (isUsingPreviewSecret && query.secret !== previewSecret) {
    return res.status(401).json({ message: Errors.InvalidPreviewToken });
  }

  // enable preview mode and redirect to the slug to preview
  res.setPreviewData({ yay: 'tacos' });

  const newQuery = new URLSearchParams();
  queryParamsToPreserve.forEach(param => {
    const paramValue = query[param];
    if (typeof paramValue === 'string') {
      newQuery.append(param, paramValue);
    }
  });
  const urlToRedirectTo = newQuery.toString() ? `${slug}?${newQuery.toString()}` : slug;

  res.redirect(urlToRedirectTo);
};

export default handler;
