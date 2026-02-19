import '@/styles/styles.scss';
import '@/styles/globals.scss';

import type { AppProps } from 'next/app';
import { Geist } from 'next/font/google';
import { Provider } from 'react-redux';

import { Layout } from '@/components/Layout/Layout';
import { withStaticI18n } from '@/i18n/withStaticI18n';
import store from '@/store';

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
  display: 'swap',
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${geist.style.fontFamily};
        }
      `}</style>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default withStaticI18n(App);
