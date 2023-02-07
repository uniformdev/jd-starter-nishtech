import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import { enableNextSsr } from '@uniformdev/context-next';
import { createUniformContext } from '../context/createUniformContext';

class MyDocument extends Document {
  // IMPORTANT: needed to enable the SSR elements
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const serverTracker = createUniformContext(ctx);
    enableNextSsr(ctx, serverTracker);
    return await Document.getInitialProps(ctx);
  }

  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          {/* Adobe Fonts connections https://helpx.adobe.com/fonts/using/embed-codes.html */}
          <link rel="stylesheet" href="https://use.typekit.net/amw0suj.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
