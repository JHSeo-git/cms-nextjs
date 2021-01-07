import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { SideMenuProvider } from '../lib/contexts/SideMenuContext';
import GlobalStyles from '../styles/global-styles';
import theme from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {Component.name === 'Admin' ? (
        <Component {...pageProps} />
      ) : (
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <SideMenuProvider>
            <Component {...pageProps} />
          </SideMenuProvider>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
