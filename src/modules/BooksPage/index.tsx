import { Card } from '@/components/Card/Card';

import { BOOK_LIST } from './books.data';
import styles from './BooksPage.module.scss';
import { Book } from './components/Book/Book';

const BooksPage = () => {
  return (
    <Card>
      <h1 className={styles.title}>В данном разделе отображаются книги, прочитанные мной за этот год.</h1>
      <p className={styles.description}>Каждое произведение получает оценку по пятибалльной шкале Павлов: чем больше Павлов — тем лучше.</p>
      <div className={styles.wrapper}>
        {BOOK_LIST.map(({ image, ...otherParams }) => (
          <Book key={image} image={image} {...otherParams} />
        ))}
      </div>
    </Card>
  );
};

export default BooksPage;
