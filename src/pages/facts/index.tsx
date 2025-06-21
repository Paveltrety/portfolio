import { SeoHead } from '@/components/SeoHead/SeoHead';
import { MAIN_SITE_URL, Routes } from '@/constants/routes';
import FactsPage from '@/modules/FactsPage';

export default function Facts() {
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
