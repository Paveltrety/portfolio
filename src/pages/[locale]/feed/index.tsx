import { GetStaticPaths, GetStaticProps } from 'next';
import { useTranslation } from 'react-i18next';

import { SeoHead } from '@/components/SeoHead/SeoHead';
import { MAIN_SITE_URL, Routes } from '@/constants/routes';
import FeedPage from '@/modules/FeedPage';
import { getCommonStaticPaths, getCommonStaticProps } from '@/utils/getCommonStaticData';

export default function Feed() {
  const { t } = useTranslation();
  return (
    <>
      <SeoHead title={t('seo.feed.title')} description={t('seo.feed.title')} url={`${MAIN_SITE_URL}${Routes.feed}`} />
      <FeedPage />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = getCommonStaticPaths;

export const getStaticProps: GetStaticProps = getCommonStaticProps;
