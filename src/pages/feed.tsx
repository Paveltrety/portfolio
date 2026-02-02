import Head from 'next/head';

export default function FeedRedirect() {
  return (
    <Head>
      <meta httpEquiv="refresh" content="0;url=/ru/feed/" />
      <meta name="robots" content="noindex, follow" />
    </Head>
  );
}