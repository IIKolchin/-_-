import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { wrapper } from "../store/store";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../store/themeSlice';
import { getRandom } from '../utils';

function App({ Component, pageProps }: AppProps) {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setTheme(getRandom(['1', '2', '3', '4'])));
  // })
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App);