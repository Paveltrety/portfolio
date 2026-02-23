import Head from 'next/head';

export default function PortfolioRedirect() {
  return (
    <Head>
      <meta httpEquiv="refresh" content="0;url=/ru/portfolio/" />
      <meta name="robots" content="noindex, follow" />
    </Head>
  );
}
