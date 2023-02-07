import React from 'react';
import { NextPage } from 'next';
import { UniformContext } from '@uniformdev/context-react';
import { UniformAppProps } from '@uniformdev/context-next';
import NavigationFooter from 'shared/src/components/NavigationFooter';
import ShoppingCartModal from 'shared/src/components/ShoppingCartModal';
import createUniformContext from '@/context/createUniformContext';
import Header from '@/components/Header';

import '@/styles/globals.scss';
import 'tailwindcss/tailwind.css';

import 'shared/src/components/canvas/fake-commerce';
import 'ui/fake-commerce';

const clientContext = createUniformContext();

export const App: NextPage<UniformAppProps> = ({ Component, pageProps }) => (
  <UniformContext context={clientContext}>
    <Header />
    <Component {...pageProps} />
    <ShoppingCartModal />
    <NavigationFooter />
  </UniformContext>
);

export default App;
