import dynamic from 'next/dynamic';
import React, { FC } from 'react';
import Head from 'next/head';
import { UniformComposition, UniformSlot, createUniformApiEnhancer } from '@uniformdev/canvas-react';
import { GoogleAnalyticsGtag } from '../components/TrackersProvider';

const CommonContainer: FC<Type.LayoutProps> = ({ composition, preview }) => {
  // Docs: https://docs.uniform.app/reference/packages/uniformdev-canvas-react#createuniformapienhancer
  const contextualEditingEnhancer = createUniformApiEnhancer({
    apiUrl: '/api/visual-canvas-enhance',
  });

  const { pageMetaTitle, pageMetaDescription } = composition?.parameters || {};
  const title = pageMetaTitle?.value as string;
  const description = pageMetaDescription?.value as string;

  const renderUniformContextDevTools = () => {
    if (!Boolean(preview)) return null;
    // Docs: https://docs.uniform.app/guides/tools/context-devtools#display-context-devtools
    const UniformContextDevTools = dynamic(() => import('../components/UniformContextDevTools'), { ssr: false });
    return <UniformContextDevTools />;
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="version" content={title} />
        <meta name="description" property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta property="og:description" content={description} />
        <GoogleAnalyticsGtag />
      </Head>
      <div>
        {Boolean(composition) && (
          // Docs: https://docs.uniform.app/reference/packages/uniformdev-canvas-react#composition
          <UniformComposition
            data={composition}
            behaviorTracking="onLoad"
            contextualEditingEnhancer={contextualEditingEnhancer}
          >
            {/* Docs: https://docs.uniform.app/reference/packages/uniformdev-canvas-react#slot */}
            <UniformSlot name="content" />
          </UniformComposition>
        )}
        {renderUniformContextDevTools()}
      </div>
    </>
  );
};

export default CommonContainer;
