import { DefaultLayout } from '@/components/DefaultLayout/DefaultLayout';
import { SeoHead } from '@/components/SeoHead/SeoHead';
import { MAIN_SITE_URL, Routes } from '@/constants/routes';
import ContactsPage from '@/modules/ContactsPage';
import { ReactElement } from 'react';

function Contacts() {
  return (
    <>
      <SeoHead
        title="Контакты — Портфолио Павла Третьякова"
        description="Связаться с Павлом Третьяковым. Электронная почта, социальные сети, форма для анонимной обратной связи."
        url={`${MAIN_SITE_URL}${Routes.contacts}`}
      />
      <ContactsPage />
    </>
  );
}

Contacts.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Contacts;
