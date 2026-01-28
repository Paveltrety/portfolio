import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: '/ru/feed',
      permanent: false,
    },
  };
};

export default function Feed() {
  return null;
}