import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
            rel="stylesheet"
          />

          <meta property="og:image" content="/assets/images/user-image.png" />

          <meta property="og:site_name" content="Mardeson Pereira" />
          <meta property="og:title" content="Desenvolvedor full-stack" />
          <meta
            property="og:description"
            content="Olá, sou desenvolvedor de software, trabalho na criação de aplicativos, web-sites e back-end utilizando uma das melhores tecnologias o JavaScrip."
          />

          <meta property="og:type" content="website" />
          <meta property="og:image:type" content="image/png" />

          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="300" />

          <noscript>
            <style>
              {
                '[data-aos] { opacity: 1 !important; transform: none !important; }'
              }
            </style>
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
