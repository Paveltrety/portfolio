import { SeoHead } from '@/components/SeoHead/SeoHead';
import { ShopLayout } from '@/components/ShopLayout/ShopLayout';
import { MAIN_SITE_URL, Routes } from '@/constants/routes';
import ShopPage from '@/modules/ShopPage';
import { ReactElement } from 'react';

function Shop() {
  return (
    <>
      <SeoHead
        title="Прочитанные книги — Портфолио Павла Третьякова"
        description="Спиоск прочитанных книг Павлом Третьяковым и мини рецензии"
        url={`${MAIN_SITE_URL}${Routes.books}`}
      />
      <ShopPage />
    </>
  );
}

Shop.getLayout = function getLayout(page: ReactElement) {
  return <ShopLayout>{page}</ShopLayout>;
};

export default Shop;
