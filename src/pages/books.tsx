import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: '/ru/books',
      permanent: false,
    },
  };
};

export default function Books() {
  return null;
}