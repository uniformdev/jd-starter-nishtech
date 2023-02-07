import { ProjectMapSubtree } from '@uniformdev/project-map';
import { Errors } from '../constants';

export const togglePageScroll = (isHiddenManual?: boolean): void => {
  const html = document.querySelector('html');
  if (!html) return;
  const isHidden = isHiddenManual ?? html.style.overflow === 'hidden';
  html.style.overflow = isHidden ? 'auto' : 'hidden';
};

export const getRandomBoolValue = (): boolean => Math.random() >= 0.5;

export const getFormattedSlug = (slug?: string | string[] | null): string => {
  if (!slug) throw new Error(Errors.CompositionSlugNotProvided);
  const slugString = Array.isArray(slug) ? slug.join('/') : slug;
  return slugString.startsWith('/') ? slugString : `/${slugString}`;
};

export const getAllPaths = (projectMapTree: ProjectMapSubtree | undefined): string[] => {
  if (!projectMapTree) return [];
  const paths: string[] = [];

  (function pushPath(projectMap: ProjectMapSubtree) {
    if (projectMap.type !== 'placeholder') paths.push(projectMap.path);
    const { children = [] } = projectMap || {};
    children.forEach(pushPath);
  })(projectMapTree);

  return paths;
};

export const buildUrl = (urls: string[]) => {
  const url = urls.join('/');
  return url.startsWith('/') ? url : `/${url}`;
};

export const prepareSearchParams = (searchParam: object) => {
  return Object.entries(searchParam).reduce<Record<string, string>>((acc, [key, value]) => {
    if (value) {
      acc[key] = String(value);
    }
    return acc;
  }, {});
};
