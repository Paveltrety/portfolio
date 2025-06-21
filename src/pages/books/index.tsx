import { SeoHead } from '@/components/SeoHead/SeoHead';
import { MAIN_SITE_URL, Routes } from '@/constants/routes';
import BooksPage from '@/modules/BooksPage';

export default function Books() {
  return (
    <>
      <SeoHead
        title="Прочитанные книги — Портфолио Павла Третьякова"
        description="Спиоск прочитанных книг Павлом Третьяковым и мини рецензии"
        url={`${MAIN_SITE_URL}${Routes.books}`}
      />
      <BooksPage />
    </>
  );
}
