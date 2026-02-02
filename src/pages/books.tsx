import Head from 'next/head';

export default function BooksRedirect() {
  return (
    <Head>
      <meta httpEquiv="refresh" content="0;url=/ru/books/" />
      <meta name="robots" content="noindex, follow" />
    </Head>
  );
}
