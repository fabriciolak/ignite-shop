import type { AppProps } from 'next/app';

import { globalStyles } from '@/styles/global';
import { Header } from '@/components/Header';
import { CartContextProvider } from '@/contexts/Cart';

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartContextProvider>
        <Header />
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
