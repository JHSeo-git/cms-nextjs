import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global-styles';
import theme from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
