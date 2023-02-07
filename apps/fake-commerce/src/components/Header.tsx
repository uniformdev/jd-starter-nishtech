import { FC } from 'react';
import dynamic from 'next/dynamic';
import NavigationHeader from 'shared/src/components/NavigationHeader';
import NavigationLink from 'shared/src/components/NavigationLink';
import { AppNavigation, AppPages } from '@/constants';

// local storage based fake cart functionality loaded only on the client side
const ShoppingCartIcon = dynamic(() => import('shared/src/components/ShoppingCartIcon'), { ssr: false });

const Header: FC = () => (
  <NavigationHeader cartIcon={<ShoppingCartIcon cartUrl={AppPages.Cart} />}>
    {AppNavigation.map(({ title, link }) => (
      <NavigationLink key={title} title={title} link={link} />
    ))}
  </NavigationHeader>
);

export default Header;
