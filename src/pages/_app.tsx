import type { AppProps } from 'next/app';

import { globalStyles } from '@/styles/global';
import { Header } from '@/components/Header';

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
