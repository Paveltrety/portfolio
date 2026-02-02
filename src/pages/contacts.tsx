import Head from 'next/head';

export default function ContactsRedirect() {
  return (
    <Head>
      <meta httpEquiv="refresh" content="0;url=/ru/contacts/" />
      <meta name="robots" content="noindex, follow" />
    </Head>
  );
}