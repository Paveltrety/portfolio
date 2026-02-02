import { SeoHead } from '@/components/SeoHead/SeoHead';
import { MAIN_SITE_URL, Routes } from '@/constants/routes';
import FeedPage from '@/modules/FeedPage';

export default function Feed() {
  return (
    <>
      <SeoHead
        title="Лента - напиши что хочешь"
        description="Напиши любое сообщение и оно отобразится в списке."
        url={`${MAIN_SITE_URL}${Routes.feed}`}
      />
      <FeedPage />
    </>
  );
}
