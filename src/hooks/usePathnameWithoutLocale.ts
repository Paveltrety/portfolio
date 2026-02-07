import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { Routes } from '@/constants/routes';

export const usePathnameWithoutLocale = () => {
  const router = useRouter();

  return useMemo(() => {
    const pathnameWithoutLocale = router.pathname.split('[locale]');
    const firstSegmentPatch = pathnameWithoutLocale?.[1];
    return firstSegmentPatch === '' ? Routes.main : firstSegmentPatch;
  }, [router.pathname]);
};
