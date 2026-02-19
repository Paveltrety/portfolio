import { GetStaticPaths, GetStaticProps } from 'next';
import { useTranslation } from 'react-i18next';

import { SeoHead } from '@/components/SeoHead/SeoHead';
import { MAIN_SITE_URL, Routes } from '@/constants/routes';
import BooksPage from '@/modules/BooksPage';
import { getCommonStaticPaths, getCommonStaticProps } from '@/utils/getCommonStaticData';

export default function Books() {
  const { t } = useTranslation();
  return (
    <>
      <SeoHead title={t('seo.books.title')} description={t('seo.books.description')} url={`${MAIN_SITE_URL}${Routes.books}`} />
      <BooksPage />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = getCommonStaticPaths;

export const getStaticProps: GetStaticProps = getCommonStaticProps;
