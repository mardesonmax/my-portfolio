import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import 'aos/dist/aos.css';
import AOS from 'aos';

import GlobalStyles from '~/styles/global';
import { defaultTheme } from '~/styles/themes/default';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 400,
    });
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
