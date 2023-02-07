import { AppPages as BaseAppPages } from 'shared/src/constants';

export const AppPages = {
  ...BaseAppPages,
  LandingPage: '/landing-page',
  ContactUs: '/contact-us',
};

export const AppNavigation = [
  {
    link: AppPages.Home,
    title: 'Home',
  },
  {
    link: AppPages.LandingPage,
    title: 'Landing Page',
  },
  {
    link: AppPages.ContactUs,
    title: 'Contact us',
  },
];

export enum AppPageTypes {
  Page = 'page',
}

export enum RestMethods {
  Get = 'GET',
  Post = 'POST',
}
