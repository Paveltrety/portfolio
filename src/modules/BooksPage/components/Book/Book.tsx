import Image from 'next/image';

import { Rating } from '@/components/ui/Rating/Rating';
import { IBook } from '@/types/books';

import styles from './Book.module.scss';

export const Book = ({ name, rate, image }: IBook) => {
  return (
    <div className={styles.root}>
      <Image className={styles.image} src={`/images/books/${image}`} alt={name} fill />

      <div className={styles.content}>
        <Rating rating={rate} />
      </div>
    </div>
  );
};
