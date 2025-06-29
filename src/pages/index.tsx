import { DefaultLayout } from '@/components/DefaultLayout/DefaultLayout';
import { SeoHead } from '@/components/SeoHead/SeoHead';
import { MAIN_SITE_URL, Routes } from '@/constants/routes';
import MainPage from '@/modules/MainPage';
import { ReactElement } from 'react';

function Main() {
  return (
    <>
      <SeoHead
        title="Портфолио Павла Третьякова — Frontend разработчик"
        description="Привет! Я Павел Третьяков, занимаюсь веб-разработкой. Мои проекты, технологии и достижения. Некоторые мысли о жизни"
        url={`${MAIN_SITE_URL}${Routes.main}`}
      />
      <MainPage />
    </>
  );
}

Main.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Main;
