import { useRouter } from 'next/router';

export const useLocaleFromQuery = () => {
  const router = useRouter();

  return router.query?.locale as 'en' | 'ru' | undefined;
};
