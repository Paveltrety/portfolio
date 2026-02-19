import { Head, Html, Main, NextScript } from 'next/document';

import { YandexMetrikaScript } from '@/analytics/YandexMetrika';

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <YandexMetrikaScript />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
