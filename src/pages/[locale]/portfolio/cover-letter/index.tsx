import { GetStaticPaths, GetStaticProps } from 'next';
import { useTranslation } from 'react-i18next';

import { SeoHead } from '@/components/SeoHead/SeoHead';
import { MAIN_SITE_URL, Routes } from '@/constants/routes';
import CoverLetterPage from '@/modules/CoverLetterPage';
import { getCommonStaticPaths, getCommonStaticProps } from '@/utils/getCommonStaticData';

export default function CoverLetter() {
  const { t } = useTranslation();
  return (
    <>
      <SeoHead
        title={t('seo.portfolio.coverLetter.title')}
        description={t('seo.portfolio.coverLetter.description')}
        url={`${MAIN_SITE_URL}${Routes.portfolioCoverLetter}`}
      />
      <CoverLetterPage />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = getCommonStaticPaths;

export const getStaticProps: GetStaticProps = getCommonStaticProps;
