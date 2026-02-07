import { GetStaticPaths, GetStaticProps } from 'next';
import { useTranslation } from 'react-i18next';

import { SeoHead } from '@/components/SeoHead/SeoHead';
import { MAIN_SITE_URL, Routes } from '@/constants/routes';
import ContactsPage from '@/modules/ContactsPage';
import { getCommonStaticPaths, getCommonStaticProps } from '@/utils/getCommonStaticData';

export default function Contacts() {
  const { t } = useTranslation();
  return (
    <>
      <SeoHead title={t('seo.contacts.title')} description={t('seo.contacts.description')} url={`${MAIN_SITE_URL}${Routes.contacts}`} />
      <ContactsPage />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = getCommonStaticPaths;

export const getStaticProps: GetStaticProps = getCommonStaticProps;
