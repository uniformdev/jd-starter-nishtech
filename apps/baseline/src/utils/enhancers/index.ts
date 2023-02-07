import { compose, EnhancerBuilder } from '@uniformdev/canvas';
import {
  CANVAS_CONTENTFUL_MULTI_PARAMETER_TYPES,
  CANVAS_CONTENTFUL_PARAMETER_TYPES,
  CANVAS_CONTENTFUL_QUERY_PARAMETER_TYPES,
} from '@uniformdev/canvas-contentful';
import { contentfulModelConverter } from '@/utils/enhancers/converters/contentfulModelConverter';
import { contentfulConfigured } from '@/utils/contentful';
import { contentfulEnhancer } from './enhancers/contentful/contentfulEnhancer';
import { contentfulMultiEnhancer } from './enhancers/contentful/contentfulMultiEnhancer';
import { contentfulQueryEnhancer } from './enhancers/contentful/contentfulQueryEnhancer';

const nullEnhancer = () => {
  console.log('WARN: null enhancer called');
};

const getEnhancers = (locale: string): EnhancerBuilder => {
  let enhancingLocale = locale;
  if (!enhancingLocale) {
    enhancingLocale = process.env.CONTENTFUL_LOCALE || 'en-US';
    console.log('USING LOCALE ' + enhancingLocale);
  }

  return new EnhancerBuilder()
    .parameterType(
      CANVAS_CONTENTFUL_PARAMETER_TYPES,
      contentfulConfigured() ? compose(contentfulEnhancer(enhancingLocale), contentfulModelConverter) : nullEnhancer
    )
    .parameterType(
      CANVAS_CONTENTFUL_MULTI_PARAMETER_TYPES,
      contentfulConfigured()
        ? compose(contentfulMultiEnhancer(enhancingLocale), contentfulModelConverter)
        : nullEnhancer
    )
    .parameterType(
      CANVAS_CONTENTFUL_QUERY_PARAMETER_TYPES,
      contentfulConfigured()
        ? compose(contentfulQueryEnhancer(enhancingLocale), contentfulModelConverter)
        : nullEnhancer
    );
};

export default getEnhancers;
