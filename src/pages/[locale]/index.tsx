import { GetStaticPaths, GetStaticProps } from 'next';
import { useTranslation } from 'react-i18next';

import { SeoHead } from '@/components/SeoHead/SeoHead';
import { MAIN_SITE_URL, Routes } from '@/constants/routes';
import MainPage from '@/modules/MainPage';
import { getCommonStaticPaths, getCommonStaticProps } from '@/utils/getCommonStaticData';

export default function Main() {
  const { t } = useTranslation();
  return (
    <>
      <SeoHead
        title={t('seo.main.title')}
        description={t('seo.main.description')}
        url={`${MAIN_SITE_URL}${Routes.main}`}
      />
      <MainPage />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = getCommonStaticPaths;

export const getStaticProps: GetStaticProps = getCommonStaticProps;
