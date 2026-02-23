import { GetStaticPaths, GetStaticProps } from 'next';
import { useTranslation } from 'react-i18next';

import { SeoHead } from '@/components/SeoHead/SeoHead';
import { MAIN_SITE_URL, Routes } from '@/constants/routes';
import PortfolioPage from '@/modules/PortfolioPage';
import { getCommonStaticPaths, getCommonStaticProps } from '@/utils/getCommonStaticData';

export default function Portfolio() {
  const { t } = useTranslation();
  return (
    <>
      <SeoHead title={t('seo.portfolio.title')} description={t('seo.portfolio.description')} url={`${MAIN_SITE_URL}${Routes.portfolio}`} />
      <PortfolioPage />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = getCommonStaticPaths;

export const getStaticProps: GetStaticProps = getCommonStaticProps;
