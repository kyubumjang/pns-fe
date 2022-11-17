import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

import Layout from '@/layouts/layout';
import globalStyles from '@/styles/global';
import theme from '@/styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

export default MyApp;
