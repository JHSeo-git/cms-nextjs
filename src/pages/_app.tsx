import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import { SideMenuProvider } from '../lib/contexts/SideMenuContext';
import GlobalStyles from '../styles/global-styles';
import theme from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <ThemeProvider theme={theme}>
      {pathname !== '/admin' && <GlobalStyles />}
      <SideMenuProvider>
        <Component {...pageProps} />
      </SideMenuProvider>
    </ThemeProvider>
  );
}

export default App;
