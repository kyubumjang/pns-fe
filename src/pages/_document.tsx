import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html>
    <title>생각을 정리할 땐 Ambition</title>
    <Head>
      <link
        rel='shortcut icon'
        href='/favicon.ico'
      />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@100;200;300;400;500;600;700&display=swap'
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
