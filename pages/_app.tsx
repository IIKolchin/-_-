import '../styles/globals.css';
import '../vendor/fonts/fonts.css';
import type { AppProps } from 'next/app';
import { wrapper } from "../store/store";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../store/themeSlice';
import { getRandom } from '../utils';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App);