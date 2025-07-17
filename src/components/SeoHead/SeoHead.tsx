import Head from 'next/head';

import { MAIN_SITE_URL } from '@/constants/routes';

interface SeoHeadProps {
  title: string;
  description: string;
  url: string;
}

export const SeoHead = ({ title, description, url }: SeoHeadProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={MAIN_SITE_URL + '/images/beach-photo.jpg'} />
    <meta property="og:url" content={url} />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="canonical" href={url} />
    <link rel="icon" href="/favicon/favicon.ico" />
  </Head>
);
