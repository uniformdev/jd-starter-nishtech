import React from 'react';
import { NextPage } from 'next';
import { UniformContext } from '@uniformdev/context-react';
import { UniformAppProps } from '@uniformdev/context-next';
import NavigationFooter from 'shared/src/components/NavigationFooter';
import { createUniformContext } from '../context/createUniformContext';
import Header from '@/components/Header';

import '@/styles/globals.scss';
import 'tailwindcss/tailwind.css';

import 'shared/src/components/canvas/baseline';
import 'ui/baseline';

const clientContext = createUniformContext();

export const App: NextPage<UniformAppProps> = ({ Component, pageProps, serverUniformContext }: UniformAppProps) => (
  <UniformContext context={serverUniformContext ?? clientContext} outputType={'edge'}>
    <Header />
    <Component {...pageProps} />
    <NavigationFooter />
  </UniformContext>
);

export default App;
