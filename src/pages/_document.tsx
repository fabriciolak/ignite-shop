import { Html, Head, Main, NextScript } from 'next/document';

import { getCssText } from '@/styles/index';

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <meta name="description" content="Um pequeno e-commerce de camisetas" />
        <meta
          name="keywords"
          content="Ignite shop, rocketseat projetos, fabriciolak, ignite, next"
        />
        <meta name="author" content="Fabrício Passos" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
