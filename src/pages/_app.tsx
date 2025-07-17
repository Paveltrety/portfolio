import '@/styles/styles.scss';
import '@/styles/globals.scss';

import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';

import { Layout } from '@/components/Layout/Layout';
import { Routes } from '@/constants/routes';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>

      <Layout isMainPage={pathname === Routes.main}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
