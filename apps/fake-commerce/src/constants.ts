import { AppPages as BaseAppPages, ProductPagesPrefixes } from 'shared/src/constants';

export const AppPages = {
  ...BaseAppPages,
  CoffeeMakers: `${ProductPagesPrefixes.ProductListPage}/coffee-makers`,
  Beans: `${ProductPagesPrefixes.ProductListPage}/beans`,
  Cart: `/cart`,
};

export const InternalCompositionSlugs = {
  ProductDetails: '/product-detail',
  ProductListingPrefix: ProductPagesPrefixes.ProductListPage,
};

export const AppNavigation = [
  {
    link: AppPages.Home,
    title: 'Home',
  },
  {
    link: AppPages.CoffeeMakers,
    title: 'Coffee Makes',
  },
  {
    link: AppPages.Beans,
    title: 'Beans',
  },
];

export enum RestMethods {
  Get = 'GET',
  Post = 'POST',
}
