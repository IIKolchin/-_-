import '../styles/globals.css';
import '../vendor/fonts/fonts.css';
import type { AppProps } from 'next/app';
import { wrapper } from '../store/store';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
