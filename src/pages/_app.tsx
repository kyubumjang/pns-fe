import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

import globalStyles from '@/styles/global';
import theme from '@/styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
