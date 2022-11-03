import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import Solo from '../components/solo';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Home.module.css';
import { setTheme } from '../store/themeSlice';
import { getRandom } from '../utils';

export default function Home() {
  return (
    <>
      <Solo />
    </>
  );
}
