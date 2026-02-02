import '@/styles/styles.scss';
import '@/styles/globals.scss';
import '@/i18n/config';

import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';

import { Layout } from '@/components/Layout/Layout';
import { Routes } from '@/constants/routes';
import store from '@/store';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Provider store={store}>
        <Layout isMainPage={pathname === Routes.main}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
