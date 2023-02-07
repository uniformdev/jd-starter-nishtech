import { NextPageContext } from 'next';
import { Context, ManifestV2, enableContextDevTools, enableDebugConsoleLogDrain } from '@uniformdev/context';
import { NextCookieTransitionDataStore } from '@uniformdev/context-next';
import manifest from './manifest.json';

/* Official documentation https://docs.uniform.app/integrations/content/contentstack/uniform-in-contentstack/tutorials/starter-nextjs#enable-edge-personalization*/

const createUniformContext = (serverContext?: NextPageContext) => {
  return new Context({
    defaultConsent: true,
    manifest: manifest as ManifestV2,
    transitionStore: new NextCookieTransitionDataStore({
      serverContext,
    }),
    plugins: [enableContextDevTools(), enableDebugConsoleLogDrain('debug')],
  });
};

export default createUniformContext;
