import { useTranslation } from 'react-i18next';

import { Card } from '@/components/Card/Card';

import { BOOK_LIST } from './books.data';
import styles from './BooksPage.module.scss';
import { Book } from './components/Book/Book';

const BooksPage = () => {
  const { t } = useTranslation();
  return (
    <Card>
      <h1 className={styles.title}>{t('books.title')}</h1>
      <p className={styles.description}>{t('books.description')}</p>
      <div className={styles.wrapper}>
        {BOOK_LIST.map(({ image, ...otherParams }) => (
          <Book key={image} image={image} {...otherParams} />
        ))}
      </div>
    </Card>
  );
};

export default BooksPage;
