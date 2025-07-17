import { SeoHead } from '@/components/SeoHead/SeoHead';
import { MAIN_SITE_URL, Routes } from '@/constants/routes';
import MainPage from '@/modules/MainPage';

export default function Main() {
  return (
    <>
      <SeoHead
        title="Павел Третьяков — Frontend разработчик"
        description="Привет! Я Павел Третьяков, занимаюсь веб-разработкой. Работаю за деньги с TypeScript, ReactJS и Next.js более 5 лет"
        url={`${MAIN_SITE_URL}${Routes.main}`}
      />
      <MainPage />
    </>
  );
}
