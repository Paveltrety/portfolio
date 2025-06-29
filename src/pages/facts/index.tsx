import { DefaultLayout } from '@/components/DefaultLayout/DefaultLayout';
import { SeoHead } from '@/components/SeoHead/SeoHead';
import { MAIN_SITE_URL, Routes } from '@/constants/routes';
import FactsPage from '@/modules/FactsPage';
import { ReactElement } from 'react';

function Facts() {
  return (
    <>
      <SeoHead
        title="Факты — Портфолио Павла Третьякова"
        description="Различные факты о Павле Третьякове и его проектах"
        url={`${MAIN_SITE_URL}${Routes.facts}`}
      />
      <FactsPage />
    </>
  );
}

Facts.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Facts;
