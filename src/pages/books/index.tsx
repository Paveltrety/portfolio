import BooksPage from '@/modules/BooksPage';

export default function Books() {
  return <BooksPage />;
}

export async function getStaticProps() {
  // тут получи данные
  return {
    props: {
      // передай данные в компонент
    },
  };
}
