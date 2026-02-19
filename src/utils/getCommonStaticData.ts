import { GetStaticPaths, GetStaticProps } from 'next';

import { LOCALES_LIST } from '@/constants/locales';

export const getCommonStaticPaths: GetStaticPaths = async () => {
  return {
    paths: LOCALES_LIST.map((locale) => ({
      params: { locale },
    })),
    fallback: false,
  };
};

export const getCommonStaticProps: GetStaticProps = async ({ params }) => {
  const locale = params?.locale as string;

  return {
    props: {
      i18n: {
        locale,
        locales: LOCALES_LIST,
      },
    },
  };
};
