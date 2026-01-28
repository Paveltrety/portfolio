import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: '/ru/contacts',
      permanent: false,
    },
  };
};

export default function Contacts() {
  return null;
}